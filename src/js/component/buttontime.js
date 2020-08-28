import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/buttontime.scss";

export const ButtonTime = prop => {
	return (
		<div className="button mt-2">
			<button type="button" className="button-time rounded mx-4">
				{prop.time}
			</button>
		</div>
	);
};

ButtonTime.proptypes = {
	time: PropTypes.date
};
