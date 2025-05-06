<script>
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	// General Imports from Skeleton
	import { AppShell, AppBar, Drawer, clipboard, Toast } from '@skeletonlabs/skeleton';

	import Navigation from '$lib/navigation/Navigation.svelte';
	// Imports for dark/light mode switch
	import {
		modeCurrent,
		setModeCurrent,
		modeUserPrefers,
		setModeUserPrefers
	} from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	// popup installation
	import {
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow,
		inline
	} from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// Skeleton V2.x toast and drawers store update requirement
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	const toastStore = getToastStore();

	// Progress bar for navigations
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css'; // you can override this with your own styles

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
	});


	// Email Constant
	const email = 'me@ondersumer.com';

	// Current Year
	let year = new Date().getFullYear();

	// Toast
	const CopiedMes = {
		message: 'Email copied to clipboard',
		background: 'variant-filled-surface',
		timeout: 1500
	};

	// Toast Function
	function toastPop() {
		toastStore.trigger(CopiedMes);
	}

	// Load Function
	onMount(async () => {
		// darkModeSwitch when loaded so it remembers theme choice
		if ($modeUserPrefers) {
			setModeCurrent(true);
		} else {
			setModeCurrent(false);
		}
	});

	// Dark/Light Mode Switch
	function darkModeSwitch() {
		if ($modeCurrent) {
			setModeCurrent(false);
			setModeUserPrefers(false);
		} else {
			setModeCurrent(true);
			setModeUserPrefers(true);
		}
	}

	// Drawer Open Function
	function drawerOpen() {
		drawerStore.open(drawerSettings);
	}

	// Drawer Size Adjustment
	const drawerSettings = {
		width: 'w-[280px] md:w-[480px]'
	};
</script>

<Toast />

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 md:w-64">
	<!-- Drawer for Hamburger Menu -->
	<Drawer>
		<Navigation />
	</Drawer>

	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div
					class="flex w-screen grow items-center justify-between pr-8 md:pl-16 md:pr-24 lg:pl-32 lg:pr-40"
				>
					<!-- Hamburger Menu -->
					<button
						aria-label="Hamburger Menu Button"
						class="btn btn-sm md:hidden"
						on:click={drawerOpen}
					>
						<span>
							<svg viewBox="0 0 100 100" class="fill-token h-4 w-4">
								<rect width="100" height="13" rx="4" />
								<rect y="40" width="100" height="13" rx="4" />
								<rect y="80" width="100" height="13" rx="4" />
							</svg>
						</span>
					</button>

					<!-- Name -->
					<a href="/"><strong class="text-xl">Önder Sümer</strong></a>

					<!-- Nav Desktop and Lightswitch -->
					<div class="flex flex-row items-center justify-between">
						<!-- Navigation Desktop -->
						<div class="hidden md:contents">
							<Navigation />
						</div>

						<!-- Lightswitch Button -->
						{#if $modeCurrent}
							<!-- Sun Button -->
							<button
								aria-label="Lightswitch Sun Button"
								class="btn btn-sm"
								on:click={darkModeSwitch}
							>
								<svg
									class="fill-token h-6 w-6 transition hover:scale-[1.15] active:scale-[0.25]"
									id="sun"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1500 1500"
									><circle cx="750" cy="750" r="350.46" /><path
										d="M1119.94,457.84l83.46-83.46a55,55,0,1,0-77.78-77.78l-83.46,83.46a55,55,0,0,0,77.78,77.78Z"
									/><path d="M1336.21,695h-118a55,55,0,0,0,0,110h118a55,55,0,0,0,0-110Z" /><path
										d="M1119.94,1042.16a55,55,0,0,0-77.78,77.78l83.46,83.46a55,55,0,0,0,77.78-77.78Z"
									/><path
										d="M750,1163.17a55,55,0,0,0-55,55v118a55,55,0,0,0,110,0v-118A55,55,0,0,0,750,1163.17Z"
									/><path
										d="M380.06,1042.16l-83.46,83.46a55,55,0,0,0,77.78,77.78l83.46-83.46a55,55,0,0,0-77.78-77.78Z"
									/><path
										d="M336.83,750a55,55,0,0,0-55-55h-118a55,55,0,1,0,0,110h118A55,55,0,0,0,336.83,750Z"
									/><path
										d="M380.06,457.84a55,55,0,0,0,77.78-77.78L374.38,296.6a55,55,0,0,0-77.78,77.78Z"
									/><path
										d="M750,336.83a55,55,0,0,0,55-55v-118a55,55,0,0,0-110,0v118A55,55,0,0,0,750,336.83Z"
									/></svg
								>
							</button>
						{:else}
							<!-- Moon Button -->
							<button
								aria-label="Lightswitch Moon Button"
								class="btn btn-sm"
								on:click={darkModeSwitch}
							>
								<svg
									class="fill-token h-6 w-6 transition hover:scale-[1.15] active:scale-[0.25]"
									id="moon"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1500 1500"
									><path
										d="M1187.41,1118.81c25.84-7.73,46.15,22.7,29,43.56-114.52,139.7-288.44,228.84-483.18,228.84-344.9,0-624.49-279.59-624.49-624.49,0-219.32,113.07-412.24,284.1-523.64,22.62-14.74,50.76,8.71,40.21,33.56a622.49,622.49,0,0,0-49.37,243.78c0,345.5,282.21,626.22,627.71,624.47A624.42,624.42,0,0,0,1187.41,1118.81Z"
									/><path
										d="M1100.94,284.65c-68.36,25.19-98.66,55.5-123.86,123.85-6.34,17.2-30.56,17.2-36.9,0-25.2-68.35-55.51-98.66-123.86-123.85-17.2-6.34-17.2-30.57,0-36.91,68.35-25.19,98.66-55.5,123.86-123.85,6.34-17.2,30.56-17.2,36.9,0,25.2,68.35,55.5,98.66,123.86,123.85C1118.13,254.08,1118.13,278.31,1100.94,284.65Z"
									/><path
										d="M1375.41,647.33c-83.73,30.86-120.86,68-151.73,151.72-7.76,21.07-37.44,21.07-45.2,0-30.87-83.73-68-120.86-151.73-151.72-21.07-7.76-21.07-37.44,0-45.21,83.73-30.86,120.86-68,151.73-151.72,7.76-21.07,37.44-21.07,45.2,0,30.87,83.73,68,120.86,151.73,151.72C1396.47,609.89,1396.47,639.57,1375.41,647.33Z"
									/></svg
								>
							</button>
						{/if}
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<div class="p-7 md:px-20 lg:px-36">
		<slot />
	</div>

	<!-- Footer -->
	<svelte:fragment slot="pageFooter">
		<AppBar>
			<svelte:fragment slot="lead">
				<div
					class="md:items-between flex w-screen flex-col items-center justify-center py-4 pr-8 md:w-screen md:grow md:flex-row md:justify-between md:pl-16 md:pr-32 lg:pl-32 lg:pr-40"
				>
					<!-- Reach out -->
					<div class="mb-8 flex flex-col items-center md:mb-0 md:items-start">
						<a
							class="h3 mb-2 text-right underline decoration-2 transition-all md:h4 hover:scale-[1.05] active:scale-[0.75] md:mb-0"
							href="mailto:me@ondersumer.com"
							target="_blank"><span>Reach out to me!</span></a
						>
						<button
							class="text-md hover:underline md:text-sm"
							on:click={toastPop}
							use:clipboard={'me@ondersumer.com'}>copy email</button
						>
					</div>

					<hr class="mb-8 w-60 !border-t-2 md:w-0" />

					<!-- Social and Copyrgiht -->
					<div class="flex flex-col justify-center">
						<div class="flex flex-col text-center md:text-right">
							<div class="mb-4 flex flex-row items-center justify-center gap-4">
								<a
									href="https://www.linkedin.com/in/ondersumer/"
									target="_blank"
									aria-label="LinkedIn Icon"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24px"
										height="24px"
										class="fill-token h-6 w-6 transition hover:scale-[1.15] active:scale-[0.25]"
									>
										<path
											d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"
										/></svg
									></a
								>
								<a
									href="https://www.behance.net/ondersumer07"
									target="_blank"
									aria-label="Behance Icon"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24px"
										height="24px"
										class="fill-token h-6 w-6 transition hover:scale-[1.15] active:scale-[0.25]"
										><path
											d="M 5 3 C 3.898438 3 3 3.898438 3 5 L 3 19 C 3 20.101563 3.898438 21 5 21 L 19 21 C 20.101563 21 21 20.101563 21 19 L 21 5 C 21 3.898438 20.101563 3 19 3 Z M 6.40625 7.6875 L 9 7.6875 C 11.300781 7.6875 11.6875 9.101563 11.6875 10 C 11.6875 11.300781 10.792969 11.710938 10.59375 11.8125 C 10.792969 11.914063 11.8125 12.1875 11.8125 13.6875 C 11.914063 15.488281 10.789063 16.1875 9.1875 16.1875 L 6.40625 16.1875 Z M 13.40625 7.6875 L 17.09375 7.6875 L 17.09375 8.6875 L 13.40625 8.6875 Z M 8.09375 9.09375 L 8.09375 11.1875 L 9 11.1875 C 9.601563 11.1875 10 10.988281 10 10.1875 C 10 9.488281 9.699219 9.09375 9 9.09375 Z M 15.59375 9.8125 C 16.992188 9.8125 18 10.605469 18 12.90625 L 18 13.59375 L 14.59375 13.59375 C 14.59375 13.894531 14.613281 15 15.8125 15 C 16.613281 15 16.988281 14.605469 17.1875 14.40625 L 17.90625 15.40625 C 17.804688 15.507813 17.113281 16.3125 15.8125 16.3125 C 14.3125 16.3125 13.09375 15.507813 13.09375 13.40625 L 13.09375 12.90625 C 13.09375 10.605469 14.292969 9.8125 15.59375 9.8125 Z M 15.40625 11.09375 C 15.105469 11.09375 14.5 11.207031 14.5 12.40625 L 16.1875 12.40625 C 16.1875 12.40625 16.40625 11.09375 15.40625 11.09375 Z M 8.09375 12.5 L 8.09375 14.8125 L 9.1875 14.8125 C 9.789063 14.8125 10.09375 14.386719 10.09375 13.6875 C 10.195313 12.886719 9.914063 12.5 9.3125 12.5 Z"
										/></svg
									></a
								>
								<a
									href="https://www.instagram.com/ondersumer07/"
									target="_blank"
									aria-label="Instagram Icon"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24px"
										height="24px"
										class="fill-token h-6 w-6 transition hover:scale-[1.15] active:scale-[0.25]"
									>
										<path
											d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
										/></svg
									></a
								>
								<a href="https://twitter.com/ondersumer07" target="_blank" aria-label="Twitter Icon"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 30 30"
										width="30px"
										height="30px"
										class="fill-token h-6 w-6 transition hover:scale-[1.15] active:scale-[0.25]"
										><path
											d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"
										/></svg
									></a
								>
								<a href="https://github.com/ondersumer07" target="_blank" aria-label="Github Icon"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24px"
										height="24px"
										class="fill-token h-6 w-6 transition hover:scale-[1.15] active:scale-[0.25]"
										><path
											d="M 12 2 C 6.476563 2 2 6.476563 2 12 C 2 17.523438 6.476563 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476563 17.523438 2 12 2 Z M 12 4 C 16.410156 4 20 7.589844 20 12 C 20 12.46875 19.953125 12.929688 19.875 13.375 C 19.628906 13.320313 19.265625 13.253906 18.84375 13.25 C 18.53125 13.246094 18.140625 13.296875 17.8125 13.34375 C 17.925781 12.996094 18 12.613281 18 12.21875 C 18 11.257813 17.53125 10.363281 16.78125 9.625 C 16.988281 8.855469 17.191406 7.535156 16.65625 7 C 15.074219 7 14.199219 8.128906 14.15625 8.1875 C 13.667969 8.070313 13.164063 8 12.625 8 C 11.933594 8 11.273438 8.125 10.65625 8.3125 L 10.84375 8.15625 C 10.84375 8.15625 9.964844 6.9375 8.34375 6.9375 C 7.777344 7.507813 8.035156 8.953125 8.25 9.6875 C 7.484375 10.417969 7 11.28125 7 12.21875 C 7 12.546875 7.078125 12.859375 7.15625 13.15625 C 6.878906 13.125 5.878906 13.03125 5.46875 13.03125 C 5.105469 13.03125 4.542969 13.117188 4.09375 13.21875 C 4.03125 12.820313 4 12.414063 4 12 C 4 7.589844 7.589844 4 12 4 Z M 5.46875 13.28125 C 5.863281 13.28125 7.0625 13.421875 7.21875 13.4375 C 7.238281 13.492188 7.257813 13.542969 7.28125 13.59375 C 6.851563 13.554688 6.019531 13.496094 5.46875 13.5625 C 5.101563 13.605469 4.632813 13.738281 4.21875 13.84375 C 4.1875 13.71875 4.148438 13.597656 4.125 13.46875 C 4.5625 13.375 5.136719 13.28125 5.46875 13.28125 Z M 18.84375 13.5 C 19.242188 13.503906 19.605469 13.570313 19.84375 13.625 C 19.832031 13.691406 19.796875 13.746094 19.78125 13.8125 C 19.527344 13.753906 19.109375 13.667969 18.625 13.65625 C 18.390625 13.652344 18.015625 13.664063 17.6875 13.6875 C 17.703125 13.65625 17.707031 13.625 17.71875 13.59375 C 18.058594 13.546875 18.492188 13.496094 18.84375 13.5 Z M 6.09375 13.78125 C 6.65625 13.785156 7.183594 13.824219 7.40625 13.84375 C 7.929688 14.820313 8.988281 15.542969 10.625 15.84375 C 10.222656 16.066406 9.863281 16.378906 9.59375 16.75 C 9.359375 16.769531 9.113281 16.78125 8.875 16.78125 C 8.179688 16.78125 7.746094 16.160156 7.375 15.625 C 7 15.089844 6.539063 15.03125 6.28125 15 C 6.019531 14.96875 5.929688 15.117188 6.0625 15.21875 C 6.824219 15.804688 7.097656 16.5 7.40625 17.125 C 7.683594 17.6875 8.265625 18 8.90625 18 L 9.03125 18 C 9.011719 18.109375 9 18.210938 9 18.3125 L 9 19.40625 C 6.691406 18.472656 4.933594 16.5 4.28125 14.0625 C 4.691406 13.960938 5.152344 13.855469 5.5 13.8125 C 5.660156 13.792969 5.863281 13.777344 6.09375 13.78125 Z M 18.625 13.90625 C 19.074219 13.917969 19.472656 14.003906 19.71875 14.0625 C 19.167969 16.132813 17.808594 17.855469 16 18.90625 L 16 18.3125 C 16 17.460938 15.328125 16.367188 14.375 15.84375 C 15.957031 15.554688 16.988281 14.863281 17.53125 13.9375 C 17.910156 13.910156 18.355469 13.898438 18.625 13.90625 Z M 12.5 18 C 12.773438 18 13 18.226563 13 18.5 L 13 19.9375 C 12.671875 19.980469 12.339844 20 12 20 L 12 18.5 C 12 18.226563 12.226563 18 12.5 18 Z M 10.5 19 C 10.773438 19 11 19.226563 11 19.5 L 11 19.9375 C 10.664063 19.894531 10.324219 19.832031 10 19.75 L 10 19.5 C 10 19.226563 10.226563 19 10.5 19 Z M 14.5 19 C 14.742188 19 14.953125 19.175781 15 19.40625 C 14.675781 19.539063 14.34375 19.660156 14 19.75 L 14 19.5 C 14 19.226563 14.226563 19 14.5 19 Z"
										/></svg
									></a
								>
							</div>
							<a target="_blank" href="https://opensource.org/license/BSD-3-clause/"
								>Copyright {year}, <span class="hover:underline">BSD-3</span></a
							>
						</div>
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>
