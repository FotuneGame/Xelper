import React, { useState } from 'react';
//ипорты api
import API from "@packages/shared/API/test"; // Assuming you have an API module for authentication
import style from './Registration.module.scss';

const RegistrationForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formState));

        if (Object.keys(formErrors).length === 0 && !isSubmitting) {
            setIsSubmitting(true);
            try {
                await API.register(formState);
                // Registration successful, redirect or show success message
            } catch (error) {
                // Registration failed, handle error
                setIsSubmitting(false);
            }
        }
    };

    const validate = (formState) => {
        const errors = {};

        if (!formState.username) {
            errors.username = 'Username is required';
        }

        if (!formState.email) {
            errors.email = 'Email is required';
        }

        if (!formState.password) {
            errors.password = 'Password is required';
        }

        if (formState.password !== formState.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    return (
        <form className={style.registrationForm} onSubmit={handleSubmit}>
            <label htmlFor="username">Логин:</label>
            <input
                type="text"
                name="username"
                value={formState.username}
                onChange={handleChange}
            />
            {formErrors.username && <p className={style.error}>{formErrors.username}</p>}

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
            />
            {formErrors.email && <p className={style.error}>{formErrors.email}</p>}

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
            />
            {formErrors.password && <p className={style.error}>{formErrors.password}</p>}

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
                type="password"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
            />
            {formErrors.confirmPassword && (
                <p className={style.error}>{formErrors.confirmPassword}</p>
            )}

            <button type="submit" disabled={isSubmitting}>
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;





/*import React from 'react';
import "./Registration.module.scss";

interface IProps{

}

const Registration: React.FC<IProps> = ({}) => {

    return (
        <div>
            Страница регистрации
        </div>
    );
};

export default Registration;*/