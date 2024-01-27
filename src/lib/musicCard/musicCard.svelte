<script>
	// Set default variables
	export let status = 'Now Playing';
	export let song = 'Example Song #1';
	export let artist = 'Artist';
	export let songLink = 'https://spotify.com';

	// Create and decide on background URL
	export let backgroundUrl = "bg-[url('/weatherBg/sunny-animated.svg')]";

	let nowPlayingIconBG = "bg-[url('/icons/nowPlayingCSS.svg')]";
	let statusSplit = status.split(' ');
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
						<p class="flex flex-row items-center text-sm text-primary-100 md:text-lg">
							{#if status == 'Last Played'}
								<!--Last Played icon-->
								<svg
									class="mr-1 h-4 w-4"
									fill="#FBE7D1"
									id="last_played_copy"
									data-name="last played copy"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1500 1500"
									><path
										d="M750,109.79c-353.85,0-640.71,286.86-640.71,640.71S396.15,1391.21,750,1391.21s640.71-286.86,640.71-640.71S1103.85,109.79,750,109.79ZM325.72,663.65a25.36,25.36,0,0,1-28.56,20l-48.79-7.21a25.38,25.38,0,0,1-21.19-30A532.63,532.63,0,0,1,801.43,219.9a25.39,25.39,0,0,1,22.65,29l-7.21,48.79a25.34,25.34,0,0,1-27.38,21.56C570.32,299,369.72,448,325.72,663.65ZM535.85,750.5c0-118.27,95.88-214.15,214.15-214.15S964.15,632.23,964.15,750.5,868.27,964.65,750,964.65,535.85,868.77,535.85,750.5Zm669.73,277a533,533,0,0,1-454.79,256.13q-26.09,0-52.29-2.57a25.38,25.38,0,0,1-22.58-29l7.21-48.78a25.37,25.37,0,0,1,27.43-21.56c106.37,9.86,211.23-19.43,297.65-83.61S1153,942.08,1174.28,837.41a25.37,25.37,0,0,1,28.57-20l48.78,7.21a25.39,25.39,0,0,1,21.19,30A528.66,528.66,0,0,1,1205.58,1027.54Z"
									/><circle cx="750" cy="750.5" r="70.57" /></svg
								>
							{:else}
								<!--Now Playing icon (updated with CSS version embedded because Svelte 4 localizes all transitions and therefore no transition applies with JS. Using nowPlayingCSS.svg file and filling it in with the theme color manually in code.)-->
								<div class="mr-1 h-4 w-4 {nowPlayingIconBG} bg-cover bg-no-repeat" />
							{/if}
							<!--First part of status-->
							{statusSplit[0]}
						</p>
						<p class="flex flex-row items-center text-sm text-primary-100 md:text-lg">
							<!--Second part of status-->
							{statusSplit[1]}
						</p>
					</div>
				</div>
			</div>
		</header></a
	>
</div>
