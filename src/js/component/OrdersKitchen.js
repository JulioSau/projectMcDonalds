import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useState } from "react";
import { Modal } from "react-bootstrap";

import PropTypes from "prop-types";

import "../../styles/Orderskitchen.scss";
import "../../styles/global.scss";
import { Link } from "react-router-dom";

export const OrdersKitchen = props => {
	const { actions, store } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	let orderStatus = "order-status ";
	let statusDone = "bg-success";
	let statusCancel = "bg-danger";
	let statusPending = "bg-warning";
	let statusCooking = "bg-info";
	let statusDelivered = "bg-dark";

	let timerOrder = " text-white ";
	let timerOrderPending = " d-none ";
	let timerOrderReady = " d-none ";

	if (props.status == "LISTO") {
		timerOrderPending = " d-none ";
		timerOrder = " text-white ";
		orderStatus = orderStatus.concat(statusDone);
	} else if (props.status == "ESPERA") {
		timerOrder = "";
		timerOrderPending = "";
		timerOrderReady = " d-none ";
		orderStatus = orderStatus.concat(statusPending);
	} else if (props.status == "CANCELADO") {
		orderStatus = orderStatus.concat(statusCancel);
	} else if (props.status == "PROCESO") {
		timerOrder = "";
		timerOrderPending = " d-none ";
		timerOrderReady = "";
		orderStatus = orderStatus.concat(statusCooking);
	} else if (props.status == "ENTREGADO") {
		orderStatus = orderStatus.concat(statusDelivered);
	}

	/* 	const [result, setResult] = useState({
		minutes: parseInt(props.time.slice(0, 2)) * 60 + parseInt(props.time.slice(-2)),
		seconds: 0
	});
	const [countDown, setCountDown] = useState(false);
	useEffect(
		() => {
			if (countDown == true) {
				const interval = setInterval(() => {
					if (result.seconds > 0) {
						console.log(result);
						setResult(result => {
							return { ...result, seconds: result.seconds - 1 };
						});
					} else if (result.seconds == 0 && result.minutes > 0) {
						console.log("else:", result);
						setResult(result => {
							return { ...result, seconds: 59, minutes: result.minutes - 1 };
						});
					} else if (result.seconds == 0 && result.minutes == 0) {
						setCountDown(false);
					}
				}, 1000);
				return () => clearInterval(interval);
			}
		},
		[countDown]
	);
 */
	return (
		<div>
			<button onClick={handleShow} className="order-box">
				<div className={orderStatus.concat(" rounded p-1")}>
					<span className="text-white">{props.status}</span>
				</div>

				<div className="d-flex justify-content-center align-items-center">
					<img className="order-brand" src={props.logo} />
					<span className="mr-3 font-weight-bold title-sub">{props.codigo}</span>
				</div>
				<div className={timerOrder}>
					<span className={timerOrderReady.concat(" font-weight-bold ")}>Hora de entrega:</span>
					<span className={timerOrderPending.concat(" font-weight-bold ")}>T. preparacion:</span>
					<span className="title-sub">
						{/* props.status == "PROCESO" ? result.minutes + ":" + result.seconds :  */ props.time}
					</span>
				</div>
			</button>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header className={orderStatus.concat(" title-sub order-status-modal ")} closeButton>
					<Modal.Title>
						<div className=" d-flex ">
							<div className="font-weight-bolder text-dark">
								Pedido Nº:
								{props.codigo}
							</div>
							<div className="ml-3 text-right text-white">{props.status}</div>
						</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="mx-auto text-center">
						<h2>Cambiar Status:</h2>
						<div className="m-auto">
							<button
								className="btn btn-dark btn-lg btn-block mb-4 p-3"
								onClick={() => {
									actions.deleteOrder(props.id);
									actions.editOrder(props.id, "entregado");
									setShow(false);
								}}>
								Entregado
							</button>
						</div>
						<button
							className="btn-block btn btn-success btn-lg  mb-4 p-3"
							onClick={() => {
								actions.setTimer(props.id, "listo", props.time);
								setShow(false);
							}}>
							Listo
						</button>
						<button
							className="btn-block btn btn-info btn-lg mb-4 p-3"
							onClick={() => {
								//let nuevoH = result.minutes + ":" + result.seconds;

								actions.setTimer(props.id, "proceso", props.time);

								//setCountDown(true);
								setShow(false);
							}}>
							Proceso
						</button>
						<button
							className="btn-block btn btn-danger btn-lg mb-4 p-3"
							onClick={() => {
								actions.setTimer(props.id, "cancelado", props.time);
								setShow(false);
							}}>
							Cancelado
						</button>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className="mx-auto">
						<Link to={"/order"}>
							<button
								onClick={() => {
									actions.orderToEdit(props);
								}}
								className="btn btn-secondary btn-lg btn-block mb-4 p-3">
								Editar orden
							</button>
						</Link>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
OrdersKitchen.propTypes = {
	id: PropTypes.number,
	logo: PropTypes.string,
	status: PropTypes.string,
	time: PropTypes.date,
	codigo: PropTypes.string,
	user: PropTypes.number
};
