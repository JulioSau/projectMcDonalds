import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/submit.scss";
import { Link } from "react-router-dom";

export const Submit = () => {
	const { actions, store } = useContext(Context);
	return (
		<Link to="/kictchen">
			<button
				onClick={e => {
					e.preventDefault();
					actions.addOrder(inputCode, inputTime);
				}}
				form="my-form"
				className=" bg-secondary submit col-md-5 mt-5 rounded">
				ACEPTAR
			</button>
		</Link>
	);
};
