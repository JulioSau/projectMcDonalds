import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/buttontime.scss";

export const ButtonTime = prop => {
	const { actions, store } = useContext(Context);
	return (
		<div
			onClick={e => {
				actions.getTime(prop.time);
			}}
			className="button mt-2">
			<button type="button" className="button-time rounded mx-4">
				{prop.time}
			</button>
		</div>
	);
};

ButtonTime.proptypes = {
	time: PropTypes.number
};
