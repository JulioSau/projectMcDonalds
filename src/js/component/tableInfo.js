import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/tableInfo.scss";

export const TableInfo = () => {
	const { actions, store } = useContext(Context);
	return (
		<table className="table">
			<div className="btn-sesion">
				<Link to="/">
					<button>Iniciar sesion</button>
				</Link>
			</div>
			<thead>
				<tr>
					<th scope="col">Logo</th>
					<th scope="col">Codigo</th>
					<th scope="col">Marca</th>
					<th scope="col">Sala</th>
					<th scope="col">Tiempo</th>
					<th scope="col">Status</th>
				</tr>
			</thead>
			<tbody>
				{store.orders.map((infoRow, index) => {
					return (
						<tr key={index}>
							<th scope="row">
								<img className="icono-logo" src={infoRow.logo} />
							</th>
							<th>{infoRow.called_code}</th>
							<th>{infoRow.logo}</th>
							<th>{infoRow.brand}</th>
							<th>{infoRow.time}</th>
							<th>{infoRow.status}</th>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
