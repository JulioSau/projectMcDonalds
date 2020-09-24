import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { OrdersKitchen } from "../component/OrdersKitchen";
import { Link } from "react-router-dom";
import "../../styles/viewsKitchen.scss";
import "../../styles/global.scss";

export const ViewKitchen = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="bg-secondary box-padding">
			<div className="fixed-top">
				<div className="bg-white head-kitchen d-flex ">
					<img
						className="logo-medium ml-5"
						src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
					/>
					<div className="m-auto">
						<span className="title ">Pedidos</span>
					</div>
					<Link to="/">
						<span className="go-to-login mr-5">
							<i
								onClick={() => {
									actions.logout();
								}}
								className="fa fa-sign-out"
								aria-hidden="true"
							/>
						</span>
					</Link>
				</div>
				<div className="col-6 mx-auto mt-2">
					<Link to="/order">
						<button
							type="button"
							onClick={() => {
								actions.deleteEdit();
							}}
							className="btn btn-lg text-white btn-block p-4 bg-dark">
							Nuevo pedido
						</button>
					</Link>
				</div>
			</div>
			<div className="d-flex flex-wrap col-11 m-auto justify-content-center p-3 ">
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
		</div>
	);
};
