import React from "react";

import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div className="container">
			<div className="login-box">
				<div className="logo-box">
					<img
						className="logo-login"
						src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
					/>
					<h2>D-Kitchen</h2>
				</div>

				<form className="input-login ">
					<div className="form-group">
						<label>Email address:</label>
						<input type="email" className=" input form-control" id="email" placeholder="Escribe tu email" />
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input
							type="password"
							className="input form-control"
							id="pwd"
							placeholder="Escribe tu contraseña"
						/>
					</div>
					<div className="btn-sesion">
						<Link to="/cooker">
							<button>Iniciar sesion</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
