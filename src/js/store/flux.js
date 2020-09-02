const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			infoTable: [
				{
					logo: "https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png",
					codigo: "AA-45BC",
					marca: "Goiko",
					sala: "4",
					tiempo: "00:00",
					status: "Cancelado"
				},
				{
					logo:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
					codigo: "AA-45BC",
					marca: "Mc Donlds",
					sala: "1",
					tiempo: "00:00",
					status: "Listo"
				},
				{
					logo:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
					codigo: "BB-33BC",
					marca: "Goiko",
					sala: "6",
					tiempo: "01:00",
					status: "Proceso"
				},
				{
					logo: "https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png",
					codigo: "AA-45BC",
					marca: "Goiko",
					sala: "4",
					tiempo: "00:00",
					status: "Cancelado"
				},
				{
					logo:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
					codigo: "AA-45BC",
					marca: "Mc Donlds",
					sala: "1",
					tiempo: "00:00",
					status: "Listo"
				},
				{
					logo:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
					codigo: "BB-33BC",
					marca: "Goiko",
					sala: "6",
					tiempo: "01:00",
					status: "Proceso"
				},
				{
					logo: "https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png",
					codigo: "AA-45BC",
					marca: "Goiko",
					sala: "4",
					tiempo: "00:00",
					status: "Cancelado"
				},
				{
					logo:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
					codigo: "AA-45BC",
					marca: "Mc Donlds",
					sala: "1",
					tiempo: "00:00",
					status: "Listo"
				},
				{
					logo:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJo9jl-3vjc3tzlnDeraFfPKxmbo-G6kk7Bg&usqp=CAU",
					codigo: "BB-33BC",
					marca: "Goiko",
					sala: "6",
					tiempo: "01:00",
					status: "Proceso"
				}
			]
		},
		actions: {
			getTime: orderTiempo => {
				setStore({ tiempo: orderTiempo });
			},
			getCodigo: e => {
				setStore({ codigo: e.target.value });
			}
		}
	};
};
export default getState;
