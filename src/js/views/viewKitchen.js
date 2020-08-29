import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { OrdersKitchen } from "../component/OrdersKitchen";
import { Link } from "react-router-dom";
import "../../styles/viewsKitchen.scss";

export const ViewKitchen = () => {
	const { actions, store } = useContext(Context);

	return (
		<div>
			<div className="navbar">
				<span className="text-muetd logo-name">D-Kitchen</span>
				<div className="ml-auto box-btn-kitchen">
					<Link to="/order">
						<button className="btn-kitchen">Añadir pedido</button>
					</Link>
					<Link to="/">
						<button className="btn-kitchen">Cerrar sesion</button>{" "}
					</Link>
				</div>
			</div>
			<div className="box-orders">
				{store.infoTable.map((orders, index) => {
					return (
						<OrdersKitchen
							key={index}
							marca={orders.logo}
							codigo={orders.codigo}
							status={orders.status}
							time={orders.tiempo}
						/>
					);
				})}
			</div>
			<div className="footer-kitchen d-flex justify-content-center">
				<img
					className="icono-logo"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
			</div>
		</div>
	);
};
