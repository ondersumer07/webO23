<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// Can't use popups for mobile, going to use accordions
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	//Popup install
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { popup, storePopup, type PopupSettings } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const popupClick: PopupSettings = {
		placement: 'bottom',
		event: 'click',
		target: 'popupClick'
	};

	// drawerStore set
	const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul class="md:flex md:flex-row">
		<!-- Hidden button to escape focustrap -->
		<li class="hidden"><button /></li>
		<li class="m-1 md:hidden">
			<button on:click={drawerClose}>
				<svg
					class="fill-token h-6 w-6"
					id="close"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1500 1500"
					><path
						d="M1223,317.76,1182.24,277a25.39,25.39,0,0,0-35.9,0L749.06,674.28,352.87,278.09a25.39,25.39,0,0,0-35.9,0L276.2,318.86a25.38,25.38,0,0,0,0,35.89L672.39,750.94,277,1146.34a25.39,25.39,0,0,0,0,35.9L317.76,1223a25.39,25.39,0,0,0,35.9,0l395.4-395.4,396.5,396.5a25.38,25.38,0,0,0,35.89,0l40.77-40.77a25.39,25.39,0,0,0,0-35.9l-396.5-396.5L1223,353.66A25.39,25.39,0,0,0,1223,317.76Z"
					/></svg
				>
			</button>
		</li>
		<li class="m-1 md:hidden">
			<a
				class={$page.url.pathname == '/' ? 'font-bold underline decoration-2' : ''}
				on:click={drawerClose}
				href="/"
				rel="noreferrer">Home</a
			>
		</li>
		<li class="m-1">
			<a
				class={$page.url.pathname.includes('/about') ? 'font-bold underline decoration-2' : ''}
				on:click={drawerClose}
				href="/about"
				rel="noreferrer">About</a
			>
		</li>
		<li class="m-1">
			<a
				href="/cv-education"
				on:click={drawerClose}
				class={$page.url.pathname.includes('/cv-education')
					? 'font-bold underline decoration-2'
					: ''}>CV/Education</a
			>
		</li>
		<li class="m-1">
			<a
				href="/portfolio"
				on:click={drawerClose}
				class={$page.url.pathname.includes('/portfolio') ? 'font-bold underline decoration-2' : ''}
				>Portfolio</a
			>
		</li>
		<li class="m-1">
			<a
				href="/blog"
				on:click={drawerClose}
				class={$page.url.pathname.includes('/blog') ? 'font-bold underline decoration-2' : ''}
				>Blog</a
			>
		</li>
		<li class="m-1 hidden md:block">
			<button
				aria-label="Quirks button for desktop"
				class="transition active:scale-[0.95] {$page.url.pathname.includes('/quirks')
					? 'font-bold underline decoration-2'
					: ''}"
				use:popup={popupClick}
				>Quirks<svg class="fill-token -mr-1 h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clip-rule="evenodd"
					/>
				</svg></button
			>
			<div class="card p-2" data-popup="popupClick">
				<a
					href="/quirks/poem-of-the-day"
					on:click={drawerClose}
					class={$page.url.pathname.includes('/poem-of-the-day')
						? 'font-bold underline decoration-2'
						: ''}>Poem of the day</a
				>
			</div>
		</li>
		<li class="m-1 md:hidden">
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="summary"
						><p
							class="transition active:scale-[0.95] {$page.url.pathname.includes('/quirks')
								? 'font-bold underline decoration-2'
								: ''}"
						>
							Quirks
						</p></svelte:fragment
					>
					<svelte:fragment slot="content"
						><a
							href="/quirks/poem-of-the-day"
							on:click={drawerClose}
							class={$page.url.pathname.includes('/poem-of-the-day')
								? 'font-bold underline decoration-2'
								: ''}>Poem of the day</a
						></svelte:fragment
					>
				</AccordionItem>
			</Accordion>
		</li>
	</ul>
</nav>
