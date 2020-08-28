import React from "react";
import "../../styles/newcooker.scss";

export const NewCooker = () => {
	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="col-5">
				<h3 className="pb-3 pt-5">Crear nuevo usuario</h3>
				<form>
					<div className="form-group">
						<label>Nombre de usuario:</label>
						<input type="user" className="form-control" id="user" />
					</div>
					<div className="form-group">
						<label>Nombre y apellidos:</label>
						<input type="name" className="form-control" id="name" />
					</div>
					<div className="form-group">
						<label>Email address:</label>
						<input type="email" className="form-control" id="email" />
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input type="password" className="form-control" id="pwd" />
					</div>
					<button type="submit" className="btn btn-default bg-success text-white ">
						Crear nuevo usuario
					</button>
				</form>
			</div>
		</div>
	);
};
