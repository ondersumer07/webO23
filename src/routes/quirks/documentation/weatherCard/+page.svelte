<script>
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js/lib/core';

	// Import each language module you require
	import javascript from 'highlight.js/lib/languages/javascript';
	import bash from 'highlight.js/lib/languages/bash';
	import hljs_svelte from 'highlightjs-svelte';

	// Register each imported language module
	hljs.registerLanguage('javascript', javascript);
	// @ts-ignore
	hljs.registerLanguage('bash', bash);
	hljs_svelte(hljs);

	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);
</script>

<div class="flex max-w-full items-center justify-center">
	<div class="flex max-w-7xl flex-col items-center justify-center">
		<div class="flex w-full justify-center">
			<h2 class="h2 inline pb-4 text-center underline decoration-2 transition-all hover:font-black">
				weatherCard
			</h2>
		</div>

		<div class="flex flex-col space-y-4 text-justify">
			<p>
				Welcome to the docs of weatherCard. This is a component you can use freely to show others
				your city's weather data. You can <a
					class="underline transition-all hover:font-bold"
					href="https://github.com/ondersumer07/weatherCard"
					target="_blank">visit its Github</a
				> to clone it.
			</p>
			<div class="card flex flex-row items-center space-x-4 p-4">
				<span class="h1 text-primary-500">!</span>
				<p>
					weatherCard utilizes <a
						class="underline transition-all hover:font-bold"
						href="https://openweathermap.org/api"
						target="_blank">Open Weather API</a
					>, so you will need an API key from them. You can use their free plan if you plan on
					building a small project. Also, you will need a key for
					<a
						class="underline transition-all hover:font-bold"
						href="https://developers.google.com/maps/documentation/maps-static"
						target="_blank">Maps Static API</a
					> from Google to use popup maps feature.
				</p>
			</div>
			<div>
				<h4 class="h4 underline decoration-2 md:h3">About the project</h4>
				<p>
					This component supports every possible weather condition mentioned in Open Weather API. It
					has 7 different animated backgrounds for various situations: Clear(Morning), Clear(Night),
					Clouds(Morning), Clouds(Night), Rain, Thunderstorm and Snow. Even if the title isn't
					directly supported, it's replaced by the most similar weather condition. Here are those
					animations (except rain):
				</p>
			</div>

			<div class="flex w-full justify-center">
				<div class="grid w-full grid-cols-2 items-center md:w-3/4">
					<img src="/documentation/weatherCard/sunnyDemo.gif" alt="Clear Morning Demo" />
					<img src="/documentation/weatherCard/clearNightDemo.gif" alt="Clear Night Demo" />
					<img src="/documentation/weatherCard/cloudsDemo.gif" alt="Clouds Demo" />
					<img src="/documentation/weatherCard/cloudsNightDemo.gif" alt="Clouds Night Demo" />
					<img src="/documentation/weatherCard/thunderstormDemo.gif" alt="Thunderstorm Demo" />
					<img src="/documentation/weatherCard/snowDemo.gif" alt="Snow Demo" />
				</div>
			</div>

			<p>
				Besides the weather condition, weatherCard also has a popup feature that shows the
				geographical location of your city. It uses Google's Maps Static API which is also
				customizable. We will dive deeper into it later. Here's how the maps function work:
			</p>
			<div class="flex w-full justify-center">
				<div class="grid w-full grid-cols-2 items-center md:w-3/4">
					<img src="/documentation/weatherCard/mapsDemoIstanbul.gif" alt="Maps Istanbul Demo" />
					<img src="/documentation/weatherCard/mapsDemoNYC.gif" alt="Maps NYC Demo" />
				</div>
			</div>

			<div>
				<h4 class="h4 underline decoration-2 md:h3">Installation</h4>
				<p>To clone weatherCard, you can simply go ahead and do:</p>
			</div>
			<CodeBlock
				language="Bash"
				buttonCopied={'Copied🎉'}
				code="
        # Install npm and clone the repository. Then, install the packages.
npm install -g npm
git clone https://github.com/ondersumer07/weatherCard.git
cd weatherCard
npm install"
			></CodeBlock>
			<p>
				Now you will have a Skeleton project that works with SvelteKit and also includes Tailwind
				CSS and Floating UI. It might sound like much, but it makes development way easier. If you
				don't want to use those libraries, you can take this work as an example and create the
				component yourself from scratch.
			</p>
			<p>
				To get the project working, create a <code>.env</code> file in your root directory. Inside it
				should look like this:
			</p>
			<CodeBlock
				language="Bash"
				buttonCopied={'Copied🎉'}
				code="
        #PRIVATE
OPEN_WEATHER_API_KEY=YOUR_API_KEY_HERE
MAPS_API_KEY=YOUR_API_KEY_HERE"
			></CodeBlock>
			<div>
				<h4 class="h4 underline decoration-2 md:h3">Customisation</h4>
				<p>
					Now that you've set up the project correctly, everything should be in working order, but
					displaying Istanbul information everywhere. We need to make some changes for it to display
					your city.
				</p>
			</div>
			<div>
				<h5 class="h5">Default variables</h5>
				<p>
					First, you can go ahead and change the default variables to somewhere you're close to.
					Although it will never show up if everything goes smoothly, it's good practice to take
					caution.
				</p>
			</div>

			<CodeBlock
				language="Javascript"
				buttonCopied={'Copied🎉'}
				code={`
		// /src/lib/weatherCard/weatherCard.svelte

// Set default variables
export let currentCity = 'Ankara';
export let timezoneCity = 'Europe/Istanbul';
export let weatherState = 'Sunny';
export let degreesCelcius = 21;
export let mapsURL = '';
`}
			></CodeBlock>
			<p>
				You can customize these as you like. Just make sure they're valid. I leave the mapsURL empty
				in purpose. Because even if it's like this, it will still work, just won't show the popup. I
				believe losing that function is not a major issue when I can't fetch weather data at all.
			</p>
			<div>
				<h5 class="h5">Changing your city</h5>
				<p>After that, you should adjust your Javascript file to match your city.</p>
			</div>

			<CodeBlock
				language="Javascript"
				buttonCopied={'Copied🎉'}
				code={`
		// /src/routes/+page.server.js

// IMPORTANT change this city according to your location!
let currentCity = 'Istanbul';
`}
			></CodeBlock>
			<p>
				The <code>currentCity</code> is the variable used in during both fetching weather data and maps
				URL creation. If you don't change this variable, the data that is showing will be Istanbul's
				data.
			</p>

			<div>
				<h5 class="h5">Changing units</h5>
				<p>
					Open Weather API allows you to use either Celcius or Fahrenheit. To adjust this setting
					(default is Celcius), you need to change a bit while calling the API.
				</p>
			</div>
			<CodeBlock
				language="Javascript"
				buttonCopied={'Copied🎉'}
				code={`
		// /src/routes/+page.server.js

const fetchWeather = async () => {
	const weatherRes = await fetch(
		// Fetch from API, units=metric for universality. Change to "units=imperial" if you want to display Fahrenheit.
		"https://api.openweathermap.org/data/2.5/weather?q={currentCity}&appid={OPEN_WEATHER_API_KEY}&units=metric"
	);
	...
`}
			></CodeBlock>

			<p>
				Note that there are "$" signs before currentCity and OPEN_WEATHER_API_KEY which makes them a
				universal variable in Svelte.
			</p>

			<div>
				<h5 class="h5">Timezone !important</h5>
				<p>
					If you're outside of Europe, or want to use a static timezone, you can change it in your
					main page file. You can enter a timezone directly, or fetch it from your database, or
					leave it as is if you're living in Europe.
				</p>
			</div>
			<CodeBlock
				language="Svelte"
				buttonCopied={'Copied🎉'}
				code={`
		<!-- /src/routes/+page.svelte -->

{:then [weather, mapsURL]}
	<!-- IMPORTANT, if you're in a different timezone than "Europe/YOURCITY", change the timezone city. -->
	<WeatherCard
		currentCity={weather.name}
		timezoneCity={'Europe/' + weather.name}
		weatherState={weather.weather[0].main}
		degreesCelcius={Math.round(weather.main.temp)}
		{mapsURL}
		/>
{/await}`}
			></CodeBlock>
			<p>
				This code assumes that you're in Europe and that Javascript recognizes your city as a
				timezone. You can adjust <code>timezoneCity</code> value to fit your needs.
			</p>
			<p>Finally, it should all be working! Hooray!</p>
			<div>
				<h5 class="h5">Adding other weather conditions (optional)</h5>
				<p>
					If you want, you can add or remove weather conditions to suit your needs. Only thing you
					need to do is upload your new background file to <code>/static/weatherBg</code> and link it.
				</p>
			</div>
			<CodeBlock
				language="Javascript"
				buttonCopied={'Copied🎉'}
				code={`
		// /src/lib/weatherCard/weatherCard.svelte

// Create and decide on background URL.
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
	) 

	...

	} else if (weatherState == 'Thunderstorm') {
		backgroundUrl = "bg-[url('/weatherBg/thunderstorm-animated.svg')]";
	} else if (weatherState == 'Snow') {
		backgroundUrl = "bg-[url('/weatherBg/snowy-animated.svg')]";
	}`}
			></CodeBlock>
			<p>You can add or adjust the if conditions to your liking!</p>
			<div>
				<h5 class="h5">Maps settings (optional)</h5>
				<p>If you'd like, you can also adjust the maps popup.</p>
			</div>
			<CodeBlock
				language="Javascript"
				buttonCopied={'Copied🎉'}
				code={`
		// /src/routes/+page.server.js

// Create mapsURL, you can adjust "zoom", "size", "markers" and "label."
let mapsURL =
	'https://maps.googleapis.com/maps/api/staticmap?center=' +
	currentCity +
	'&zoom=3&size=400x200&markers=color:red|label:O|' +
	currentCity +
	'&key=' +
	MAPS_API_KEY;
`}
			></CodeBlock>
			<p>
				You can pretty much change everything about the look of your map. I prefer a simpler map,
				but if you'd like a more complex one, you can definitely have one.
			</p>
			<div class="grid w-full grid-cols-1 md:grid-cols-3">
				<div>
					<p class="opacity-60">zoom=7, markers=color:blue|label:A|</p>
					<img src="/documentation/weatherCard/zoom7BlueA.png" alt="Adjusted Maps Demo 1" />
				</div>
				<div>
					<p class="opacity-60">zoom=12, markers=color:red|label:O|</p>
					<img src="/documentation/weatherCard/zoom12.png" alt="Adjusted Maps Demo 2" />
				</div>
				<div>
					<p class="opacity-60">zoom=16, markers=color:green|label:X|</p>
					<img src="/documentation/weatherCard/zoom16GreenX.png" alt="Adjusted Maps Demo 3" />
				</div>
			</div>
			<p>
				These are just some examples, check the documentation from Google <a
					class="underline transition-all hover:font-bold"
					href="https://developers.google.com/maps/documentation/maps-static/styling"
					target="_blank">here.</a
				>
			</p>
			<div>
				<h4 class="h4 underline decoration-2 md:h3">Final Notes</h4>
				<p>
					I've had a lot of fun developing this component for my website. I'm using free versions of
					all these APIs, but you can scale it if you wish to. Huge shout-out to <a
						class="underline transition-all hover:font-bold"
						href="https://github.com/burraksumer"
						target="_blank">Burak Sümer</a
					> as he was with me the whole process. You can use and change weatherCard however you like,
					and I hope you'll have as much fun as I did! If you have any questions regarding this, don't
					hesitate to contact me via email. Lastly, I hope it's sunny where you live!
				</p>
			</div>
		</div>
	</div>
</div>
