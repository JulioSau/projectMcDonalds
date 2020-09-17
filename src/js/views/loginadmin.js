import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../styles/login.scss";
import "../../styles/global.scss";

import { Link } from "react-router-dom";

export const LoginAdmin = () => {
	return (
		<div className="login-box">
			<div className="logo-box">
				<img
					className="logo-medium"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<span className="title">D-Kitchen Admin</span>
			</div>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Link to="/adminview">
					<Button variant="secondary" type="submit">
						Iniciar sesión
					</Button>
				</Link>
				<Link to="/newadmin">
					<Button variant="secondary ml-5" type="submit">
						Crear nueva cuenta Admin
					</Button>
				</Link>
			</Form>
			<div className="mt-5">
				<Link to="/">
					<span className="d-flex justify-content-center">Volver a la Entrada</span>
				</Link>
				<Link to="/newpassword">
					<span className="d-flex justify-content-center">Recuperar contraseña</span>
				</Link>
			</div>
		</div>
	);
};
