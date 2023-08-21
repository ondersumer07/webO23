<script>
	export let image = '/favicon.png';
	export let description = 'asd';
	export let date = 'asd';
	export let title = 'asd';
	export let hrefLink = '/portfolio';
</script>

<a href={hrefLink} class="card card-hover max-h-screen rounded-lg p-0">
	<header class="card-header p-0">
		<img class="rounded-t-lg pt-0" src={image} alt="demo" />
	</header>
	<div class="p-4">
		<h3 class="h3">{title}</h3>
		<p class="text-md mt-1">
			{description}
		</p>
	</div>
	<footer class="card-footer"><p>{date}</p></footer>
</a>
