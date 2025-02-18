
import { axios } from '../lib/axios.js';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.jsx';
import InputPassword from '../components/InputPassword.jsx';
import * as z from 'zod';

const Register = () => {


    const navigate = useNavigate();

    useDocumentTitle('Register');

    const schema = z.object({
        name: z.string().min(1, { message: "Name is required" }),
        email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
        password_confirmation: z.string().min(8, { message: "Password confirmation is required" }),
    }).refine((data) => {
        return data.password === data.password_confirmation || !data.password || !data.password_confirmation;
    }, {
        message: "Passwords do not match",
        path: ["password_confirmation"],
    });
    
    const { register, clearErrors, reset, handleSubmit, formState: { errors }, setError } = useForm({
        mode: 'all',
        resolver: zodResolver(schema),
    });
    

    async function userRegister(data) {
        try {
            const response = await axios.post('register', data);
            if (response.status === 204) {
                navigate('/login');
            }
        } catch (error) {
            if (error.response.data.message === "The email has already been taken.") {
                setError('email', { type: 'manual', message: 'This email is already taken. Please use another one.' });
            }
        }
    }

    const onsubmit = (data) => userRegister(data);


    return (
        <>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">
                        <div className="card">
                            <div className="card-body">
                                <div className="app-brand justify-content-center">
                                    <img
                                        src='logo.png'
                                        alt="web-logo"
                                        className="img-fluid rounded-circle"
                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }}
                                    />
                                </div>
                                <form onSubmit={handleSubmit(onsubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Username</label>
                                        <input
                                            name='name'
                                            {...register("name")}
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            id="name"
                                            placeholder="Enter your name or username"
                                        />
                                        {errors.name && <span style={{ fontSize: '13px' }} className="text-danger">{errors.name.message}</span>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            name='email'
                                            {...register("email")}
                                            type="text"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && <span style={{ fontSize: '13px' }} className="text-danger">{errors.email.message}</span>}
                                    </div>

                                    <div className="mb-3 form-password-toggle">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <InputPassword
                                            id="password"
                                            name="password"
                                            register={register}
                                            placeholder="Password"
                                            error={errors.password}
                                        />
                                        {errors.password && <span style={{ fontSize: '13px' }} className="text-danger">{errors.password.message}</span>}
                                    </div>

                                    <div className="mb-3 form-password-toggle">
                                        <label htmlFor="password_confirmation" className="form-label">Password Confirmation</label>
                                        <InputPassword
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            register={register}
                                            placeholder="Password Confirmation"
                                            error={errors.password_confirmation}
                                        />
                                        {errors.password_confirmation && <span style={{ fontSize: '13px' }} className='text-danger'>{errors.password_confirmation.message}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <Link to="/login">Already have an acount ?</Link>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary d-grid w-100">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
