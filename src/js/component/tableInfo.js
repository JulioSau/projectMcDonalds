import React, { useState, useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import "../../styles/tableInfo.scss";
export const TableInfo = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="d-flex justify-content-center">
			<div className=" borde col-6">
				<table className="table">
					<div className="btn-sesion" />
					<thead>
						<tr className="head">
							<th scope="col">Logo</th>
							<th scope="col">Codigo</th>
							<th scope="col">Sala</th>
							<th scope="col">Tiempo</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						{store.orders.map((infoRow, index) => {
							if (infoRow.status == "espera") {
								infoRow.time = "00:00";
							}
							if (infoRow.status == "espera" || infoRow.status == "proceso")
								return (
									<tr key={index}>
										<th scope="row">
											<img className="icono-logo" src={infoRow.logo_delivery} />
										</th>
										<th>{infoRow.called_code}</th>
										<th>{infoRow.room}</th>
										<th>{infoRow.time}</th>
										<th>{infoRow.status}</th>
									</tr>
								);
						})}
					</tbody>
				</table>
			</div>
			<div className="col-6">
				<table className="table">
					<thead>
						<tr className="head">
							<th scope="col">Logo</th>
							<th scope="col">Codigo</th>
							<th scope="col">Sala</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						{store.orders.map((ready, index) => {
							if (ready.status == "listo" || ready.status == "entregado")
								return (
									<tr key={index}>
										<th scope="row">
											<img className="icono-logo" src={ready.logo_delivery} />
										</th>
										<th>{ready.called_code}</th>
										<th>{ready.room}</th>
										<th>{ready.status}</th>
									</tr>
								);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
