import { Outlet } from "react-router-dom";
import { Hello } from "../components/Hello";
import { HelloAbout } from "../components/HelloAbout";
import NameDetails from "./NameDetails";

export function About() {
	return (
		<>
			<Hello></Hello>
			<Outlet>
				<NameDetails />
			</Outlet>
			<HelloAbout></HelloAbout>
		</>
	);
}

export default About;
