<script>
	// Set default variables
	export let status = 'Last Played';
	export let song = 'Example Song #1';
	export let artist = 'Artist';
	export let songLink = 'https://spotify.com';

	// Create and decide on background URL
	export let backgroundUrl = "bg-[url('/weatherBg/sunny-animated.svg')]";

	// Log Background URL
	// console.log(backgroundUrl);
</script>

<!-- min-w to visualize properly -->
<div class="card card-hover w-full rounded-lg md:w-auto md:min-w-[350px]">
	<a href={songLink} target="_blank"
		><header class="card-header p-0">
			<div
				class="rounded-lg bg-cover bg-no-repeat px-6 py-4"
				style="background-image: url('{backgroundUrl}'); background-position: center center; background-blend-mode:darken; background-color:rgba(0,0,0,0.7);"
			>
				<div class="flex h-full flex-row justify-between">
					<div class="items-between mr-4 flex grow flex-col justify-between md:mr-8">
						<h3 class="h2 mb-1 text-2xl text-primary-100 lg:text-3xl">{song}</h3>
						<h1 class="h5 text-primary-100 lg:h4">{artist}</h1>
					</div>
					<div class="flex flex-col items-end justify-end text-right">
						<p class="text-sm text-primary-100 md:text-lg">{status}</p>
					</div>
				</div>
			</div>
		</header></a
	>
</div>
