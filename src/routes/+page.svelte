<script>
	import WeatherCard from '../lib/weatherCard/weatherCard.svelte';

	// Get data from +page.server.js
	export let data;
	console.log(data);

	// Create variables fetched from API
	let currentCity = data.cityTime[0].weatherCity;

	if (currentCity != data.weather.name) {
		currentCity = data.weather.name;
	}

	let timezoneCity = data.cityTime[0].timezoneCity;
	let weatherState = data.weather.weather[0].main;
	let degreesCelcius = Math.round(data.weather.main.temp);
</script>

<div class="mx-auto grid h-full grid-cols-1 items-center justify-center lg:grid-cols-3 xl:w-3/4">
	<div class="pb-5 text-justify lg:col-span-2 lg:pb-0 lg:pr-20">
		<h1 class="h2 pb-1 lg:pb-5">
			Hi, I am <a href="/about" class="underline decoration-2 transition-all hover:font-black"
				>Önder!</a
			>
		</h1>
		<p class="text-lg font-light lg:text-2xl">
			I am an 18 year-old graphic designer based in Istanbul. I love creating <a
				href="/portfolio"
				class="underline transition-all hover:font-bold">brand identities</a
			>
			and diving into marketing. Currently exploring Sveltekit, Python and Java. Studying at
			<a href="/cv-education" class="underline transition-all hover:font-bold">Kabataş Erkek.</a>
			Feel free to shoot me an email -
			<a href="mailto:me@ondersumer.com" class="underline transition-all hover:font-bold"
				>let's chat!</a
			>
		</p>
	</div>
	<div class="lg:col-span-1 lg:col-start-3 lg:w-auto lg:min-w-[350px]">
		<!-- Implement said variables to WeatherCard component -->
		<WeatherCard {currentCity} {timezoneCity} {weatherState} {degreesCelcius} />
		<div class="w-full rounded-lg py-5">
			<div class="relative opacity-100 transition-all duration-300 hover:opacity-0">
				<img
					class="absolute rounded-lg"
					src="/homepagePhotos/homepagePhotoBGBW.jpg"
					alt="Homepage Me Black and White"
				/>
			</div>
			<img class="rounded-lg" src="/homepagePhotos/homepagePhotoBGColor.jpg" alt="Homepage Me" />
		</div>
	</div>
</div>
