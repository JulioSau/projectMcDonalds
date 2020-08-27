import React from "react";
import "../../styles/tableInfo.scss";

export const TableInfo = () => {
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
				<tr>
					<th scope="row">
						<img
							className="icono-logo"
							src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png"
						/>
					</th>
					<td>AA-45BC</td>
					<td>Goiko</td>
					<td>4</td>
					<td>--:--</td>
					<td>Cancelado</td>
				</tr>
				<tr>
					<th scope="row">
						{" "}
						<img
							className="icono-logo"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU"
						/>
					</th>
					<td>AA-45BC</td>
					<td>Mc Donalds</td>
					<td>1</td>
					<td>00:00 min</td>
					<td>Listo</td>
				</tr>
				<tr>
					<th scope="row">
						{" "}
						<img
							className="icono-logo"
							src="https://upload.wikimedia.org/wikipedia/commons/9/9d/JE_New_Logo.png"
						/>
					</th>
					<td>BB-55BC</td>
					<td>Yakutza</td>
					<td>3</td>
					<td>01:15 min</td>
					<td>Realizando</td>
				</tr>
				<tr>
					<th scope="row">
						{" "}
						<img
							className="icono-logo"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU"
						/>
					</th>
					<td>AA-45BC</td>
					<td>Mc Donalds</td>
					<td>1</td>
					<td>00:00 min</td>
					<td>Listo</td>
				</tr>
			</tbody>
		</table>
	);
};
