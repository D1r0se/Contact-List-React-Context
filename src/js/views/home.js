import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";
import { Link, useFetcher } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(()=>  {
		actions.getUserAgenda()
	},[])
		console.log(store.contacts)
	return (
		<div className="text-center mt-5 mx-5">
			<Link
				onClick={() => actions.selectContact(null)}
				to={'/contacto/new'}
				className="button-create my-4"
			>
				Crear contacto
			</Link>
			{
				store.contacts?.contacts?.map(el =>
					<ContactCard key={el.id} contact={el} />
				)
			}

		</div>
	);
}