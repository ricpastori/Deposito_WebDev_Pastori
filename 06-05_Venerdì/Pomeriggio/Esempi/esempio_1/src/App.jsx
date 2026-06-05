import { NavLink, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NameDetails from "./pages/NameDetails";

import "./App.css";

function App() {
	const highlightActive = ({ isActive }) => ({
		color: isActive ? "gold" : "black",
		fontWeight: isActive ? "bold" : "normal",
	});

	return (
		<>
			<nav>
				<NavLink to="/" style={highlightActive}>
					Home
				</NavLink>
				<NavLink to="/about" style={highlightActive}>
					About
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />}>
					<Route path=":name" element={<NameDetails />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
