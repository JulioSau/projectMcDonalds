import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/tableInfo.scss";

export const TableInfo = () => {
	const { actions, store } = useContext(Context);
	return (
		<table className="table">
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
				{store.infoTable.map((infoRow, index) => {
					return (
						<tr key={index}>
							<th scope="row">
								<img className="icono-logo" src={infoRow.logo} />
							</th>
							<th>{infoRow.codigo}</th>
							<th>{infoRow.marca}</th>
							<th>{infoRow.sala}</th>
							<th>{infoRow.tiempo}</th>
							<th>{infoRow.status}</th>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
