import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
<<<<<<< HEAD
/* import { Raiders } from "./views/viewRaiders"; */
/* import { Login } from "./views/login"; */
=======
/* import { Raiders } from "./views/viewRaiders";
import { Login } from "./views/login"; */
import { TableInfo } from "./component/tableInfo";
import { ViewKitchen } from "./views/viewKitchen";
>>>>>>> feature/richard/view-cocinero
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
<<<<<<< HEAD
						{/* <Route exact path="/">
							<Raiders />
						</Route> */}
						{/* <Route exact path="/login">
							<Login />
						</Route> */}
						<Route exact path="/single/:theid" />
=======
						{/*                     <Route exact path="/">
							<Raiders />
						</Route> */}
						<Route exact path="/tableInfo">
							<TableInfo />
						</Route>
						<Route exact path="/">
							<ViewKitchen />
						</Route>
>>>>>>> feature/richard/view-cocinero
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
