import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../styles/login.scss";
import "../../styles/global.scss";

import { Link } from "react-router-dom";

export const NewPassword = () => {
	return (
		<div className="passwordbox">
			<div className="logo-box">
				<img
					className="logo-medium"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<span className="title">D-Kitchen</span>
			</div>
			<div className="justify-content-center d-block">
				<h4>Si has olvidado tu contraseña ponte en contacto con nosotros y la restableceremos.</h4>
				<h4>LLámanos:</h4>
			</div>
			<div className="mt-5">
				<Link to="/">
					<span className="d-flex justify-content-center">Volver a la Entrada</span>
				</Link>
			</div>
		</div>
	);
};
