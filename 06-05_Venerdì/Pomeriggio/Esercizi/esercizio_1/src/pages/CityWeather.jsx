import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import citiesCoordinates from "../assets/italianCitiesCoordinates.json";

const dailyParams =
	"temperature_2m_max,temperature_2m_min,weather_code,rain_sum,showers_sum,snowfall_sum,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,apparent_temperature_max,apparent_temperature_min,sunset,sunrise";

export function CityWeather() {
	const { id } = useParams();
	const navigate = useNavigate();
	const city = citiesCoordinates.find((item) => item.id === Number(id));
	const [cityWeatherData, setCityWeatherData] = useState(null);
	const [loading, setLoading] = useState(Boolean(city));
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=${dailyParams}&forecast_days=1&timezone=auto`;

		axios
			.get(url)
			.then((response) => {
				setCityWeatherData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, [city]);

	if (!city) {
		return (
			<main className="container">
				<article>
					<h1>Città non trovata</h1>
					<button
						type="button"
						className="secondary outline"
						onClick={() => navigate("/")}
					>
						Torna alla home
					</button>
				</article>
			</main>
		);
	}

	if (loading) {
		return (
			<main className="container">
				<article aria-busy="true">Caricamento meteo in corso...</article>
			</main>
		);
	}

	if (error) {
		return (
			<main className="container">
				<article>
					<h1>Errore</h1>
					<p>{error}</p>
					<button
						type="button"
						className="secondary outline"
						onClick={() => navigate(-1)}
					>
						Torna indietro
					</button>
				</article>
			</main>
		);
	}

	const daily = cityWeatherData.daily;
	const units = cityWeatherData.daily_units;
	const weatherCode = daily.weather_code[0];
	const day = new Date(daily.time[0]).toLocaleDateString("it-IT", {
		dateStyle: "full",
	});
	const temperatureMax = `${daily.temperature_2m_max[0]} ${units.temperature_2m_max}`;
	const temperatureMin = `${daily.temperature_2m_min[0]} ${units.temperature_2m_min}`;
	const apparentTemperatureMax = `${daily.apparent_temperature_max[0]} ${units.apparent_temperature_max}`;
	const apparentTemperatureMin = `${daily.apparent_temperature_min[0]} ${units.apparent_temperature_min}`;
	const precipitation = `${daily.precipitation_sum[0]} ${units.precipitation_sum}`;
	const precipitationProbability = `${daily.precipitation_probability_max[0]} ${units.precipitation_probability_max}`;
	const rain = `${daily.rain_sum[0]} ${units.rain_sum}`;
	const showers = `${daily.showers_sum[0]} ${units.showers_sum}`;
	const snowfall = `${daily.snowfall_sum[0]} ${units.snowfall_sum}`;
	const windSpeed = `${daily.wind_speed_10m_max[0]} ${units.wind_speed_10m_max}`;
	const sunrise = new Date(daily.sunrise[0]).toLocaleTimeString("it-IT", {
		hour: "2-digit",
		minute: "2-digit",
	});
	const sunset = new Date(daily.sunset[0]).toLocaleTimeString("it-IT", {
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<main className="container">
			<button
				className="secondary outline"
				type="button"
				onClick={() => navigate(-1)}
			>
				Torna indietro
			</button>

			<article>
				<header>
					<hgroup>
						<h1>Meteo a {city.city}</h1>
						<p>{day}</p>
					</hgroup>
				</header>

				<table>
					<thead>
						<tr>
							<th>Metrica</th>
							<th>Valore</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Condizioni</td>
							<td>Codice meteo {weatherCode}</td>
						</tr>
						<tr>
							<td>Temperatura massima</td>
							<td>{temperatureMax}</td>
						</tr>
						<tr>
							<td>Temperatura minima</td>
							<td>{temperatureMin}</td>
						</tr>
						<tr>
							<td>Percepita massima</td>
							<td>{apparentTemperatureMax}</td>
						</tr>
						<tr>
							<td>Percepita minima</td>
							<td>{apparentTemperatureMin}</td>
						</tr>
						<tr>
							<td>Precipitazioni</td>
							<td>{precipitation}</td>
						</tr>
						<tr>
							<td>Probabilita precipitazioni</td>
							<td>{precipitationProbability}</td>
						</tr>
						<tr>
							<td>Pioggia</td>
							<td>{rain}</td>
						</tr>
						<tr>
							<td>Rovesci</td>
							<td>{showers}</td>
						</tr>
						<tr>
							<td>Neve</td>
							<td>{snowfall}</td>
						</tr>
						<tr>
							<td>Vento massimo</td>
							<td>{windSpeed}</td>
						</tr>
						<tr>
							<td>Alba</td>
							<td>{sunrise}</td>
						</tr>
						<tr>
							<td>Tramonto</td>
							<td>{sunset}</td>
						</tr>
					</tbody>
				</table>

				<footer>
					<small>
						Coordinate: {city.latitude}, {city.longitude}
					</small>
				</footer>
			</article>
		</main>
	);
}

export default CityWeather;
