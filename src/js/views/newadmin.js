import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import "../../styles/newcooker.scss";
import "../../styles/global.scss";
import { Link } from "react-router-dom";

export const NewAdmin = () => {
	const { actions, store } = useContext(Context);

	const [inputNickname, setNickname] = useState("");
	const [inputEnterpraise, setEnterpraise] = useState("");
	const [inputName, setName] = useState("");
	const [inputLastname, setLastname] = useState("");
	const [inputEmail, setEmail] = useState("");
	const [inputPassword, setPassword] = useState("");

	return (
		<div className="container pt-3 pb-3">
			<h2 className="pb-3 pt-5  text-center title-sub">Nuevo usuario</h2>
			<form>
				<div className="form-group">
					<label>Nombre de usuario:</label>
					<input
						onChange={e => setNickname(e.target.value)}
						type="text"
						className=" form-control"
						id="user"
						placeholder="Escribe tu usuario"
					/>
				</div>
				<div className="form-group">
					<label>Empresa:</label>
					<input
						onChange={e => setEnterpraise(e.target.value)}
						type="text"
						className="form-control"
						id="pwd"
						placeholder="Nombre de empresa"
					/>
				</div>
				<div className="form-group">
					<label>Nombre:</label>
					<input
						onChange={e => setNickname(e.target.value)}
						type="text"
						className="form-control"
						id="name"
						placeholder="Escribe tu nombre"
					/>
				</div>
				<div className="form-group">
					<label>Apellidos:</label>
					<input
						onChange={e => setLastname(e.target.value)}
						type="text"
						className="form-control"
						id="name"
						placeholder="Escribe tus apellidos"
					/>
				</div>
				<div className="form-group">
					<label>Email address:</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="email"
						placeholder="Escribe tu email"
					/>
				</div>
				<div className="form-group">
					<label>Password:</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="pwd"
						placeholder="Escribe tu contraseña"
					/>
				</div>
				<div className="text-center pt-4 pb-4">
					<Link to="/adminview">
						<Button
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
					</Link>
				</div>
			</form>
		</div>
	);
};
