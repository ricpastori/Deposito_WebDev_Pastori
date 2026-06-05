import citiesCoordinates from "../assets/italianCitiesCoordinates.json";
import CityCard from "../components/CityCard";
import "../assets/styles/cities-list.css";

export function CitiesList() {
	const cities = citiesCoordinates;

	return (
		<main className="container">
			<hgroup>
				<h1>Citta italiane</h1>
				<p>{cities.length} citta disponibili</p>
			</hgroup>

			<section className="cities-list" aria-label="Citta italiane">
				{cities.map((city) => (
					<CityCard key={city.id} {...city} />
				))}
			</section>
		</main>
	);
}

export default CitiesList;
