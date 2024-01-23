<script>
	import { onMount } from 'svelte';

	// Set default variables
	export let currentCity = 'Ankara';
	export let timezoneCity = 'Europe/Istanbul';
	export let weatherState = 'Sunny';
	export let degreesCelcius = 21;

	// Get timezone date and hour / CHANGE TIMEZONE WHEN CHANGING CITIES
	let currentDate = new Date().toLocaleString('tr-TR', { timeZone: timezoneCity });
	let currentHour = Number(currentDate.split(' ')[1].slice(0, 2));
	let currentDayofYear = currentDate.split(' ')[0];
	let currentTime = currentDate.split(' ')[1].slice(0, 5);

	onMount(async () => {
		const interval = setInterval(() => {
			currentDate = new Date().toLocaleString('tr-TR', { timeZone: timezoneCity });
			currentTime = currentDate.split(' ')[1].slice(0, 5);
			currentDayofYear = currentDate.split(' ')[0];
		}, 1000);
	});

	// Create and decide on background URL
	let backgroundUrl = "bg-[url('/weatherBg/sunny-animated.svg')]";

	if (weatherState == 'Clear' && 7 < currentHour && currentHour < 20) {
		backgroundUrl = "bg-[url('/weatherBg/sunny-animated.svg')]";
	} else if (weatherState == 'Clear') {
		backgroundUrl = "bg-[url('/weatherBg/night-animated.svg')]";
	} else if (
		(weatherState == 'Clouds' ||
			weatherState == 'Mist' ||
			weatherState == 'Smoke' ||
			weatherState == 'Haze' ||
			weatherState == 'Dust' ||
			weatherState == 'Fog' ||
			weatherState == 'Sand' ||
			weatherState == 'Ash' ||
			weatherState == 'Squal') &&
		7 < currentHour &&
		currentHour < 20
	) {
		backgroundUrl = "bg-[url('/weatherBg/cloudy-animated.svg')]";
	} else if (
		weatherState == 'Clouds' ||
		weatherState == 'Mist' ||
		weatherState == 'Smoke' ||
		weatherState == 'Haze' ||
		weatherState == 'Dust' ||
		weatherState == 'Fog' ||
		weatherState == 'Sand' ||
		weatherState == 'Ash' ||
		weatherState == 'Squal'
	) {
		backgroundUrl = "bg-[url('/weatherBg/cloudy-night-animated.svg')]";
	} else if (weatherState == 'Rain' || weatherState == 'Tornado' || weatherState == 'Drizzle') {
		backgroundUrl = "bg-[url('/weatherBg/rainy-animated.svg')]";
	} else if (weatherState == 'Thunderstorm') {
		backgroundUrl = "bg-[url('/weatherBg/thunderstorm-animated.svg')]";
	} else if (weatherState == 'Snow') {
		backgroundUrl = "bg-[url('/weatherBg/snowy-animated.svg')]";
	}

	// Log Background URL
	// console.log(backgroundUrl);
</script>

<!-- min-w to visualize properly -->
<div class="card w-full rounded-lg md:w-auto md:min-w-[350px]">
	<header class="card-header p-0">
		<div class="rounded-lg {backgroundUrl} bg-cover bg-no-repeat px-6 py-4">
			<div class="flex h-full flex-row justify-between">
				<div class="items-between mr-4 flex grow flex-col justify-between md:mr-8">
					<h2 class="h4 text-primary-100 md:h3">{weatherState}</h2>
					<h3 class="h1 text-4xl text-primary-100 md:text-6xl">{degreesCelcius}°</h3>
				</div>
				<div class="items-between flex flex-col justify-between text-right">
					<div>
						<p class="text-sm font-bold text-primary-100 md:text-lg">
							{currentTime}
						</p>
						<p class="text-sm text-primary-100 md:text-lg">{currentDayofYear}</p>
					</div>
					<p class="text-sm text-primary-100 md:text-lg">{currentCity}</p>
				</div>
			</div>
		</div>
	</header>
</div>
