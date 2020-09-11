import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { OrdersKitchen } from "../component/OrdersKitchen";
import { Link } from "react-router-dom";
import "../../styles/viewsKitchen.scss";
import "../../styles/global.scss";

export const ViewKitchen = () => {
	const { actions, store } = useContext(Context);
	console.log(store.tiempo);

	return (
		<div className="d-flex pt-4">
			<div className="col-3 btn-kitchen-box">
				<span className="text-muetd title">D-Kitchen</span>
				<Link to="/order">
					<button className="mt-5 btn-kitchen-command">Añadir pedido</button>
				</Link>
				<Link to="/repartidor">
					<button className="mt-5 btn-kitchen-command">Vista repartidor</button>
				</Link>
				<Link to="/">
					<button className="btn-kitchen-login">Cerrar sesion</button>
				</Link>
			</div>
			<div className="box-orders col-9">
				{store.orders.map((newOrders, index) => {
					return (
						<OrdersKitchen
							key={index}
							marca={newOrders.brand}
							codigo={newOrders.called_code}
							status={newOrders.status}
							time={newOrders.time}
						/>
					);
				})}
			</div>
		</div>
	);
};
