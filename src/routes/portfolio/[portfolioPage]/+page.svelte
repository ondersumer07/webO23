<script>
	import { page } from '$app/stores';
	export let data;

	console.log(data);
</script>

{#await data.streamed?.portfolioPage}
	<div class="flex animate-pulse flex-col items-center justify-center">
		<div class="placeholder mb-5 w-1/4" />
		<div class="placeholder w-3/4" />
	</div>
{:then portfolioPage}
	{#each portfolioPage as portfolioPage}
		{#if portfolioPage.url === $page.url.pathname}
			<div class="max-w-60 flex flex-col items-center justify-center">
				<h2 class="h2 pb-5 underline decoration-2 transition-all hover:font-black">
					{portfolioPage.title}
				</h2>
				<p class="mb-5 text-justify text-lg">{portfolioPage.shortDescription}</p>
				<div class="grid w-full justify-between md:grid-cols-2">
					<img
						src={portfolioPage.image1}
						alt={portfolioPage.image1.length > 0 ? 'Portfolio Image 1' : ''}
					/>
					<img
						src={portfolioPage.image2}
						alt={portfolioPage.image2.length > 0 ? 'Portfolio Image 2' : ''}
					/>
				</div>
				<div class="grid w-full justify-between md:grid-cols-2">
					<img
						src={portfolioPage.image3}
						alt={portfolioPage.image3.length > 0 ? 'Portfolio Image 3' : ''}
					/>
					<img
						src={portfolioPage.image4}
						alt={portfolioPage.image4.length > 0 ? 'Portfolio Image 4' : ''}
					/>
				</div>

				<img
					src={portfolioPage.image5}
					alt={portfolioPage.image5.length > 0 ? 'Portfolio Image 5' : ''}
				/>
				<p class="my-12 text-lg md:mx-36">{portfolioPage.longDescription}</p>
			</div>
		{/if}
	{/each}
{/await}
