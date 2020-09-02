import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/newcooker.scss";
import "../../styles/global.scss";
import { Link } from "react-router-dom";

export const NewCooker = () => {
	return (
		<div className="container pt-3 pb-3">
			<h2 className="pb-3 pt-5  text-center title-sub">Nuevo usuario</h2>
			<form>
				<div className="form-group">
					<label>Nombre de usuario:</label>
					<input type="user" className=" form-control" id="user" placeholder="Escribe tu usuario" />
				</div>
				<div className="form-group">
					<label>Nombre y apellidos:</label>
					<input type="name" className="form-control" id="name" placeholder="Escribe tu nombre y apellidos" />
				</div>
				<div className="form-group">
					<label>Email address:</label>
					<input type="email" className="form-control" id="email" placeholder="Escribe tu email" />
				</div>
				<div className="form-group">
					<label>Password:</label>
					<input type="password" className="form-control" id="pwd" placeholder="Escribe tu contraseña" />
				</div>
				<div className="text-center pt-4 pb-4">
					<Link to="/kictchen">
						<Button variant="secondary" type="submit">
							Crear usuario
						</Button>
					</Link>
				</div>
			</form>
		</div>
	);
};
