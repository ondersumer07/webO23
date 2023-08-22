<script>
	import { page } from '$app/stores';
	export let data;

	console.log(data);

	// 0 = English, 1 = Turkish
	let lang = 0;
	function langSwitch() {
		switch (lang) {
			case 0:
				lang = 1;
				break;
			case 1:
				lang = 0;
				break;
		}
		return lang;
	}
</script>

<div class="flex w-full items-center justify-center">
	<div class="card mb-5 p-4 text-justify md:w-3/4">
		<p class="text-md">
			This is a translated version of the original text in Turkish. <button
				class="underline transition-all hover:font-bold"
				on:click={langSwitch}><p>{lang == 0 ? 'See original.' : 'See English.'}</p></button
			>
		</p>
	</div>
</div>

{#await data.streamed?.blogPage}
	<div class="flex animate-pulse flex-col items-center justify-center">
		<div class="placeholder mb-5 w-1/4" />
		<div class="placeholder mb-4 w-3/4" />
		<div class="placeholder mb-4 w-3/4" />
		<div class="placeholder mb-4 w-3/4" />
		<div class="placeholder mb-4 w-3/4" />
		<div class="placeholder mb-4 w-3/4" />
		<div class="placeholder w-3/4" />
	</div>
{:then blogPage}
	{#each blogPage as blogPage}
		{#if blogPage.url === $page.url.pathname}
			<div class="max-w-60 flex flex-col items-center justify-center">
				<h2 class="h2 pb-8 text-center underline decoration-2 transition-all hover:font-black">
					{lang == 0 ? blogPage.titleENG : blogPage.titleTR}
				</h2>
				<p class="mb-5 text-justify text-lg md:w-3/4">
					{@html lang == 0 ? blogPage.textENG : blogPage.textTR}
				</p>
			</div>
		{/if}
	{/each}
{/await}
