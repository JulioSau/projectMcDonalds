import React from "react";
import "../../styles/newcooker.scss";
import { Link } from "react-router-dom";

export const NewCooker = () => {
	return (
		<div className="principalbox container rounded d-flex justify-content-center mt-5">
			<div className="col-md-6">
				<h2 className="pb-3 pt-5 text-center">Nuevo usuario</h2>
				<form>
					<div className="form-group">
						<label>Nombre de usuario:</label>
						<input type="user" className="input form-control" id="user" placeholder="Escribe tu usuario" />
					</div>
					<div className="form-group">
						<label>Nombre y apellidos:</label>
						<input
							type="name"
							className="input form-control"
							id="name"
							placeholder="Escribe tu nombre y apellidos"
						/>
					</div>
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
					<div className="text-center pt-4 pb-4">
						<Link to="/kictchen">
							<button
								type="submit"
								className="submit btn btn-default bg-success rounded-pill text-white ">
								Crear nuevo usuario
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
