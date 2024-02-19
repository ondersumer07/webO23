<script>
	export let image = '';
	export let description = 'Description';
	export let date = 'Date';
	export let title = 'Title';
	export let hrefLink = '/portfolio';
</script>

<a href={hrefLink} class="card card-hover max-h-screen rounded-lg p-0">
	<header class="card-header p-0">
		<img class="rounded-t-lg pt-0" src={image} alt={image.length > 0 ? 'Card' : ''} />
	</header>
	<div class="p-4">
		<h3 class="h4 md:h3">{title}</h3>
		<p class="text-md mt-1">
			{description}
		</p>
	</div>
	<footer class="card-footer"><p class="opacity-60">{date}</p></footer>
</a>
