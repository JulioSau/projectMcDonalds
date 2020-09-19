const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cooker: {},
			token: {},
			orderTime: 0,
			timeTotal: 0,
			orderChronometer: 0,
			orders: [],
			deliveryLogo: "",
			orders_logo: {
				glovo:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
				justeat: "https://static.comunicae.com/photos/notas/1205727/1561022224_JustEatLogo.png",
				ubereats: "https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png",
				d_kitchen: "https://dkitchenincubator.com/wp-content/uploads/2020/01/cocinero-1.png"
			}
		},
		actions: {
			login: async (new_email, new_password) => {
				let response = await fetch(
					"https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json"
						}),
						body: JSON.stringify({
							nickname: new_email,
							password: new_password
						})
					}
				);
				response = await response.json();
				getActions().setUser(response);
			},
			setUser: response => {
				setStore({ cooker: response.cooker });
				setStore({ token: response.access_token });
			},
			getOrders: async () => {
				let store = getStore();
				let response = await fetch(
					`https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/calleds`
				);
				response = await response.json();
				setStore({
					orders: response.sort(function(prev, next) {
						return prev.time - next.time;
					})
				});
			},
			addAdmin: (new_nickname, new_enterpraise, new_name, new_lastname, new_email, new_password) => {
				fetch("https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/admin", {
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
			addCooker: (new_nickname, newCompany, new_name, new_lastname, new_email, new_password) => {
				fetch("https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/cooker", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						nickname: new_nickname,
						company: newCompany,
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
			addOrder: async (code, time, workSpace) => {
				let store = getStore();

				let response = await fetch(
					"https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/called",
					{
						method: "POST",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json"
						}),
						body: JSON.stringify({
							called_code: code.toUpperCase(),
							time: time.toString(),
							logo_delivery: store.deliveryLogo,
							room: workSpace,
							cooker_id: store.cooker.id
						})
					}
				);
				getActions().getOrders();
			},
			editOrder: async (id, newStatus) => {
				let store = getStore();
				let response = await fetch(
					"https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/calleds/" + id,
					{
						method: "PATCH",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json"
						}),
						body: JSON.stringify({
							status: newStatus
						})
					}
				);

				getActions().getOrders();
			},
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
			deleteOrder: async id => {
				let response = await fetch(
					"https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/calleds/" + id,
					{
						method: "DELETE",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json"
						})
					}
				);
				getActions().getOrders();
			},
			orderLogo: logo => {
				setStore({ deliveryLogo: logo });
			},
			Chronometer: timeCooking => {
				let store = getStore();
				let fechaHora = new Date();
				let horas = fechaHora.getHours();
				let minutos = fechaHora.getMinutes();
				let segundos = fechaHora.getSeconds();
				/* 
				if (horas < 10) {
					horas = "0" + horas;
				}
				if (minutos < 10) {
					minutos = "0" + minutos;
				}
				if (segundos < 10) {
					segundos = "0" + segundos;
				} */

				setStore({ orderChronometer: horas + ":" + minutos + ":" + segundos });
				setInterval(Chronometer, 1000);
				return store.orderChronometer;
			}
		}
	};
};
export default getState;
