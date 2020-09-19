import React from "react";
import "../../styles/footer.scss";
import "../../styles/global.scss";
import { Link } from "react-router-dom";
export const Footer = () => (
	<div className="footer d-flex justify-content-center">
		<Link to="/repartidor">
			<img
				className="logo-medium"
				src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
			/>
		</Link>
	</div>
);
