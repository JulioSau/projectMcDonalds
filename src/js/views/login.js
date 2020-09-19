import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import "../../styles/login.scss";
import "../../styles/global.scss";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { actions, store } = useContext(Context);
	function passwordChange(e) {
		setPassword(e.currentTarget.value);
	}
	function emailChange(e) {
		setEmail(e.currentTarget.value);
	}
	function login() {
		actions.login(email, password);
	}
	console.log(store.cooker.is_admin);
	if (store.cooker.is_admin) {
		return <Redirect to="/registre" />;
	} else if (store.cooker.is_admin === false) {
		return <Redirect to="/kitchen" />;
	}
	return (
		<div className="login-box">
			<div className="logo-box">
				<img
					className="logo-medium"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<span className="title">D-Kitchen</span>
			</div>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control value={email} onChange={emailChange} type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control value={password} onChange={passwordChange} type="password" placeholder="Password" />
				</Form.Group>
				<Button onClick={login} variant="secondary">
					Iniciar sesión
				</Button>
			</Form>
		</div>
	);
};
