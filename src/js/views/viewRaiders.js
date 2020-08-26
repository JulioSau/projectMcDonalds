import React from "react";
import "../../styles/raiders.scss";
import { TableInfo } from "../component/tableInfo";
import { Link } from "react-router-dom";

export const ViewRaiders = () => (
	<div className="container">
		<Link to="/" />
		<Link to="/login">
			<div>LOGIN</div>
		</Link>
		<div className="row p-2 px-4 d-flex justify-content-between align-items-end">
			<h1>D-Kitchen</h1>{" "}
			<img
				className="logo-raiders"
				src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
			/>
		</div>
		<TableInfo />
	</div>
);
