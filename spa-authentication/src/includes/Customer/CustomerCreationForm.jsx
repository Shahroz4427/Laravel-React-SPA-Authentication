

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import createCustomer from '../../zodschema/customer/createCustomer'
import { forwardRef, useImperativeHandle } from 'react';



const CustomerCreationForm = forwardRef(({ submit, close }, ref) => {


    const { register, clearErrors, reset, handleSubmit, formState: { errors }, setError } = useForm({
        mode: 'all',
        resolver: zodResolver(createCustomer),
    });


    useImperativeHandle(ref, () => ({
        clearErrors,
        reset,
        setError
    }));

    return (
        <>
            <form
                onSubmit={handleSubmit(submit)}
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
                    <label className="form-label" htmlFor="basicAddress">
                        Street
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-street-view"></i>
                        </span>
                        <input
                            {...register("address.street")}
                            type="text"
                            id="basicAddress"
                            className={`form-control ${errors.address?.street ? "is-invalid" : ""}`}
                            placeholder="123 Street Name"
                        />
                    </div>
                    {errors.address?.street && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.address.street.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicAddressSuite">
                        Suite
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-door-open"></i>
                        </span>
                        <input
                            {...register("address.suite")}
                            type="text"
                            id="basicAddressSuite"
                            className={`form-control ${errors.address?.suite ? "is-invalid" : ""}`}
                            placeholder="799 E DRAGRAM SUITE 5A"
                        />
                    </div>
                    {errors.address?.suite && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.address.suite.message}
                        </div>
                    )}
                </div>

                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicAddressZipcode">
                        Zipcode
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-location-plus"></i>
                        </span>
                        <input
                            {...register("address.zipcode")}
                            type="text"
                            id="basicAddressZipcode"
                            className={`form-control ${errors.address?.zipcode ? "is-invalid" : ""}`}
                            placeholder="05444"
                        />
                    </div>
                    {errors.address?.zipcode && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.address.zipcode.message}
                        </div>
                    )}
                </div>

                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicAddressCity">
                        City
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-buildings"></i>
                        </span>
                        <input
                            {...register("address.city")}
                            type="text"
                            id="basicAddressCity"
                            className={`form-control ${errors.address?.city ? "is-invalid" : ""}`}
                            placeholder="London"
                        />
                    </div>
                    {errors.address?.city && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.address.city.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicLatitude">
                        Latitude
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-map"></i>
                        </span>
                        <input
                            {...register("address.geo.lat")}
                            type="text"
                            id="basicLatitude"
                            className={`form-control ${errors.address?.geo?.lat ? "is-invalid" : ""}`}
                            placeholder="26.563963"
                        />
                    </div>
                    {errors.address?.geo?.lat && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.address.geo.lat.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicLongitude">
                        Longitude
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-map"></i>
                        </span>
                        <input
                            {...register("address.geo.lng")}
                            type="text"
                            id="basicLongitude"
                            className={`form-control ${errors.address?.geo?.lng ? "is-invalid" : ""}`}
                            placeholder="12.202967"
                        />
                    </div>
                    {errors.address?.geo?.lng && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.address.geo.lng.message}
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
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicCompany">
                        Company Name
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-briefcase"></i>
                        </span>
                        <input
                            {...register("company.name")}
                            type="text"
                            id="basicCompany"
                            className={`form-control ${errors.company?.name ? "is-invalid" : ""}`}
                            placeholder="Company Name"
                        />
                    </div>
                    {errors.company?.name && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.company.name.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicCompanyCatchPhrase">
                        Company Catch Phrase
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-bulb"></i>
                        </span>
                        <input
                            {...register("company.catchPhrase")}
                            type="text"
                            id="basicCompanyCatchPhrase"
                            className={`form-control ${errors.company?.catchPhrase ? "is-invalid" : ""}`}
                            placeholder="Company Catch Phrase"
                        />
                    </div>
                    {errors.company?.catchPhrase && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.company.catchPhrase.message}
                        </div>
                    )}
                </div>
                <div className="col-sm-12 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="basicCompanyBusinessStatement">
                        Company Business Statement
                    </label>
                    <div className="input-group input-group-merge has-validation">
                        <span className="input-group-text">
                            <i className="bx bx-message-detail"></i>
                        </span>
                        <input
                            {...register("company.bs")}
                            type="text"
                            id="basicCompanyBusinessStatement"
                            className={`form-control ${errors.company?.bs ? "is-invalid" : ""}`}
                            placeholder="Company Business Statement"
                        />
                    </div>
                    {errors.company?.bs && (
                        <div className="fv-plugins-message-container invalid-feedback">
                            {errors.company.bs.message}
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
});

export default CustomerCreationForm