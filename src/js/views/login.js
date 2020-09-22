import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import "../../styles/login.scss";
import "../../styles/global.scss";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const { actions, store } = useContext(Context);
	const [data, setData] = useState({
		email: "",
		password: ""
	});
	const inputChange = event => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const sendDatos = e => {
		e.preventDefault();
		actions.login(data.email, data.password);
	};

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
			<Form onSubmit={sendDatos}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control name="email" onChange={inputChange} type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control name="password" onChange={inputChange} type="password" placeholder="Password" />
				</Form.Group>
				<div className="d-flex justify-content-center ">
					<Button onSubmit={sendDatos} onClick={sendDatos} variant="secondary">
						Iniciar sesión
					</Button>
				</div>
			</Form>
		</div>
	);
};
