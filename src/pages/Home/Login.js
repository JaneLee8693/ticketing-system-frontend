import React from 'react';
import './Login.css';
import { LoginForm } from '../../components/login/LoginForm';
import { useState } from 'react';
import {PasswordResetForm} from '../../components/passwordReset/PasswordResetForm';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [formLoad, setFormLoad] = useState("login");

	const handleOnChange = (e) => {
	const { name, value } = e.target;
	switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
	}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (!email || !password) {
			return alert("Fill up all the form!");
		}
	};

	const formSwitcher = formType => {
		setFormLoad(formType);
	};

	const handleOnResetSubmit = (e) => {
		e.preventDefault();

		if (!email) {
			return alert("Please enter your email address");
		}
	};

	return (
	<div className='login-page bg-info'>
		<div className='info-block form-box'>
		{formLoad === 'login' && <LoginForm
			handleOnChange={handleOnChange}
			handleOnSubmit={handleOnSubmit}
			formSwitcher={formSwitcher}
			email={email}
			password={password}
		/>}
		{formLoad === 'reset' && <PasswordResetForm
			handleOnChange={handleOnChange}
			handleOnResetSubmit={handleOnResetSubmit}
			formSwitcher={formSwitcher}
			email={email}	
		/>}

		</div>
	</div>
	)
}