import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ButtonTime } from "../component/buttontime";
import { Submit } from "../component/submit";
import "../../styles/neworder.scss";
import "../../styles/global.scss";
import { Link } from "react-router-dom";

export const NewOrder = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="m-auto col-10">
			<div className="order-form text-center  rounded ">
				<img
					className="logo-medium header-order-form"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<span className="header-order-form title-sub pb-2 pt-2">Código de pedido</span>

				<form id="my-form">
					<input
						onChange={e => {
							actions.getCodigo(e);
						}}
						className="order-input  mb-3"
					/>

					<div className="d-flex justify-content-center mb-3">
						<span className=" title-sub pb-2 mr-4">Tiempo de preparación</span>
						<span className="order-minutes ">{store.tiempo}</span>
					</div>
					<div className="d-flex justify-content-center">
						<ButtonTime time="5" />
						<ButtonTime time="10 " />
						<ButtonTime time="20" />
						<ButtonTime time="30 " />
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
};
