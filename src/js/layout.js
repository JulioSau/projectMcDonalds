import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Login } from "./views/login";
import { TableInfo } from "./component/tableInfo";
import { ViewKitchen } from "./views/viewKitchen";
import { NewCooker } from "./views/newcooker";
import { NewOrder } from "./views/neworder";

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
						<Route exact path="/">
							<Login />
						</Route>
						<Route exact path="/cooker">
							<NewCooker />
						</Route>
						<Route exact path="/Info">
							<TableInfo />
						</Route>
						<Route exact path="/kictchen">
							<ViewKitchen />
						</Route>

						<Route exact path="/order">
							<NewOrder />
						</Route>
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
