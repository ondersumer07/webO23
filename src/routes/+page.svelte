<script>
	import WeatherCard from './../lib/navigation/weatherCard/weatherCard.svelte';

	// Get data from +page.server.js
	export let data;
	console.log(data.weather.weather[0].main);

	// Create variables fetched from API
	let currentCity = data.weather.name;
	let weatherState = data.weather.weather[0].main;
	let degreesCelcius = Math.round(data.weather.main.temp);
</script>

<div class="container mx-auto flex h-full items-center justify-center">
	<div class="flex flex-col items-center space-y-10 text-center" />
	<!-- Implement said variables to WeatherCard component -->
	<WeatherCard {currentCity} {weatherState} {degreesCelcius} />
</div>
