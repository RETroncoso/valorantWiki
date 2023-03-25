import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Agents from "../pages/Agents/Agents";
import Maps from "../pages/Maps/Maps";
import Weapons from "../pages/Weapons/Weapons";

function Routes() {
	return (
		<ReactDomRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/agentes" element={<Agents />} />
			<Route path="/mapas" element={<Maps />} />
			<Route path="/armas" element={<Weapons />} />
		</ReactDomRoutes>
	);
}

export default Routes;
