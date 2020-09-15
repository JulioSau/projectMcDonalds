const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			orderTime: 0,
			timeTotal: 0,
			orders: [],
			delivery_logo: "",
			orders_logo: {
				glovo:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
				justeat: "https://static.comunicae.com/photos/notas/1205727/1561022224_JustEatLogo.png",
				ubereats: "https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png",
				d_kitchen: "https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
			}
		},
		actions: {
			getOrders: async () => {
				let store = getStore();
				let response = await fetch(
					`https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/calleds`
				);
				response = await response.json();
				setStore({ orders: response });
			},
			addAdmin: (new_nickname, new_enterpraise, new_name, new_lastname, new_email, new_password) => {
				fetch("https://3000-e3316cea-7f74-4529-baca-7bcb32646bb8.ws-eu01.gitpod.io/admin", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
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
			addCooker: (new_nickname, new_enterpraise, new_name, new_lastname, new_email, new_password) => {
				fetch("https://3000-e3316cea-7f74-4529-baca-7bcb32646bb8.ws-eu01.gitpod.io/cooker", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
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
				let store = getStore();
				console.log(time);
				fetch("https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/called", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						called_code: code.toUpperCase(),
						time: time.toString(),
						brand: store.delivery_logo
					})
				})
					.then(function(response) {
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
					});
			},
			/* 			editOrder: () => {
				let store = getStore();
				fetch("https://3000-e3316cea-7f74-4529-baca-7bcb32646bb8.ws-eu01.gitpod.io/called", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						called_code: code.toUpperCase(),
						time: time,
						brand: store.delivery_logo
					})
				})
					.then(function(response) {
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
					});
			}, */
			orderTime: timeOrder => {
				let store = getStore();
				if (timeOrder == "Reset") {
					setStore({ timeTotal: 0 });
					setStore({ orderTime: 0 });
				} else {
					setStore({ timeTotal: parseInt(timeOrder) + store.timeTotal });

					let hora = Math.floor(store.timeTotal / 60);
					let minutes = store.timeTotal % 60;
					hora = ("0" + hora).slice(-2);
					minutes = ("0" + minutes).slice(-2);

					setStore({ orderTime: hora + minutes });
				}
			},

			orderLogo: logo => {
				setStore({ delivery_logo: logo });
				console.log(logo);
			}
		}
	};
};
export default getState;
