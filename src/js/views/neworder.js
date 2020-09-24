import React, { useContext, useState, useEffect } from "react";
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
		<div className="">
			<div className="bg-white head-kitchen d-flex ">
				<img
					className="logo-medium ml-5"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<div className="m-auto">
					<span className="title ">Creacion de orden</span>
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
			<div className="containter">
				<div className="d-flex align-items-end">
					<div className="col-8 my-2">
						<form id="my-form">
							<div className="col-6 mx-auto text-center py-4">
								<span className="title-sub px-2 ">Código de orden:</span>
								<input
									onChange={e => setCodigo(e.target.value)}
									defaultValue={toEdit ? toEdit.codigo : ""}
									className="order-input form-control form-control-lg text-center"
									placeholder="Ingrese codigo"
								/>
							</div>
							<div className="mx-auto col-8 py-2">
								<div className="d-flex justify-content-center">
									<span className=" title-sub">Hora de entrega</span>
									<input value={store.orderTime} className="order-minutes text-center mx-2 col-2" />
								</div>
								<div className="d-flex justify-content-center">
									<ButtonTime time="60" />
									<ButtonTime time="30" />
									<ButtonTime time="10" />
									<ButtonTime time="0 " />
								</div>
							</div>
							<div className="d-flex text-center justify-content-center py-2">
								<div>
									<span className="title-sub">Empresa de reparto </span>
									<div className="d-flex">
										<button className="btn btn-white" type="button">
											<img
												onClick={() => {
													actions.orderLogo(store.orders_logo.ubereats);
												}}
												className="logo-medium"
												src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png"
											/>
										</button>
										<button className="btn btn-white" type="button">
											<img
												onClick={() => {
													actions.orderLogo(store.orders_logo.glovo);
												}}
												className="logo-medium"
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU"
											/>
										</button>
										<button className="btn btn-white" type="button">
											<img
												onClick={() => {
													actions.orderLogo(store.orders_logo.justeat);
												}}
												className="logo-medium"
												src="https://static.comunicae.com/photos/notas/1205727/1561022224_JustEatLogo.png"
											/>
										</button>
										<button className="btn btn-white" type="button">
											<img
												onClick={() => {
													actions.orderLogo(store.orders_logo.d_kitchen);
												}}
												className="logo-medium"
												src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
											/>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className=" col-4">
						<div className=" mb-4 ">
							<div className="d-flex align-items-center ">
								<h2>Nombre:</h2>
								<p className="title-sub font-weight-bolder mx-2">{store.cooker.name}</p>
								<p className="title-sub font-weight-bolder ">{store.cooker.last_name}</p>
							</div>
							<div className="d-flex align-items-center">
								<h2>Empresa:</h2>
								<p className="title-sub font-weight-bolder mx-2 ">{store.cooker.company}</p>
							</div>
							<div className="d-flex align-items-center">
								<h2>Sala:</h2>
								<p className="title-sub font-weight-bolder mx-2 ">{store.cooker.id}</p>
							</div>
						</div>
						<Link to="/kitchen">
							<button
								onClick={() => {
									toEdit
										? actions.editOrder(
												toEdit.id,
												toEdit.status,
												store.orderTime,
												inputCode.toUpperCase(),
												store.deliveryLogo
										  )
										: actions.addOrder(inputCode.toUpperCase(), store.orderTime);
								}}
								className=" p-4 col-7  btn bg-success text-white  rounded">
								Aceptar
							</button>
						</Link>
						<button
							className="p-3 my-3 btn col-7 btn bg-danger
                     text-white rounded">
							Cancelar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
