import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Component } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/Orderskitchen.scss";
import "../../styles/global.scss";

export const OrdersKitchen = props => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	let orderStatus = "order-status ";
	let statusDone = "text-success";
	let statusCancel = "text-danger";
	let statusPending = "text-warning";

	if (props.status == "Listo") {
		orderStatus = orderStatus.concat(statusDone);
	} else if (props.status == "Proceso") {
		orderStatus = orderStatus.concat(statusPending);
	} else if (props.status == "Cancelado") {
		orderStatus = orderStatus.concat(statusCancel);
	}

	return (
		<div>
			<div onClick={handleShow} className="order-box">
				<div className="order-status">
					<span className={orderStatus}>{props.status}</span>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<img className="order-brand" src={props.marca} />
					<span className="mr-3 title-sub">{props.codigo}</span>
				</div>
				<div />

				<div>
					<span className="order-time">{props.time}</span>
				</div>
			</div>

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>
						Pedido Nº:
						{props.codigo}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-flex">
						<div className="order-box">
							<span className={orderStatus}>{props.status}</span>
							<div className="d-flex justify-content-center align-items-center">
								<img className="order-brand" src={props.marca} />
								<h3 className="title-sub">{props.codigo}</h3>
							</div>
							<div />

							<div>
								<span className="order-time">{props.time}</span>
							</div>
						</div>
						<div className="m-auto">
							<span>
								<Link to="/order">
									<i className="fa fa-pencil btn-Modify-order" aria-hidden="true" />
								</Link>
								Editar pedido
							</span>

							<span>
								<i className="fa fa-check text-success btn-Modify-order" aria-hidden="true" />
								Pedido listo
							</span>
							<span>
								<i className="fa fa-times text-danger btn-Modify-order" aria-hidden="true" />
								Borrar pedido
							</span>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className="m-auto">
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
OrdersKitchen.propTypes = {
	codigo: PropTypes.string,
	status: PropTypes.string,
	time: PropTypes.string,
	marca: PropTypes.string
};
