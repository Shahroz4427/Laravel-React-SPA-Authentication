

import CustomersService from "../../services/CustomersService";
import { zodResolver } from '@hookform/resolvers/zod';
import { successToast } from "../../lib/sneat";
import { useForm } from "react-hook-form";
import * as z from 'zod';


const CustomerForm = ({ close, refetchData }) => {

    const { register, clearErrors, reset, handleSubmit, formState: { errors }, setError } = useForm({
        mode: 'all',
        resolver: zodResolver(schema),
    });

    const customerHandleSubmit = (data) => {
        CustomersService.createCustomer(data)
            .then(() => {
                successToast('Customer Added')
                reset();
                clearErrors();
                refetchData();
                close();
            })
            .catch((error) => {
                if (error.response.data.message === "The email has already been taken.") {
                    setError('email', {
                        type: 'manual',
                        message: 'This email is already taken. Please use another one.'
                    });
                }
            });
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(customerHandleSubmit)}
                className="add-new-record pt-0 row g-2 fv-plugins-bootstrap5 fv-plugins-framework"
                id="form-add-new-record"
                noValidate="novalidate"
            >
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicFullname">
                        Full Name
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span id="basicFullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                        </span>
                        <input
                            {...register("name")}
                            type="text"
                            id="basicFullname"
                            className={`form-control dt-full-name ${errors.name ? "is-invalid" : ""
                                }`}
                            placeholder="John Doe"
                        />
                    </div>
                    {errors.name && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.name.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicUsername">
                        Username
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-user-circle"></i>
                        </span>
                        <input
                            {...register("username")}
                            type="text"
                            id="basicUsername"
                            className={`form-control ${errors.username ? "is-invalid" : ""}`}
                            placeholder="Bret"
                        />
                    </div>
                    {errors.username && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicEmail">
                        Email
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-envelope"></i>
                        </span>
                        <input
                            {...register("email")}
                            type="email"
                            id="basicEmail"
                            className={`form-control dt-email ${errors.email ? "is-invalid" : ""
                                }`}
                            placeholder="john.doe@example.com"
                        />
                    </div>
                    {errors.email && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.email.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicPhone">
                        Phone
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-phone"></i>
                        </span>
                        <input
                            {...register("phone")}
                            type="text"
                            id="basicPhone"
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            placeholder="1-770-736-8031 x56442"
                        />
                    </div>
                    {errors.phone && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.phone.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicWebsite">
                        Website
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-globe"></i>
                        </span>
                        <input
                            {...register("website")}
                            type="url"
                            id="basicWebsite"
                            className={`form-control ${errors.website ? "is-invalid" : ""}`}
                            placeholder="https://example.com"
                        />
                    </div>
                    {errors.website && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.website.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 py-2">
                    <button
                        type="submit"
                        className="btn btn-primary data-submit me-sm-4 me-1"
                    >
                        Submit
                    </button>
                    <button
                        onClick={close}
                        type="reset"
                        className="btn btn-outline-secondary"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    )
};

export default CustomerForm

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    username: z.string().min(1, { message: "Username is required" }),
    email: z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email is required" }),
    phone: z
        .string()
        .regex(
            /^\+?[1-9]\d{1,14}(?: x\d+)?$/,
            { message: "Invalid phone number format" }
        )
        .min(1, { message: "Phone is required" }),
    website: z
        .string()
        .url({ message: "Invalid website URL" })
        .min(1, { message: "Website is required" }),
});