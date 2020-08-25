import React from "react";
import "../../styles/home.scss";
import { TableInfo } from "../component/tableInfo";
import { Link } from "react-router-dom";

export const Raiders = () => (
	<div className="container">
		<Link to="/" />
		<Link to="/login">
			<div>LOGUIN</div>
		</Link>
		<div className="row p-2 px-4 d-flex justify-content-between align-items-end">
			{" "}
			<h1>D-Kitchen</h1> <img src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png" />
		</div>
		<TableInfo />
	</div>
);
