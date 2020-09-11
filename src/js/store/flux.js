const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			orders: [],
			timeTotal: 0,
			orders_logo: {
				glovo: "https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png",
				justeat:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
				ubereats: "https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png",
				d_kitchen: "https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
			}
		},
		actions: {
			getOrders: async () => {
				let store = getStore();
				let response = await fetch(
					`https://3000-e3316cea-7f74-4529-baca-7bcb32646bb8.ws-eu01.gitpod.io/calleds`
				);
				response = await response.json();
				console.log(response);
				setStore({ orders: response });
			},
			addCooker: (new_nickname, new_enterpraise, new_name, new_lastname, new_email, new_password) => {
				console.log("entro");
				fetch("https://3000-e3316cea-7f74-4529-baca-7bcb32646bb8.ws-eu01.gitpod.io/cooker", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						nickname: new_nickname,
						enterprise: new_enterpraise,
						name: new_name,
						last_name: new_lastname,
						email: new_email,
						password: new_password
					})
				})
					.then(function(response) {
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
					});
			},
			addOrder: (code, time) => {
				fetch("https://3000-e3316cea-7f74-4529-baca-7bcb32646bb8.ws-eu01.gitpod.io/called", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						called_code: code,
						time: time,
						brand: "dominos"
					})
				})
					.then(function(response) {
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
					});
			},
			orderTime: timeOrder => {
				let store = getStore();
				if (timeOrder == "Restar") {
					return setStore((store.timeTotal = 0));
				}
				setStore((store.timeTotal = store.timeTotal + parseInt(timeOrder)));
				setStore({ time: store.timeTotal });
			},
			orderLogo: logo => {
				console.log(logo);
			}
		}
	};
};
export default getState;
