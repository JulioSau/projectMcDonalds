import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.scss";

export const EntryView = () => {
	return (
		<div className="entryboxes">
			<div className="logo-box">
				<img
					className="logo-medium"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
				/>
				<span className="title">D-Kitchen</span>
			</div>
			<div className="containerbox d-flex justify-content-center inline-block mb-5">
				<Link to="/logincooker">
					<div className="BoxCooker d-flex justify-content-center align-items-center bg-info text-white mr-3 rounded">
						<h2 className="nameEntry">Cooker</h2>
					</div>
				</Link>
				<Link to="/loginadmin">
					<div className="BoxAdmin d-flex justify-content-center align-items-center bg-info text-white rounded">
						<h2 className="nameEntry">Admin</h2>
					</div>
				</Link>
			</div>
		</div>
	);
};
