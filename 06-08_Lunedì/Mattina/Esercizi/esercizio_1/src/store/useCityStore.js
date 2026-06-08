import axios from "axios";
import { create } from "zustand";
import citiesCoordinates from "../assets/italianCitiesCoordinates.json";

const dailyParams =
	"temperature_2m_max,temperature_2m_min,weather_code,rain_sum,showers_sum,snowfall_sum,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,apparent_temperature_max,apparent_temperature_min,sunset,sunrise";

export const useCityStore = create((set, get) => ({
	// Dati iniziali (State)
	cities: citiesCoordinates,
	cityWeatherData: null,
	loading: false,
	error: null,

	// Azione per cercare una citta tramite id
	getCityById: (id) => {
		const cityId = Number(id);
		return get().cities.find((city) => city.id === cityId);
	},

	// Azione comoda da usare nella pagina CityWeather
	fetchWeatherByCityId: async (id) => {
		const city = get().getCityById(id);

		if (!city) {
			set({
				error: "La città che cerchi non è nell'elenco",
			});
			return;
		}

		set({
			cityWeatherData: null,
			loading: true,
			error: null,
		});

		try {
			const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=${dailyParams}&forecast_days=1&timezone=auto`;

			const response = await axios.get(url);

			set({
				cityWeatherData: response.data,
			});
		} catch (error) {
			set({
				error: error.message,
			});
		} finally {
			set({
				loading: false,
			});
		}
	},

	// Azione per pulire i dati meteo
	resetWeather: () =>
		set({
			selectedCity: null,
			cityWeatherData: null,
			loading: false,
			error: null,
		}),
}));
