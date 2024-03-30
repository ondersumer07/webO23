<script lang="ts">
	import WeatherCard from './../lib/weatherCard/weatherCard.svelte';
	import homepageColor from './../homepagePhotos/homepagePhotoBGColor.png?enhanced';
	import homepageBW from './../homepagePhotos/homepagePhotoBGBW.png?enhanced';

	// Get data from +page.server.js
	export let data;
</script>

<div class="mx-auto grid h-full grid-cols-1 items-center justify-center lg:grid-cols-3 xl:w-3/4">
	<div class="pb-5 text-justify lg:col-span-2 lg:pb-0 lg:pr-20">
		<h1 class="h2 pb-1 lg:pb-5">
			Hi, I am <a href="/about" class="underline decoration-2 transition-all hover:font-black"
				>Önder!</a
			>
		</h1>
		<p class="text-lg font-light lg:text-2xl">
			I am a 19 year-old graphic designer / web developer based in Istanbul. I love creating <a
				href="/portfolio"
				class="underline transition-all hover:font-bold">brand identities</a
			>
			and diving into marketing. Currently exploring SvelteKit, Python and Java. Studying at
			<a href="/cv-education" class="underline transition-all hover:font-bold">Kabataş Erkek.</a>
			Feel free to shoot me an email -
			<a href="mailto:me@ondersumer.com" class="underline transition-all hover:font-bold"
				>let's chat!</a
			>
		</p>
	</div>
	<div class="lg:col-span-1 lg:col-start-3 lg:w-auto lg:min-w-[350px]">
		<!-- await variables to give to WeatherCard and replace with placeholder while -->
		{#await Promise.all([data.streamed?.cityTime, data.streamed?.weather, data.streamed?.mapsURL])}
			<div class="card h-[100px] w-full animate-pulse rounded-lg md:h-[124px] md:w-auto">
				<div class="px-6 py-4">
					<div class="flex flex-row justify-between">
						<div class="placeholder mb-4 h-[16px] w-1/4 rounded-lg p-0 md:h-[24px]" />
						<div class="placeholder mb-4 h-[16px] w-1/4 rounded-lg p-0 md:h-[24px]" />
					</div>
					<div class="flex flex-row items-baseline justify-between">
						<div class="placeholder h-[36px] w-1/4 rounded-lg p-0 md:h-[52px]" />
						<div class="placeholder h-[16px] w-1/2 rounded-lg p-0 md:h-[24px]" />
					</div>
				</div>
			</div>
			<!-- give variables to the actual WeatherCard -->
		{:then [cityTime, weather, mapsURL]}
			<WeatherCard
				currentCity={weather.name}
				timezoneCity={cityTime.timezoneCity}
				weatherState={weather.weather[0].main}
				degreesCelcius={Math.round(weather.main.temp)}
				{mapsURL}
			/>
		{/await}

		<div class="w-full rounded-lg py-5">
			<div class="relative opacity-100 transition-all duration-300 hover:opacity-0">
				<enhanced:img
					class="absolute rounded-lg"
					src={homepageBW}
					alt="Homepage Önder Sümer Black and White"
				/>
			</div>
			<enhanced:img class="rounded-lg" src={homepageColor} alt="Homepage Önder Sümer Color" />
		</div>
	</div>
</div>
