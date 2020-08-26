import React, { Component } from "react";
import "../../styles/submit.scss";

export const Submit = () => {
	return (
		<div className="buttonsubmit mt-2">
			<button form="my-form" className="submit mt-5 rounded" type="submit">
				ACEPTAR
			</button>
		</div>
	);
};
