import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Counter=(props)=>{

    const [counter, setCounter]=useState("")

    return(				<div>
					<span className="order-time">{props.time}</span>
				</div>)
}
Counter.propTypes = {
time: PropTypes.string}