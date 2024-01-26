<script>
	import MusicCard from '$lib/musicCard/musicCard.svelte';
	export let data;
</script>

<div class="m-auto grid grid-cols-1 lg:grid-cols-3 xl:w-3/4">
	<p class="pb-5 text-lg lg:col-span-2 lg:col-start-1 lg:pr-20">
		They told me to talk about breaking points on this page, so there it goes. Since I was a child,
		I’ve been passionate about computers and technology. Who I am today started way back when I was
		as little as 12, I wanted to start a YouTube channel with my cousin but couldn’t find a banner
		picture. As a solution, we decided that I would design a banner. At that quick moment of the
		decision, I didn’t realise my life was about to change irreversibly.
		<br />
		<br />
		In the following years, I
		<a class="underline transition-all hover:font-bold" href="/cv-education">learned much more</a>
		than just Adobe Photoshop, worked with
		<a class="underline transition-all hover:font-bold" href="/portfolio"
			>several companies and start-ups</a
		>
		and have been happy with what I did. The only catch was, although I liked what I did, my passion
		was more than just graphic design. I wanted to create software and help people, touch their lives
		and make it easier. I wanted to use AI in a good way rather than evil. I wanted to build complex
		structures that visualised data so it would be easier to work with, fulfilling both ends of my passion.
		This pushed me in a different direction.
		<br />
		<br />
		Nowadays, I still keep designing, I actually never left but I’ve been shifting my focus towards programming
		and learning new languages to advance in this realm. Actually, this website is a prime example of
		this situation since it was my first project with SvelteKit. I have a lot to undertake in this industry,
		and although this is just the beginning, I am ready to confront any challenges I may face.
	</p>
	<div class="items-end lg:col-span-1 lg:col-start-3 lg:w-auto lg:min-w-[350px]">
		<div class="pb-5">
			<img
				class="rounded-lg md:w-auto md:min-w-[350px]"
				src="/aboutImage/aboutImage.jpg"
				alt="Önder Sümer"
			/>
		</div>

		<!-- await data and replace with placeholder while -->
		{#await Promise.all([data.streamed?.songs])}
			<div class="card h-[106px] w-full animate-pulse rounded-lg md:w-auto">
				<div class="px-6 py-4">
					<div class="flex flex-row items-baseline justify-between">
						<div class="placeholder mb-4 h-[24px] w-1/2 rounded-lg p-0 md:h-[32px]" />
						<div class="placeholder mb-4 h-[16px] w-1/4 rounded-lg p-0 md:h-[24px]" />
					</div>
					<div class="flex flex-row items-baseline justify-between">
						<div class="placeholder h-[16px] w-1/2 rounded-lg p-0 md:h-[24px]" />
						<div class="placeholder h-[16px] w-1/4 rounded-lg p-0 md:h-[24px]" />
					</div>
				</div>
			</div>
		{:then songs}
			<!-- check if the song is currently playing or was last played -->
			{#if typeof songs[0].recenttracks.track[0]['@attr'] == 'undefined'}
				<MusicCard
					status={'Last Played'}
					song={songs[0].recenttracks.track[0].name}
					artist={songs[0].recenttracks.track[0].artist['#text']}
					songLink={songs[0].recenttracks.track[0].url}
					backgroundUrl={songs[0].recenttracks.track[0].image[3]['#text']}
				/>
			{:else}
				<MusicCard
					status={'Now Playing'}
					song={songs[0].recenttracks.track[0].name}
					artist={songs[0].recenttracks.track[0].artist['#text']}
					songLink={songs[0].recenttracks.track[0].url}
					backgroundUrl={songs[0].recenttracks.track[0].image[3]['#text']}
				/>
			{/if}
		{/await}
	</div>
</div>
