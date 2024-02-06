<script>
	export let data;
	// Create a new dat object to style
	let date = new Date();
	let currentDate = new Intl.DateTimeFormat('en-UK', {
		dateStyle: 'medium' // full/ long / medium / short
	});
	// Get currentDay in wanted format
	let currentDay = currentDate.format(date);
</script>

<div class="m-auto w-full xl:w-3/4">
	{#await Promise.all([data.streamed?.poems, data.streamed?.randomPoemNum])}
		<div class="animate-pulse rounded-lg">
			<div class="">
				<!-- Desktop title loading -->
				<div class="mb-4 hidden flex-row md:flex">
					<div class="placeholder mr-4 h-[24px] w-1/4 rounded-lg p-0" />
					<div class="placeholder h-[24px] w-1/4 rounded-lg p-0" />
				</div>
				<!-- Mobile title loading -->
				<div class="mb-4 flex flex-col md:hidden">
					<div class="placeholder mb-2 mr-4 h-[24px] w-1/2 rounded-lg p-0" />
					<div class="placeholder h-[12px] w-1/3 rounded-lg p-0" />
				</div>
				<!-- Poem loading -->
				<div class="mb-4 flex flex-col">
					<div class="placeholder mb-2 h-[24px] w-1/2 rounded-lg p-0" />
					<div class="placeholder mb-2 h-[24px] w-1/3 rounded-lg p-0" />
					<div class="placeholder mb-2 h-[24px] w-1/4 rounded-lg p-0" />
					<div class="placeholder mb-2 h-[24px] w-1/3 rounded-lg p-0" />
					<div class="placeholder h-[24px] w-1/3 rounded-lg p-0" />
				</div>
				<div class="mb-4 flex flex-col">
					<div class="placeholder mb-2 h-[24px] w-1/4 rounded-lg p-0" />
					<div class="placeholder mb-2 h-[24px] w-1/2 rounded-lg p-0" />
					<div class="placeholder mb-2 h-[24px] w-1/3 rounded-lg p-0" />
					<div class="placeholder mb-2 h-[24px] w-1/4 rounded-lg p-0" />
					<div class="placeholder h-[24px] w-1/4 rounded-lg p-0" />
				</div>
			</div>
		</div>
	{:then [poems, randomPoemNum]}
		{#if randomPoemNum != undefined}
			<div class="mb-1 flex flex-col md:flex-row md:items-center">
				{#if poems[randomPoemNum].title == ''}
					<!-- If the title is empty, no element to put mr-4 and shift POTD text -->
				{:else}
					<h4 class="h4 mr-4 underline decoration-2 transition-all hover:font-black">
						{poems[randomPoemNum].title}
					</h4>
					<!-- Create svg circle to make it available in fill-token -->
					<svg
						class="fill-token mr-4 hidden md:block"
						height="5"
						width="5"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="2" cy="2" r="2" />
					</svg>
				{/if}
				<small><i>Poem of the day, {currentDay}</i></small>
			</div>
			<pre class="mb-2" style="font-family:Inter, sans-serif; white-space: pre-wrap;">{poems[
					randomPoemNum
				].poem}</pre>
			<p style="line-height:normal"><small>From <i>{poems[randomPoemNum].source}</i></small></p>
		{/if}
	{/await}
</div>
