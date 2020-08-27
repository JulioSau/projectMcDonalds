import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { OrdersKitchen } from "../component/OrdersKitchen";
import "../../styles/viewsKitchen.scss";

export const ViewKitchen = () => {
	const { actions, store } = useContext(Context);

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
				{store.infoTable.map((orders, index) => {
					return (
						<OrdersKitchen key={index} codigo={orders.codigo} status={orders.status} time={orders.tiempo} />
					);
				})}
			</div>
		</div>
	);
};
