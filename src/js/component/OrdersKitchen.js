import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Component } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/Orderskitchen.scss";
import "../../styles/global.scss";

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

	if (props.status == "LISTO") {
		orderStatus = orderStatus.concat(statusDone);
	} else if (props.status == "ESPERA") {
		orderStatus = orderStatus.concat(statusPending);
	} else if (props.status == "CANCELADO") {
		orderStatus = orderStatus.concat(statusCancel);
	} else if (props.status == "PROCESO") {
		orderStatus = orderStatus.concat(statusCooking);
	} else if (props.status == "ENTREGADO") {
		orderStatus = orderStatus.concat(statusDelivered);
	}

	return (
		<div>
			<button onClick={handleShow} className="order-box">
				<div className={orderStatus}>
					<span className="text-white">
						{props.status} Cocinero : {props.user}
					</span>
				</div>

				<div className="d-flex justify-content-center align-items-center">
					<img className="order-brand" src={props.logo} />
					<span className="mr-3 title-sub">{props.codigo}</span>
				</div>

				<div>
					<span className="order-time">{props.time}</span>
				</div>
			</button>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header className={"title-sub ".concat(orderStatus)} closeButton>
					<Modal.Title>
						<div className=" d-flex ">
							<div className="col-9 text-dark">
								Pedido Nº:
								{props.codigo}
							</div>
							<div className="col-5 text-right text-white">{props.status}</div>
						</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div className="">
							<div className="d-flex justify-content-center align-items-center mb-3">
								<h2 className="mr-4">
									Tiempo:
									<span>{props.time}</span>
								</h2>
								<button className="orders-btn-modal  text-dark">Editar</button>
							</div>
							<h2>Cambiar Status:</h2>
							<div className="d-flex justify-content-between">
								<button
									className="orders-btn-modal bg-success"
									onClick={() => {
										actions.editOrder(props.id, "listo");
										setShow(false);
									}}>
									Listo
								</button>
								<button
									className="orders-btn-modal bg-info"
									onClick={() => {
										actions.editOrder(props.id, "proceso");
										setShow(false);
									}}>
									Proceso
								</button>
								<button
									className="orders-btn-modal bg-danger"
									onClick={() => {
										actions.editOrder(props.id, "cancelado");
										setShow(false);
									}}>
									Cancelado
								</button>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className="m-auto">
						<button
							className="orders-btn-modal-delivered bg-dark"
							onClick={() => {
								actions.deleteOrder(props.id);
								actions.editOrder(props.id, "entregado");
								setShow(false);
							}}>
							Entregado
						</button>
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
