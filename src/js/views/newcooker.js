import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import "../../styles/global.scss";
import { Link } from "react-router-dom";

export const NewCooker = () => {
	const { actions, store } = useContext(Context);

	const [inputNickname, setNickname] = useState("");
	const [inputEnterpraise, setEnterpraise] = useState("");
	const [inputName, setName] = useState("");
	const [inputLastname, setLastname] = useState("");
	const [inputEmail, setEmail] = useState("");
	const [inputPassword, setPassword] = useState("");

	return (
		<div>
			<div className="bg-white head-kitchen d-flex ">
				<img
					className="logo-medium ml-5"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<div className="m-auto">
					<span className="title ">Nuevo usuario</span>
				</div>
				<Link to="/">
					<span className="go-to-login mr-5">
						<i
							onClick={() => {
								actions.logout();
							}}
							className="fa fa-sign-out"
							aria-hidden="true"
						/>
					</span>
				</Link>
			</div>
			<div className="col-5 mx-auto pt-3 pb-3">
				<form>
					<div className="d-flex justify-content-between ">
						<div className="form-group">
							<label>Nombre:</label>
							<input
								onChange={e => setNickname(e.target.value)}
								type="text"
								className="form-control "
								id="name"
								placeholder="Escribe tu nombre"
							/>
						</div>
						<div className="form-group">
							<label>Apellidos:</label>
							<input
								onChange={e => setLastname(e.target.value)}
								type="text"
								className="form-control "
								id="name"
								placeholder="Escribe tus apellidos"
							/>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="form-group">
							<label>Empresa:</label>
							<input
								onChange={e => setEnterpraise(e.target.value)}
								type="text"
								className="form-control "
								id="pwd"
								placeholder="Nombre de empresa"
							/>
						</div>
						<div className="form-group">
							<label>Email address:</label>
							<input
								onChange={e => setEmail(e.target.value)}
								type="email"
								className="form-control "
								id="email"
								placeholder="Escribe tu email"
							/>
						</div>
					</div>
					<div className="d-flex justify-content-between" />
					<div className="form-group">
						<label>Password:</label>
						<input
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control "
							id="pwd"
							placeholder="Escribe tu contraseña"
						/>
					</div>
					<div className="form-group">
						<label>Selecione sala de trabajo</label>
						<select className=" form-control col-2 ml-1">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<div className="text-center pt-4 pb-4">
						<Link to="/kitchen">
							<Button
								className="mr-4 bg-success"
								onClick={e => {
									actions.addCooker(
										inputNickname,
										inputEnterpraise,
										inputName,
										inputLastname,
										inputEmail,
										inputPassword
									);
								}}
								variant="secondary"
								type="submit">
								Crear usuario
							</Button>
							<Button
								onClick={e => {
									actions.addAdmin(
										inputNickname,
										inputEnterpraise,
										inputName,
										inputLastname,
										inputEmail,
										inputPassword
									);
								}}
								variant="secondary bg-info"
								type="submit">
								Crear Admin
							</Button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
