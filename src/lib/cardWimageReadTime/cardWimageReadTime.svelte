<script>
	export let image = '';
	export let description = 'Description';
	export let date = 'Date';
	export let title = 'Title';
	export let hrefLink = '/blog';

	// function to truncate blog post to description
	// @ts-ignore
	function truncateString(yourString, maxLength) {
		// get the index of space after maxLength
		const index = yourString.indexOf(' ', maxLength);
		return index === -1 ? yourString : yourString.substring(0, index);
	}

	let blogDesc = truncateString(description, 275) + '...';

	// @ts-ignore
	function numOfWords(yourString) {
		var numWords = yourString.trim().split(' ').length;
		return numWords;
	}

	let wpm = 240;
	let timeToRead = Math.ceil(numOfWords(description) / wpm);
</script>

<a href={hrefLink} class="card card-hover max-h-screen rounded-lg p-0">
	<header class="card-header p-0">
		<img class="rounded-t-lg pt-0" src={image} alt={image.length > 0 ? 'Card' : ''} />
	</header>
	<div class="p-4">
		<h3 class="h4 md:h3">{title}</h3>
		<p class="text-md mt-1">
			{blogDesc}
		</p>
	</div>
	<footer class="card-footer">
		<div class="flex flex-row items-center space-x-4">
			<p class="opacity-60">{timeToRead} min read</p>
			<svg class="fill-token opacity-60" height="5" width="5" xmlns="http://www.w3.org/2000/svg">
				<circle cx="2" cy="2" r="2" />
			</svg>
			<p class="opacity-60">{date}</p>
		</div>
	</footer>
</a>
