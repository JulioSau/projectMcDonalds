import React from "react";

import { OrdersKitchen } from "../component/OrdersKitchen";
import "../../styles/viewsKitchen.scss";

export const ViewKitchen = () => {
	return (
		<div className="view-kitchen">
			<nav className="navbar">
				<img
					className="icono-logo"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<div className="ml-auto box-btn-kitchen">
					<button className="btn-kitchen">Añadir pedido</button>
					<button className="btn-kitchen">Cerrar sesion</button>
				</div>
			</nav>
			<div className="box-orders">
				<OrdersKitchen />
				<OrdersKitchen />
				<OrdersKitchen />
				<OrdersKitchen />
				<OrdersKitchen />
				<OrdersKitchen />
				<OrdersKitchen />
				<OrdersKitchen />
				<OrdersKitchen />
				<OrdersKitchen />
			</div>
		</div>
	);
};
