import React from "react";
import { Link } from "react-router-dom";
import "../../styles/viewsKitchen.scss";
import "../../styles/global.scss";

export const AdminView = () => {
	return (
		<div className="d-flex ">
			<div className="col-3 btn-kitchen-box">
				<div className="head-logo">
					<img
						className="logo-medium"
						src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
					/>
					<span className="text-muetd title">D-Kitchen Admin</span>
				</div>
				<Link to="/repartidor">
					<button className="mt-5 btn-kitchen-command">Pedidos en lista</button>
				</Link>
				<Link to="/">
					<span>Cerrar sesion</span>
				</Link>
			</div>
		</div>
	);
};
