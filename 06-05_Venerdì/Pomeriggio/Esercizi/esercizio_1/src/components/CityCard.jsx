import { NavLink } from "react-router-dom";

export function CityCard({ id, city, latitude, longitude }) {
	return (
		<article className="city-card">
			<header>
				<h3>{city}</h3>
			</header>

			<dl>
				<div>
					<dt>Latitudine</dt>
					<dd>
						<kbd>{latitude}</kbd>
					</dd>
				</div>
				<div>
					<dt>Longitudine</dt>
					<dd>
						<kbd>{longitude}</kbd>
					</dd>
				</div>
			</dl>

			<footer>
				<NavLink
					className="outline secondary"
					data-tooltip={`Controlla il meteo a ${city}`}
					role="button"
					to={`/city/${id}`}
				>
					Controlla meteo
				</NavLink>
			</footer>
		</article>
	);
}

export default CityCard;
