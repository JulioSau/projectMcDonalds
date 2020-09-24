import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/global.scss";

export const ButtonTime = prop => {
	const { actions } = useContext(Context);
	return (
		<div className="btn btn-secondary mx-2 my-2">
			<button
				onClick={() => {
					actions.orderTime(prop.time);
				}}
				type="button"
				className="btn text-white ">
				{prop.time}
				<span>min</span>
			</button>
		</div>
	);
};

ButtonTime.proptypes = {
	time: PropTypes.string
};
