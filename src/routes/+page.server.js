// Import weather API key
import { OPEN_WEATHER_API_KEY } from '$env/static/private';
import { MAPS_API_KEY } from '$env/static/private';

// City to change when I leave Istanbul
let currentCity = 'Kocaeli';

// Create mapsURL
let mapsURL =
	'https://maps.googleapis.com/maps/api/staticmap?center=' +
	currentCity +
	'&zoom=3&size=400x200&markers=color:red|label:O|' +
	currentCity +
	'&key=' +
	MAPS_API_KEY;

// Main Function
// @ts-ignore implicitly has "any" type error
export const load = async ({ params }) => {
	try {
		// fetch the city and timezone from pocketbase
		// @ts-ignore implicitly has "any" type error
		const fetchCityTime = async (cityTime) => {
			const cityTimeRes = await fetch(
				`https://personal-website.pockethost.io/api/collections/weatherAndTimezone/records?url=${cityTime}`
			);

			if (!cityTimeRes.ok) {
				throw new Error(`Failed to fetch city/timezone data. Status: ${cityTimeRes.status}`);
			}

			const cityTimeData = await cityTimeRes.json();
			return cityTimeData.items;
		};

		// fetch weather state
		// @ts-ignore implicitly has "any" type error
		const fetchWeather = async () => {
			const weatherRes = await fetch(
				// Fetch from API, units=metric
				`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${OPEN_WEATHER_API_KEY}&units=metric `
			);

			if (!weatherRes.ok) {
				throw new Error(`Failed to fetch weather data. Status: ${weatherRes.status}`);
			}

			const weatherData = await weatherRes.json();
			return weatherData;
		};

		return {
			// Stream data to migrate to SvelteKit 2.x as well as make the website load faster
			// @ts-ignore implicitly has "any" type error
			streamed: {
				cityTime: fetchCityTime(params.cityTime),
				weather: fetchWeather(),
				mapsURL
			}
		};
	} catch (error) {
		// Handle the error here
		console.error('An error occurred:', error);
		return {
			redirect: '/error'
		};
	}
};
