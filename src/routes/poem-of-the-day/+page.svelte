<script>
	import { clipboard } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// Import necessary toast elements
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	// Toast
	const CopiedMesPoem = {
		message: 'Copied to clipboard',
		background: 'variant-filled-surface',
		timeout: 1500
	};

	// Toast Function
	function toastPopPoem() {
		toastStore.trigger(CopiedMesPoem);
	}

	// Get Data
	export let data;

	// Create a new date object to style
	let date = new Date();
	let currentDate = new Intl.DateTimeFormat('en-UK', {
		dateStyle: 'medium' // full/ long / medium / short
	});
	// Get currentDay in wanted format
	let currentDay = currentDate.format(date);

	// share poem link function
	// @ts-ignore
	function sharePoem(poemNum) {
		var currentURL = $page.url.href;
		if (currentURL.includes('?')) {
			return currentURL;
		} else {
			let shareURL = currentURL + '?' + poemNum;
			return shareURL;
		}
	}

	// function that checks to see if a poem was shared on load
	function checkIfShared() {
		var currentURL = $page.url.href;
		let poemNum = currentURL.split('?');
		return poemNum;
	}

	// copy poem function. object literals are needed for line break between title and poem.
	// @ts-ignore
	function copyPoem(title, poem) {
		let copiedPoem =
			`` +
			title +
			`
` +
			poem;
		return copiedPoem;
	}
</script>

<!-- Needed for toast to work -->
<Toast />

<div class="m-auto w-full xl:w-3/4">
	{#await Promise.all( [data.streamed?.poems, data.streamed?.randomPoemNum, data.streamed?.poemCount] )}
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
	{:then [poems, randomPoemNum, poemCount]}
		{#if randomPoemNum != undefined}
			{#if checkIfShared()[1] != undefined && Number(checkIfShared()[1]) != poemCount && !(Number(checkIfShared()[1]) > Number(poemCount))}
				<h4 class="h4 mb-1 underline decoration-2 transition-all hover:font-black">
					{poems[checkIfShared()[1]].title}
				</h4>
				<pre class="mb-2" style="font-family:Inter, sans-serif; white-space: pre-wrap;">{poems[
						checkIfShared()[1]
					].poem}</pre>
				<p style="line-height:normal">
					<small>From <i>{poems[checkIfShared()[1]].source}</i></small>
				</p>
				<div class="mt-6 flex flex-row">
					<button
						class="mr-6 flex flex-row items-center underline transition-all hover:scale-[1.05] active:scale-[0.75]"
						use:clipboard={sharePoem(Number(checkIfShared()[1]))}
						on:click={toastPopPoem}
						><svg
							class="fill-token mr-1 h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1256.31 1256.31"
							><g id="Layer_2" data-name="Layer 2"
								><g id="copy_link" data-name="copy link"
									><rect
										x="396.56"
										y="561.93"
										width="463.18"
										height="132.44"
										rx="31.01"
										transform="translate(-260.19 628.15) rotate(-45)"
									/><path
										d="M1247.23,391.79l-71.73-71.72h0L936.24,80.82h0L864.51,9.08a31,31,0,0,0-43.84,0l-337,337.05a31,31,0,0,0,0,43.84l49.81,49.81a31,31,0,0,0,43.85,0L820.67,196.39a31,31,0,0,1,43.85,0l195.4,195.41a31,31,0,0,1,0,43.85L816.53,679a31,31,0,0,0,0,43.84l49.8,49.8a31,31,0,0,0,43.85,0l337.05-337A31,31,0,0,0,1247.23,391.79Z"
									/><path
										d="M772.68,866.33l-49.8-49.8a31,31,0,0,0-43.84,0L435.65,1059.92a31,31,0,0,1-43.85,0L196.39,864.52a31,31,0,0,1,0-43.85L439.78,577.28a31,31,0,0,0,0-43.85L390,483.62a31,31,0,0,0-43.84,0l-337,337a31,31,0,0,0,0,43.84l71.73,71.74h0L320.07,1175.5h0l71.72,71.73a31,31,0,0,0,43.85,0l337-337.05A31,31,0,0,0,772.68,866.33Z"
									/></g
								></g
							></svg
						>copy link</button
					>
					<button
						class="flex flex-row items-center underline transition-all hover:scale-[1.05] active:scale-[0.75]"
						use:clipboard={copyPoem(
							poems[Number(checkIfShared()[1])].title,
							poems[Number(checkIfShared()[1])].poem
						)}
						on:click={toastPopPoem}
						><svg
							class="fill-token h-4 w-4"
							id="copy_text"
							data-name="copy text"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1500 1500"
							><path
								d="M577.2,1129.09a132.34,132.34,0,0,1-80.82-121.94V467.82H307.44a25.38,25.38,0,0,0-25.38,25.39v872.61a25.38,25.38,0,0,0,25.38,25.39H870.3a25.38,25.38,0,0,0,25.38-25.39V1139.54H628.76A131.63,131.63,0,0,1,577.2,1129.09Z"
							/><path
								d="M1191.62,109.15H628.76a25.38,25.38,0,0,0-25.38,25.39v872.61a25.38,25.38,0,0,0,25.38,25.39h562.86a25.38,25.38,0,0,0,25.38-25.39V134.54A25.38,25.38,0,0,0,1191.62,109.15Z"
							/></svg
						>copy poem</button
					>
				</div>
			{:else}
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
				<div class="mt-6 flex flex-row">
					<button
						class="mr-6 flex flex-row items-center underline transition-all hover:scale-[1.05] active:scale-[0.75]"
						use:clipboard={sharePoem(randomPoemNum)}
						on:click={toastPopPoem}
						><svg
							class="fill-token mr-1 h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1256.31 1256.31"
							><g id="Layer_2" data-name="Layer 2"
								><g id="copy_link" data-name="copy link"
									><rect
										x="396.56"
										y="561.93"
										width="463.18"
										height="132.44"
										rx="31.01"
										transform="translate(-260.19 628.15) rotate(-45)"
									/><path
										d="M1247.23,391.79l-71.73-71.72h0L936.24,80.82h0L864.51,9.08a31,31,0,0,0-43.84,0l-337,337.05a31,31,0,0,0,0,43.84l49.81,49.81a31,31,0,0,0,43.85,0L820.67,196.39a31,31,0,0,1,43.85,0l195.4,195.41a31,31,0,0,1,0,43.85L816.53,679a31,31,0,0,0,0,43.84l49.8,49.8a31,31,0,0,0,43.85,0l337.05-337A31,31,0,0,0,1247.23,391.79Z"
									/><path
										d="M772.68,866.33l-49.8-49.8a31,31,0,0,0-43.84,0L435.65,1059.92a31,31,0,0,1-43.85,0L196.39,864.52a31,31,0,0,1,0-43.85L439.78,577.28a31,31,0,0,0,0-43.85L390,483.62a31,31,0,0,0-43.84,0l-337,337a31,31,0,0,0,0,43.84l71.73,71.74h0L320.07,1175.5h0l71.72,71.73a31,31,0,0,0,43.85,0l337-337.05A31,31,0,0,0,772.68,866.33Z"
									/></g
								></g
							></svg
						>copy link</button
					>
					<button
						class="flex flex-row items-center underline transition-all hover:scale-[1.05] active:scale-[0.75]"
						use:clipboard={copyPoem(poems[randomPoemNum].title, poems[randomPoemNum].poem)}
						on:click={toastPopPoem}
						><svg
							class="fill-token h-4 w-4"
							id="copy_text"
							data-name="copy text"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1500 1500"
							><path
								d="M577.2,1129.09a132.34,132.34,0,0,1-80.82-121.94V467.82H307.44a25.38,25.38,0,0,0-25.38,25.39v872.61a25.38,25.38,0,0,0,25.38,25.39H870.3a25.38,25.38,0,0,0,25.38-25.39V1139.54H628.76A131.63,131.63,0,0,1,577.2,1129.09Z"
							/><path
								d="M1191.62,109.15H628.76a25.38,25.38,0,0,0-25.38,25.39v872.61a25.38,25.38,0,0,0,25.38,25.39h562.86a25.38,25.38,0,0,0,25.38-25.39V134.54A25.38,25.38,0,0,0,1191.62,109.15Z"
							/></svg
						>copy poem</button
					>
				</div>
			{/if}
		{/if}
	{/await}
</div>
