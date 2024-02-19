<script>
	import CardDownload from '$lib/cardDownload/cardDownload.svelte';
	export let data;

	let itemNumber = 3;
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
	{#await data.streamed?.downloads}
		{#each { length: itemNumber } as _, i}
			<div class="card animate-pulse space-y-2 rounded-lg p-4">
				<div class="placeholder h-[24px] w-1/2 rounded-lg" />
				<div class="placeholder h-[20px] w-full rounded-lg" />
				<div class="placeholder h-[20px] w-1/3 rounded-lg" />
			</div>
		{/each}
	{:then downloads}
		{#each downloads as downloads}
			<CardDownload
				hrefLink={downloads.href}
				title={downloads.title}
				description={downloads.description}
			/>
		{/each}
	{/await}
</div>
