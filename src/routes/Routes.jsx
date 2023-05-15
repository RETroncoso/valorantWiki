import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Agents from "../pages/Agents/Agents";
import Maps from "../pages/Maps/Maps";
import Weapons from "../pages/Weapons/Weapons";
import Agent from "../pages/Agent/Agent";
import Error404 from "../pages/Error404/Error404";
import Map from "../pages/Map/Map";
import Weapon from "../pages/Weapon/Weapon";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Routes() {
	return (
		<ReactDomRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/agentes">
				<Route index element={<Agents/>} />
				<Route path=":agent" element={<Agent />} />
			</Route>
			<Route path="/mapas" >
				<Route index element={<Maps/>} />
				<Route path=":map" element={<Map/>} />
			</Route>
			<Route path="/armas">
				<Route index element={<Weapons />} />
				<Route path=":weapon" element={<Weapon />} />
			</Route>
			
			<Route path="*" element={<Error404 />} />
		</ReactDomRoutes>
	);
}

export default Routes;