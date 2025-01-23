
import { useState } from "react";

const InputPassword = ({ id, name, error, placeholder, register }) => {

    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPassword ? "text" : "password";
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className="input-group input-group-merge" >
            <input {...register(name)} id={id} type={inputType} placeholder={placeholder} className={`form-control  ${error && 'is-invalid'}`} name={name} />
            <span className="input-group-text cursor-pointer" onClick={togglePasswordVisibility}>
                <i className={`bx ${showPassword ? "bx-show" : "bx-hide"}`}></i>
            </span>
        </div>
    );

}

export default InputPassword
