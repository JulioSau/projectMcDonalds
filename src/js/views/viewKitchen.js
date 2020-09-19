import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { OrdersKitchen } from "../component/OrdersKitchen";
import { Link } from "react-router-dom";
import "../../styles/viewsKitchen.scss";
import "../../styles/global.scss";

export const ViewKitchen = () => {
	const { actions, store } = useContext(Context);
	return (
		<div>
			<div className="d-flex head-kitchen">
				<img
					className="logo-medium"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<div className="m-auto">
					<span className="title ">Pedidos</span>
				</div>
				<Link to="/">
					<span className="go-to-login">
						<i className="fa fa-sign-out" aria-hidden="true" />
					</span>
				</Link>
			</div>
			<div className="box-orders col-11 m-auto">
				{store.orders.map((newOrders, index) => {
					return (
						<OrdersKitchen
							key={index}
							id={newOrders.id}
							room={newOrders.room}
							logo={newOrders.logo_delivery}
							codigo={newOrders.called_code}
							status={newOrders.status.toUpperCase()}
							time={newOrders.time}
							user={newOrders.cooker_id}
						/>
					);
				})}
			</div>
			<div className="d-flex justify-content-center">
				<Link to="/order">
					<button className="btn-kitchen-command">Nuevo pedido</button>
				</Link>
			</div>
		</div>
	);
};
