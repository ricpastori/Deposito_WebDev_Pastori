import { NavLink, Route, Routes } from "react-router-dom";
import CitiesList from "./pages/CitiesList";
import CityWeather from "./pages/CityWeather";

function App() {
	return (
		<>
			<nav className="container">
				<ul>
					<li>
						<strong>Meteo citta</strong>
					</li>
				</ul>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<CitiesList />} />
				<Route path="/city/:id" element={<CityWeather />} />
			</Routes>
		</>
	);
}

export default App;
