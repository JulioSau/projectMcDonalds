const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			timeWait: "",
			cooker: {},
			token: {},
			orderTime: 0,
			timeTotal: 0,
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
				getActions().getOrders();
			},
			setUser: response => {
				setStore({ cooker: response.cooker });
				setStore({ token: response.access_token });
			},
			getOrders: async () => {
				let store = getStore();
				let response = await fetch(
					`https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/calleds`,
					{
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`
						})
					}
				);
				response = await response.json();

				setStore({
					orders: response.sort(function(prev, next) {
						return next.started_at - prev.started_at;
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
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`
						}),
						body: JSON.stringify({
							called_code: code.toUpperCase(),
							time: time,
							logo_delivery: store.deliveryLogo,
							room: store.cooker.id,
							cooker_id: store.cooker.id
						})
					}
				);
				getActions().deleteEdit();
				getActions().getOrders();
			},
			orderToEdit: orderToEdit => {
				setStore({ orderToEdit: orderToEdit });
			},
			deleteEdit: () => {
				setStore({ orderToEdit: undefined });
			},
			editOrder: async (id, newStatus, newTime, code, logo) => {
				let store = getStore();
				let response = await fetch(
					"https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/calleds/" + id,
					{
						method: "PATCH",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`
						}),
						body: JSON.stringify({
							called_code: code,
							logo_delivery: logo,
							status: newStatus,
							time: newTime
						})
					}
				);

				getActions().getOrders();
			},

			deleteOrder: async id => {
				let store = getStore();
				let response = await fetch(
					"https://3000-efbdec6d-8ee4-447e-be53-0a3a41a39445.ws-eu01.gitpod.io/calleds/" + id,
					{
						method: "DELETE",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`
						})
					}
				);
				getActions().getOrders();
			},
			orderLogo: logo => {
				setStore({ deliveryLogo: logo });
			},
			orderTime: timeOrder => {
				let store = getStore();

				//let startTime = new Date();
				//let startHours = startTime.getHours();
				//let startMinutes = startTime.getMinutes();

				if (timeOrder == "0 ") {
					setStore({ timeTotal: 0 });
					setStore({ orderTime: 0 });
				} else {
					setStore({ timeTotal: parseInt(timeOrder) + store.timeTotal });

					let hora = Math.floor(store.timeTotal / 60);
					let minutes = store.timeTotal % 60;

					/* let waitHours = parseInt(startHours) + parseInt(hora);
					let waitMinutes = parseInt(startMinutes) + parseInt(minutes);
					if (waitMinutes > 59) {
						waitHours = waitHours + 1;
						waitMinutes = "00";
					}
					if (waitHours > 23) {
						waitHours = "00";
					} */

					hora = ("0" + hora).slice(-2);
					minutes = ("0" + minutes).slice(-2);

					setStore({ orderTime: hora + ":" + minutes });
					console.log("ordertime:" + store.orderTime);

					//setStore({ orderTime: waitHours + ":" + waitMinutes });
				}
			},
			setTimer: (id, newStatus, time) => {
				let startTime = new Date();
				let startHours = startTime.getHours();
				let startMinutes = startTime.getMinutes();

				let userHours = time.slice(0, 2);
				let userMinutes = time.slice(-2);

				let waitHours = parseInt(startHours) + parseInt(userHours);
				let waitMinutes = parseInt(startMinutes) + parseInt(userMinutes);

				if (newStatus == "listo" || newStatus == "cancelado") {
					waitMinutes = "00";
					waitHours = "00";
					startMinutes = "00";
					startHours = "00";
				}
				if (waitMinutes > 60) {
					waitHours = waitHours + 1;
					waitMinutes = 60 - waitMinutes;
				}
				if (waitHours > 23) {
					waitHours = "00";
				}

				setStore((getStore().timeWait = waitHours + ":" + ("0" + waitMinutes).slice(-2)));

				getActions().editOrder(id, newStatus, getStore().timeWait);

				/* 		console.log(id, newStatus, time);
				console.log(getStore().timeWait);
				console.log(startTime); */
			},
			/* setTimer: (id, newStatus) => {
				getActions().editOrder(id, newStatus);
			} */ logout: () => {
				setStore({ token: "" });
				setStore({ cooker: {} });
			}
		}
	};
};
export default getState;
