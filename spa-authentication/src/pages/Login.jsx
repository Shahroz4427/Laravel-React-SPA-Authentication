
import { axios } from '../lib/axios.js';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.jsx';
import * as z from 'zod';

const Login = () => {


    const navigate = useNavigate();

    useDocumentTitle('Login');

    const schema = z.object({
        email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
        password_confirmation: z.string().min(8, { message: "Password confirmation is required" }),
    }).refine((data) => data.password === data.password_confirmation, {
        message: "Passwords do not match",
        path: ["password_confirmation"],
    });

    const { register, clearErrors, reset, setError, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        resolver: zodResolver(schema),
    });


    async function setAuthUser() {
        try {
            const response = await axios.get('/api/user');
            if (response.status === 200) {
                localStorage.setItem('authUser', JSON.stringify(response.data));
            }
        } catch (error) {
            console.error('Failed to fetch authenticated user:', error.message);
            localStorage.removeItem('authUser');
        }
    }


    async function userLogin(data) {
        try {
            const response = await axios.post('/login', data);
            if (response.status === 204) {
                await setAuthUser();
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            if (error.response?.data?.message === "These credentials do not match our records.") {
                setError('email', { type: 'manual', message: 'These credentials do not match our records.' });
                setError('password', { type: 'manual', message: 'These credentials do not match our records.' });
            }
        }
    }


    const onsubmit = (data) => userLogin(data);



    return (
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
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        name='email'
                                        {...register("email")}
                                        type="text"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        name='password'
                                        {...register("password")}
                                        type="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        id="password"
                                        placeholder="Password"
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <label htmlFor="password_confirmation" className="form-label">Password Confirmation</label>
                                    <input
                                        name='password_confirmation'
                                        {...register("password_confirmation")}
                                        type="password"
                                        className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                                        id="password_confirmation"
                                        placeholder="Password Confirmation"
                                    />
                                    {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation.message}</div>}
                                </div>
                                <div className="mb-3">
                                    <Link to="/register">Create an acount</Link>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary d-grid w-100">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login