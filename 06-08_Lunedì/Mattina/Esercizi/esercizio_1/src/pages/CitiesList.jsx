import CityCard from "../components/CityCard";
import { useCityStore } from "../store/useCityStore";
import "../assets/styles/cities-list.css";

export function CitiesList() {
	const cities = useCityStore((state) => state.cities);

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
