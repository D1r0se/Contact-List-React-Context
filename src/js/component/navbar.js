import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-4 py-3 justify-content-md-end">
			<Link to="/">
				<button className="btn btn-outline-success me-4 ">Contactos</button>
			</Link>
		</nav>
	);
};

