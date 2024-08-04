<script>
	import CardWimageReadTime from '$lib/cardWimageReadTime/cardWimageReadTime.svelte';
	export let data;

	let itemNumber = 8;
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
	{#await data.streamed?.blogCard}
		{#each { length: itemNumber } as _, i}
			<div class="card card-hover grid animate-pulse gap-4 rounded-lg p-0">
				<div class="placeholder card-header h-[250px] w-full rounded-t-lg p-0" />
				<div class="p-4">
					<div class="placeholder mb-4 rounded-lg" />
					<div class="placeholder rounded-lg" />
				</div>
				<div class="placeholder m-4 w-1/4 rounded-lg" />
			</div>
		{/each}
	{:then blogCard}
		{#each blogCard as blogCard}
			<CardWimageReadTime
				image={blogCard.image}
				description={blogCard.description}
				title={blogCard.title}
				date={blogCard.date}
				hrefLink={blogCard.href}
			/>
		{/each}
	{/await}
</div>
