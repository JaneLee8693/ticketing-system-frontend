import React from 'react';
import './Login.css';
import { LoginForm } from '../../components/login/LoginForm';
import { useState } from 'react';
import {PasswordReset} from '../../components/passwordReset/PasswordReset';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

		// dispatch(loginPending());

		// try {
		// 	const isAuth = await userLogin({ email, password });

		// 	if (isAuth.status === "error") {
		// 		return dispatch(loginFail(isAuth.message));
		// 	}

		// 	dispatch(loginSuccess());
		// 	dispatch(getUserProfile());
		// 	history.push("/dashboard");
		// } catch (error) {
		// 	dispatch(loginFail(error.message));
		// }
	};

  return (
    <div className='login-page bg-info'>
      <div className='info-block form-box'>
        <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          email={email}
          password={password}
        />
		<PasswordReset
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          email={email}	
		/>
      </div>
    </div>
  )
}