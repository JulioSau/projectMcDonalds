import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/tableInfo.scss";

export const TableInfo = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="d-flex justify-content-center">
			<div className=" borde text-center col-6">
				<h2 className="font-weight-bolder py-2 head ">PEDIDOS EN COCINA</h2>
				<table className="table text-center">
					<div className="btn-sesion" />
					<thead>
						<tr className="head">
							<th scope="col">Logo</th>
							<th scope="col text-center">Codigo</th>
							<th scope="col">Sala</th>
							<th scope="col">Tiempo</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						{store.orders.map((infoRow, index) => {
							if (infoRow.status == "espera") {
							}
							if (infoRow.status == "espera" || infoRow.status == "proceso")
								return (
									<tr key={index}>
										<th scope="row">
											<img className="icono-logo rounded" src={infoRow.logo_delivery} />
										</th>
										<th className="text-center">{infoRow.called_code}</th>
										<th>{infoRow.cooker_id}</th>
										<th>{infoRow.time}</th>
										<th>{infoRow.status}</th>
									</tr>
								);
						})}
					</tbody>
				</table>
			</div>
			<div className="col-6 text-center ">
				<h2 className="font-weight-bolder py-2 head">PEDIDOS PARA ENTREGAR</h2>
				<table className="table text-center">
					<thead>
						<tr className="head">
							<th scope="col">Logo</th>
							<th scope="col ">Codigo</th>
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
											<img className="icono-logo rounded" src={ready.logo_delivery} />
										</th>
										<th>{ready.called_code}</th>
										<th>{ready.cooker_id}</th>
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
