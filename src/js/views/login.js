import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

export const Login = () => {
	return (
		<div className="container">
			<Link to="/login" />
			<div className="login-box">
				<div className="logo-box">
					<img
						className="logo-login"
						src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
					/>
					<h2>D-Kitchen</h2>
				</div>

				<form className="input-login ">
					<div>
						<label>Usuario</label>
						<br />
						<input type="text" />
					</div>
					<div>
						<label>Contraseña</label>
						<br />
						<input type="text" />
					</div>
					<div className="btn-sesion">
						<button>Iniciar sesion</button>
					</div>
				</form>
			</div>
		</div>
	);
};
