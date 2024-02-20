<script>
	import CardWimage from '$lib/cardWimage/cardWimage.svelte';
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
	<div class="flex flex-col justify-center space-y-4">
		<div>
			<h3 class="h3">Documentation</h3>
			<p>
				Welcome to the documentation page! It's going to be the docs for components and other code I
				publish here. You can select and see the details of your desired component.
			</p>
		</div>
		<div class="flex flex-row">
			<a
				class="flex flex-row items-center underline transition-all hover:font-bold"
				href="https://github.com/ondersumer07"
				target="_blank"
				>Visit my Github
				<svg
					class="fill-token ml-1 h-4 w-4"
					id="Layer_6"
					data-name="Layer 6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1500 1500"
					><path
						d="M1241,291.77a32.83,32.83,0,0,0-32.77-32.8c-140.23-.33-454.31.39-598.27.18A32.86,32.86,0,0,0,577.1,292V405.07a44.49,44.49,0,0,0,44.49,44.49H915.76L258,1107.33a32.88,32.88,0,0,0,0,46.48L346.21,1242a32.86,32.86,0,0,0,46.48,0l657.79-657.79V890.08a32.86,32.86,0,0,0,32.86,32.86H1208A32.85,32.85,0,0,0,1240.85,890C1240.49,744.89,1241.26,432.9,1241,291.77Z"
					/></svg
				></a
			>
		</div>
	</div>
	<CardWimage
		image={'/documentation/weatherCard/rainDemo.gif'}
		title={'weatherCard'}
		description={"A SvelteKit component to display weather data in your city. Using Open Weather API as well as Google's Maps Static API to fully function."}
		date={'Feb 2024'}
		hrefLink={'/quirks/documentation/weatherCard'}
	/>
</div>
