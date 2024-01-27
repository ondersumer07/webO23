<script>
	import CardWimage from '$lib/cardWimage/cardWimage.svelte';
	export let data;

	let itemNumber = 7;
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
	{#await data.streamed?.portfolio}
		{#each { length: itemNumber } as _, i}
			<div class="card card-hover grid animate-pulse gap-4 rounded-lg p-0">
				<div class="placeholder card-header h-[250px] w-full rounded-t-lg p-0" />
				<div class="p-4">
					<div class="placeholder mb-4" />
					<div class="placeholder" />
				</div>
				<div class="placeholder m-4 w-1/4" />
			</div>
		{/each}
	{:then portfolio}
		{#each portfolio as portfolio}
			<CardWimage
				image={portfolio.image}
				description={portfolio.description}
				title={portfolio.title}
				date={portfolio.date}
				hrefLink={portfolio.href}
			/>
		{/each}
	{/await}
</div>
