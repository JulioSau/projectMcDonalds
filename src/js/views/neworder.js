import React from "react";
import { ButtonTime } from "../component/buttontime";
import { Submit } from "../component/submit";
import "../../styles/neworder.scss";
import { Link } from "react-router-dom";

export const NewOrder = () => (
	<div className="container-fluid d-flex justify-content-center">
		<div className="col-md-10 main-color text-center mt-5 rounded">
			<img
				className="logo-medium mt-4"
				src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
			/>
			<h3 className="first-typography third-color pb-2 pt-2">Código de pedido</h3>
			<form id="my-form">
				<input className="inputPedido col-md-4 second-typography py-4 mb-3" />
				<div className="d-flex align-items-center justify-content-center">
					<h3 className="first-typography third-color pb-2 pt-4 mr-4">Tiempo de preparación</h3>
					<span className="total-minutes second-typography rounded">--------</span>
				</div>
				<div className="d-flex justify-content-center">
					<ButtonTime time="5 min" />
					<ButtonTime time="10 min" />
					<ButtonTime time="20 min" />
					<ButtonTime time="30 min" />
				</div>
				<Link to="/kictchen">
					<div className="pb-4">
						<Submit />
					</div>
				</Link>
			</form>
		</div>
	</div>
);
