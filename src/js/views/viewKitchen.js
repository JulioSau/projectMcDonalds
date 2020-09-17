import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { OrdersKitchen } from "../component/OrdersKitchen";
import { Link } from "react-router-dom";
import "../../styles/viewsKitchen.scss";
import "../../styles/global.scss";

export const ViewKitchen = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="d-flex ">
			<div className="col-3 btn-kitchen-box">
				<div className="head-logo">
					<img
						className="logo-medium"
						src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
					/>
					<span className="text-muetd title">D-Kitchen</span>
				</div>
				<Link to="/order">
					<button className="mt-5 btn-kitchen-command">Añadir pedido</button>
				</Link>
				<Link to="/">
					<button className="btn-kitchen-login">Cerrar sesion</button>
				</Link>
			</div>
			<div className="box-orders pt-4 col-9">
				{store.orders.map((newOrders, index) => {
					return (
						<OrdersKitchen
							key={index}
							logo={newOrders.brand}
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
