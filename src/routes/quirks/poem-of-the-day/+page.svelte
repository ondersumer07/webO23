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
	// @ts-ignore
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
		if (currentURL.includes('?') && !isNaN(Number(currentURL.split('?')[1]))) {
			return currentURL;
		} else {
			let shareURL = currentURL.split('?')[0] + '?' + poemNum;
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
	function copyPoem(title = String, poem = String) {
		let copiedPoem =
			`` +
			title +
			`
` +
			poem;
		return copiedPoem;
	}

	// @ts-ignore
	async function downloadPoemOfDay(
		imageSrc = 'https://raw.githubusercontent.com/ondersumer07/pyImageCrGH/master/todaysPoem.jpg',
		nameOfDownload = 'todaysPoem.jpg'
	) {
		const response = await fetch(imageSrc);

		const blobImage = await response.blob();

		const href = URL.createObjectURL(blobImage);

		const anchorElement = document.createElement('a');
		anchorElement.href = href;
		anchorElement.download = nameOfDownload;

		document.body.appendChild(anchorElement);
		anchorElement.click();

		document.body.removeChild(anchorElement);
		window.URL.revokeObjectURL(href);
	}
</script>

<!-- Needed for toast to work -->
<Toast />

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
					<div class="placeholder mb-2 h-[24px] w-1/2 rounded-lg p-0" />
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
				<div class="flex flex-row">
					<div class="placeholder mr-4 h-[24px] w-1/12 rounded-lg p-0" />
					<div class="placeholder h-[24px] w-1/12 rounded-lg p-0" />
				</div>
			</div>
		</div>
	{:then [poems, randomPoemNum]}
		{#if randomPoemNum.randomNum != undefined}
			<!-- Check if the URL is correct -->
			{#if checkIfShared()[1] != undefined && (isNaN(Number(checkIfShared()[1])) || Number(checkIfShared()[1]) == randomPoemNum.poemCount || Number(checkIfShared()[1]) > Number(randomPoemNum.poemCount))}
				<p class="mb-4">
					This is a corrupt URL. Automatically showing <a
						class="underline transition-all hover:font-bold"
						href="/quirks/poem-of-the-day"
						target="_self">Poem of the day.</a
					>
				</p>
			{/if}

			<!-- If it's a valid number, check if it's a shared link -->
			{#if checkIfShared()[1] != undefined && !isNaN(Number(checkIfShared()[1])) && Number(checkIfShared()[1]) != randomPoemNum.poemCount && !(Number(checkIfShared()[1]) > Number(randomPoemNum.poemCount))}
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

				<!-- Else, load the default poem of the day page -->
			{:else}
				<div class="mb-1 flex flex-col md:flex-row md:items-center md:space-x-4">
					{#if poems[randomPoemNum.randomNum].title == ''}
						<!-- If the title is empty, no element to put mr-4 and shift POTD text -->
					{:else}
						<h4 class="h4 underline decoration-2 transition-all hover:font-black">
							{poems[randomPoemNum.randomNum].title}
						</h4>
						<!-- Create svg circle to make it available in fill-token -->
						<svg
							class="fill-token hidden md:block"
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
						randomPoemNum.randomNum
					].poem}</pre>
				<p style="line-height:normal">
					<small>From <i>{poems[randomPoemNum.randomNum].source}</i></small>
				</p>
				<div class="mt-6 flex flex-row space-x-6">
					<button
						class="flex flex-row items-center underline transition-all hover:scale-[1.05] active:scale-[0.75]"
						use:clipboard={sharePoem(randomPoemNum.randomNum)}
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
							poems[randomPoemNum.randomNum].title,
							poems[randomPoemNum.randomNum].poem
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
					<button
						class="flex flex-row items-center underline transition-all hover:scale-[1.15] active:scale-[0.75]"
						on:click={(e) =>
							downloadPoemOfDay(
								'https://raw.githubusercontent.com/ondersumer07/pyImageCrGH/master/todaysPoem.jpg',
								'todaysPoem' + poems[randomPoemNum.randomNum].title.replaceAll(' ', '')
							)}
						><svg
							class="fill-token mt-0.5 h-4 w-4"
							id="Layer_5"
							data-name="Layer 5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1500 1500"
							><path
								d="M1366.21,1097.73h-94.59a25,25,0,0,0-25,25v104.91a15,15,0,0,1-15,15H268.38a15,15,0,0,1-15-15V1122.73a25,25,0,0,0-25-25H133.79a25,25,0,0,0-25,25v239.82a25,25,0,0,0,25,25H253.38v-.33h993.24v.33h119.59a25,25,0,0,0,25-25V1122.73A25,25,0,0,0,1366.21,1097.73Z"
							/><path
								d="M732.36,1105a25,25,0,0,0,35.27,0c75.62-75.26,244.18-244.6,321.74-321.94a25,25,0,0,0,0-35.37l-60.82-60.82a33.85,33.85,0,0,0-47.87,0L822.46,845.13V137.45a25,25,0,0,0-25-25H702.54a25,25,0,0,0-25,25V845.16L513,680.63a25,25,0,0,0-35.35,0l-67.05,67a25,25,0,0,0,0,35.39C488.91,861,656.32,1029.19,732.36,1105Z"
							/></svg
						></button
					>
				</div>
			{/if}
		{/if}
	{/await}
</div>
