import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { OrdersKitchen } from "../component/OrdersKitchen";
import { Link } from "react-router-dom";
import "../../styles/viewsKitchen.scss";
import "../../styles/global.scss";

export const ViewKitchen = () => {
	const { store, actions } = useContext(Context);
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
			<div className="d-flex flex-wrap col-11 m-auto justify-content-center p-3 rounded bg-dark">
				{store.orders.map((calleds, index) => {
					return (
						<OrdersKitchen
							key={index}
							id={calleds.id}
							room={calleds.room}
							logo={calleds.logo_delivery}
							codigo={calleds.called_code}
							status={calleds.status.toUpperCase()}
							time={calleds.time}
							user={calleds.cooker_id}
							recordTime={calleds.started_at}
						/>
					);
				})}
			</div>
			<div className="d-flex justify-content-center">
				<Link to="/order">
					<button
						onClick={() => {
							actions.deleteEdit();
						}}
						className="btn-kitchen-command">
						Nuevo pedido
					</button>
				</Link>
			</div>
		</div>
	);
};
