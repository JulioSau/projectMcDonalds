import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { ButtonTime } from "../component/buttontime";
import "../../styles/neworder.scss";
import "../../styles/global.scss";
import { Link } from "react-router-dom";

export const NewOrder = () => {
	const { actions, store } = useContext(Context);
	const [inputCode, setCodigo] = useState("");
	const [inputSala, setSala] = useState("");

	let toEdit = store.orderToEdit;

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
						onChange={e => setCodigo(e.target.value)}
						defaultValue={toEdit ? toEdit.codigo : ""}
						className="order-input  mb-3"
					/>
					<div className="d-flex justify-content-center mb-3">
						<span className=" title-sub pb-1 mr-4">Sala:</span>
						<input
							type="number"
							min={1}
							max={16}
							className="order-minutes text-center"
							onChange={e => setSala(e.target.value)}
						/>
					</div>
					<div className="d-flex justify-content-center mb-3">
						<span className=" title-sub pb-2 mr-4">Tiempo de preparación</span>
						<span className="order-minutes ">{store.orderTime}</span>
					</div>
					<div className="d-flex justify-content-center">
						<img
							onClick={() => {
								actions.orderLogo(store.orders_logo.ubereats);
							}}
							className="logo-medium"
							src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png"
						/>

						<img
							onClick={() => {
								actions.orderLogo(store.orders_logo.glovo);
							}}
							className="logo-medium"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU"
						/>

						<img
							onClick={() => {
								actions.orderLogo(store.orders_logo.justeat);
							}}
							className="logo-medium"
							src="https://static.comunicae.com/photos/notas/1205727/1561022224_JustEatLogo.png"
						/>

						<img
							onClick={() => {
								actions.orderLogo(store.orders_logo.d_kitchen);
							}}
							className="logo-medium"
							src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
						/>
					</div>
					<div className="d-flex justify-content-center">
						<ButtonTime time="60" />
						<ButtonTime time="30" />
						<ButtonTime time="10" />
						<ButtonTime time="Reset" />
					</div>
					<Link to="/kitchen">
						<button
							onClick={() => {
								toEdit
									? actions.editOrder(
											toEdit.id,
											toEdit.status,
											store.orderTime,
											inputSala,
											inputCode.toUpperCase()
									  )
									: actions.addOrder(inputCode.toUpperCase(), store.orderTime, inputSala);
							}}
							className=" bg-secondary orders-btn col-md-5 mt-5 rounded">
							ACEPTAR
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
