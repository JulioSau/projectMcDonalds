import React from "react";
import PropTypes from "prop-types";
import "../../styles/Orderskitchen.scss";

export const OrdersKitchen = props => {
	return (
		<div className="order-box">
			<h3>{props.codigo}</h3>
			<div />
			<div>
				<div className="d-flex justify-content-center align-items-center">
					<img
						className="icono-marca"
						src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png"
					/>
					<span className="order-status">{props.status}</span>
				</div>

				<span className="order-time">{props.time}</span>
			</div>
		</div>
	);
};
OrdersKitchen.propTypes = {
	codigo: PropTypes.string,
	status: PropTypes.string,
	time: PropTypes.string
};
