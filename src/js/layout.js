import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { LoginAdmin } from "./views/loginadmin";
import { LoginCooker } from "./views/logincooker";
import { TableInfo } from "./component/tableInfo";
import { ViewKitchen } from "./views/viewKitchen";
import { AdminView } from "./views/adminview";
import { EntryView } from "./views/entryView";
import { NewPassword } from "./views/newpassword";
import { NewCooker } from "./views/newcooker";
import { NewAdmin } from "./views/newadmin";
import { NewOrder } from "./views/neworder";
import { Footer } from "./component/footer";
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
						<Route exact path="/">
							<EntryView />
						</Route>
						<Route exact path="/loginadmin">
							<LoginAdmin />
						</Route>
						<Route exact path="/logincooker">
							<LoginCooker />
						</Route>
						<Route exact path="/adminview">
							<AdminView />
						</Route>
						<Route exact path="/newpassword">
							<NewPassword />
						</Route>
						<Route exact path="/cooker">
							<NewCooker />
						</Route>
						<Route exact path="/newadmin">
							<NewAdmin />
						</Route>
						<Route exact path="/Info">
							<TableInfo />
						</Route>
						<Route exact path="/kitchen">
							<ViewKitchen />
						</Route>
						<Route exact path="/repartidor">
							<TableInfo />
						</Route>
						<Route exact path="/order">
							<NewOrder />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);
