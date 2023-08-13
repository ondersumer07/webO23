// Import weather API key
import { OPEN_WEATHER_API_KEY } from '$env/static/private';

// City to change when I leave Istanbul
let currentCity = 'Kocaeli';

// Main Function
export const load = async () => {
	try {
		const fetchWeather = async () => {
			const weatherRes = await fetch(
				// Fetch from API, units=metric
				`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${OPEN_WEATHER_API_KEY}&units=metric `
			);

			if (!weatherRes.ok) {
				throw new Error(`Failed to fetch coffee data. Status: ${weatherRes.status}`);
			}

			const weatherData = await weatherRes.json();
			return weatherData;
		};

		return {
			// No streamed for correct API response
			weather: fetchWeather()
		};
	} catch (error) {
		// Handle the error here
		console.error('An error occurred:', error);
		return {
			redirect: '/error'
		};
	}
};
