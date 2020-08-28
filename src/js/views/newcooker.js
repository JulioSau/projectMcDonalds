import React from "react";
import "../../styles/newcooker.scss";

export const NewCooker = () => {
	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="col-5">
				<h3 className="pb-3 pt-5 text-center">Crear nuevo usuario</h3>
				<form>
					<div className="form-group">
						<label>Nombre de usuario:</label>
						<input type="user" className="input form-control rounded-pill" id="user" />
					</div>
					<div className="form-group">
						<label>Nombre y apellidos:</label>
						<input type="name" className="input form-control rounded-pill" id="name" />
					</div>
					<div className="form-group">
						<label>Email address:</label>
						<input type="email" className=" input form-control rounded-pill" id="email" />
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input type="password" className="input form-control rounded-pill" id="pwd" />
					</div>
					<div className="text-center pt-5">
						<button type="submit" className="submit btn btn-default bg-success text-white ">
							Crear nuevo usuario
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
