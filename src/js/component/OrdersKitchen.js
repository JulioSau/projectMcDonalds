import React from "react";
import "../../styles/Orderskitchen.scss";

export const OrdersKitchen = () => {
	return (
		<div className="container d-flex">
			<div className="order-box">
				<div>
					<img
						className="icono-logo"
						src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png"
					/>
				</div>
				<h4>AA-33DD</h4>
				<div>
					<strong>Procesando</strong>
				</div>
				<div>
					<h6>12:00 </h6>
				</div>
			</div>
			<div className="order-box">
				<div>Logo</div>
				<div>AA-33DD</div>
				<div>Procesando</div>
				<div>12:00 min</div>
			</div>
		</div>
	);
};
