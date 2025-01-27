import ProfilePreview from '../components/ProfilePreview.jsx';
import InputPassword from '../components/InputPassword.jsx';
import SpinnerButton from '../components/SpinnerButton.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import Layout from '../layout/Layout.jsx';
import * as z from 'zod';


const UserProfile = () => {

    useDocumentTitle('User Profile');

    const validateImageDimensions = async (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                if (img.width <= 200 && img.height <= 200) {
                    resolve(true);
                } else {
                    reject("Profile picture dimensions should not exceed 200x200 pixels.");
                }
            };
            img.onerror = () => reject("Invalid image file.");
        });
    };

    const schema = z.object({
        profile: z.object({ avatar: z.any().refine((file) => validateImageDimensions(file), "Profile picture dimensions should not exceed 200x200 pixels.") }),
        name: z.string().min(3, "Name is Required").max(255, "Name must be 255 characters or less"),
        email: z.string().email("Invalid email address"),
        old_password: z.string().min(8, "Password must be at least 8 characters long"),
        password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
        password_confirmation: z.string().min(8, { message: "Password confirmation is required" }),
    }).refine((data) => {
        return data.password === data.password_confirmation || !data.password || !data.password_confirmation;
    }, {
        message: "Passwords do not match", path: ["password_confirmation"],
    });

    const { register, clearErrors, reset, handleSubmit, formState: { errors, isLoading }, setError, setValue } = useForm({
        mode: 'all',
        resolver: zodResolver(schema),
    });


    const onsubmit = (data) => {
        console.log(data);
    };

    return (
        <Layout>
            <div className="col-xl">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Profile</h5>
                    </div>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="card-body">
                            <div className="mb-3">
                                <ProfilePreview
                                    name="profile"
                                    id="profile"
                                    setValue={setValue}
                                    error={errors.profile?.message}
                                />

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <div className="input-group input-group-merge">
                                    <span className="input-group-text"><i className='bx bxs-user'></i></span>
                                    <input
                                        {...register('name')}
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        placeholder="name"
                                        name="name"
                                    />
                                </div>
                                {errors.name && (<span className="text-danger">{errors.name.message}</span>)}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <div className="input-group input-group-merge">
                                    <span className="input-group-text"><i className='bx bxs-envelope'></i></span>
                                    <input
                                        {...register('email')}
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Email"
                                        name="email"
                                    />
                                </div>
                                {errors.email && (<span className="text-danger">{errors.email.message}</span>)}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Old Password</label>
                                <div className="input-group input-group-merge">
                                    <InputPassword
                                        id="old_password"
                                        name="old_password"
                                        register={register}
                                        placeholder="Old Password"
                                        error={errors.old_password}
                                    />
                                </div>
                                {errors.old_password && (<span className="text-danger">{errors.old_password.message}</span>)}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <div className="input-group input-group-merge">
                                    <InputPassword
                                        id="password"
                                        name="password"
                                        register={register}
                                        placeholder="New Password"
                                        error={errors.password}
                                    />
                                </div>
                                {errors.password && (<span className="text-danger">{errors.password.message}</span>)}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <div className="input-group input-group-merge">
                                    <InputPassword
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        register={register}
                                        placeholder="New Password Confirmation"
                                        error={errors.password_confirmation}
                                    />
                                </div>
                                {errors.password_confirmation && (<span className="text-danger">{errors.password_confirmation.message}</span>)}
                            </div>
                            <div className="text-end">
                                <SpinnerButton processing={isLoading}>Saved</SpinnerButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default UserProfile