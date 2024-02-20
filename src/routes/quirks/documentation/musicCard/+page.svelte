<script>
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js/lib/core';

	// Import each language module you require
	import javascript from 'highlight.js/lib/languages/javascript';
	import bash from 'highlight.js/lib/languages/bash';
	import hljs_svelte from 'highlightjs-svelte';

	// Register each imported language module
	hljs.registerLanguage('javascript', javascript);
	// @ts-ignore
	hljs.registerLanguage('bash', bash);
	hljs_svelte(hljs);

	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);
</script>

<div class="flex max-w-full items-center justify-center">
	<div class="flex max-w-7xl flex-col items-center justify-center">
		<div class="flex w-full justify-center">
			<h2 class="h2 inline pb-4 text-center underline decoration-2 transition-all hover:font-black">
				musicCard
			</h2>
		</div>

		<div class="flex w-full flex-col space-y-4 text-justify">
			<p>
				Welcome to the docs of musicCard. This component showcases your music to others in your
				website. You can <a
					class="underline transition-all hover:font-bold"
					href="https://github.com/ondersumer07/musicCard"
					target="_blank">visit its Github</a
				> to clone it.
			</p>
			<div class="card flex flex-row items-center space-x-4 p-4">
				<span class="h1 text-primary-500">!</span>
				<p>
					musicCard utilizes <a
						class="underline transition-all hover:font-bold"
						href="https://www.last.fm/api"
						target="_blank">last.fm API</a
					>, so you will need an API key from them. It's free, so don't worry!
				</p>
			</div>
			<div>
				<h4 class="h4 underline decoration-2 md:h3">About the project</h4>
				<p>
					This is a simple component that shows your last music data, it can fetch the data from
					various platforms thanks to last.fm. You can connect all your music apps, and it will
					showcase your latest activity. It has two states: "Now Playing" and "Last Played." Here's
					how they look:
				</p>
			</div>

			<div class="flex w-full justify-center">
				<div class="grid w-full grid-cols-2 items-center md:w-3/4">
					<img src="/documentation/musicCard/nowPlayingDemo.gif" alt="Now Playing Demo" />
					<img src="/documentation/musicCard/lastPlayedDemo.gif" alt="Last Played Demo" />
				</div>
			</div>

			<p>
				Besides the showcase, you can also click on the card to visit the song's last.fm page.
				Here's the demo:
			</p>
			<div class="flex w-full justify-center">
				<div class="grid w-full grid-cols-1 items-center md:w-3/4">
					<img src="/documentation/musicCard/linkClickDemo.gif" alt="Link Click Demo" />
				</div>
			</div>

			<div>
				<h4 class="h4 underline decoration-2 md:h3">Installation</h4>
				<p>To clone musicCard, you can simply go ahead and do:</p>
			</div>
			<CodeBlock
				language="Bash"
				buttonCopied={'Copied🎉'}
				code="
        # Install npm and clone the repository. Then, install the packages.
npm install -g npm
git clone https://github.com/ondersumer07/musicCard.git
cd musicCard
npm install"
			></CodeBlock>
			<p>
				Now you will have a Skeleton project that works with SvelteKit and also includes Tailwind
				CSS.Thanks to them, developing your website is way easier and faster. However, if you don't
				want to install them, you can take this work as an example to create your own component.
			</p>
			<p>
				To get the project working, create a <code>.env</code> file in your root directory. Inside it
				should look like this:
			</p>
			<CodeBlock
				language="Bash"
				buttonCopied={'Copied🎉'}
				code="
        #PRIVATE
LAST_FM_API_KEY=YOUR_API_KEY_HERE"
			></CodeBlock>
			<div>
				<h4 class="h4 underline decoration-2 md:h3">Customisation</h4>
				<p>
					Now that you've set up the project correctly, you need to set up your account and adjust
					your username. Otherwise it won't work properly.
				</p>
			</div>
			<div>
				<h5 class="h5">Default variables</h5>
				<p>
					If you'd like, you can change the example variables I've put in. I don't think it's
					necessary though.
				</p>
			</div>

			<CodeBlock
				language="Javascript"
				buttonCopied={'Copied🎉'}
				code={`
		// /src/lib/musicCard/musicCard.svelte

// Set default variables
export let status = 'Now Playing';
export let song = 'Example Song #1';
export let artist = 'Artist';
export let songLink = 'https://spotify.com';

// Create and decide on background URL
export let backgroundUrl = "bg-[url('/weatherBg/sunny-animated.svg')]";
`}
			></CodeBlock>
			<p>
				You can customize these as you like. I use a weather background for my default
				backgroundUrl, but you can adjust it to your liking.
			</p>
			<div>
				<h5 class="h5">Adding your username</h5>
				<p>
					After that, you should adjust your Javascript file to put in your last.fm username.
					Otherwise it'll fetch "example" user's data.
				</p>
			</div>

			<CodeBlock
				language="Javascript"
				buttonCopied={'Copied🎉'}
				code={`
		// /src/routes/+page.server.js

// Import lastfm API key
import { LAST_FM_API_KEY } from '$env/static/private';
// Change username here
let usernameLastfm = 'example';
`}
			></CodeBlock>

			<div>
				<h5 class="h5">Changing icons (optional)</h5>
				<p>
					The component allows you to adjust the icons of "Now Playing" or "Last Played." Here's
					how:
				</p>
			</div>
			<CodeBlock
				language="Svelte"
				buttonCopied={'Copied🎉'}
				code={`
		// /src/lib/musicCard/musicCard.svelte

{#if status == 'Last Played'}
	<!--Last Played icon-->
	<svg
		class="mr-1 h-4 w-4"
		fill="#FBE7D1"
		id="last_played_copy"
		data-name="last played copy"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1500 1500"
		><path
			d="M750,109.79c-353.85,0-640.71,286.86-640.71,640.71S396.15,1391.21,750,1391.21s640.71-286.86,640.71-640.71S1103.85,109.79,750,109.79ZM325.72,663.65a25.36,25.36,0,0,1-28.56,20l-48.79-7.21a25.38,25.38,0,0,1-21.19-30A532.63,532.63,0,0,1,801.43,219.9a25.39,25.39,0,0,1,22.65,29l-7.21,48.79a25.34,25.34,0,0,1-27.38,21.56C570.32,299,369.72,448,325.72,663.65ZM535.85,750.5c0-118.27,95.88-214.15,214.15-214.15S964.15,632.23,964.15,750.5,868.27,964.65,750,964.65,535.85,868.77,535.85,750.5Zm669.73,277a533,533,0,0,1-454.79,256.13q-26.09,0-52.29-2.57a25.38,25.38,0,0,1-22.58-29l7.21-48.78a25.37,25.37,0,0,1,27.43-21.56c106.37,9.86,211.23-19.43,297.65-83.61S1153,942.08,1174.28,837.41a25.37,25.37,0,0,1,28.57-20l48.78,7.21a25.39,25.39,0,0,1,21.19,30A528.66,528.66,0,0,1,1205.58,1027.54Z"
		/><circle cx="750" cy="750.5" r="70.57" /></svg
	>
`}
			></CodeBlock>

			<p>
				You can adjust the "Last Played" icon by replacing the SVG code. Remember to put in <code
					>fill="#FBE7D1"</code
				> to your icon, so it will show up in the right color.
			</p>

			<CodeBlock
				language="Javascript"
				buttonCopied={'Copied🎉'}
				code={`
	// /src/lib/musicCard/musicCard.svelte

let nowPlayingIconBG = "bg-[url('/icons/nowPlayingCSS.svg')]";
`}
			></CodeBlock>

			<p>
				You can adjust the "Now Playing" icon by replacing this variable in the <code>script</code> part
				of musicCard. If you're going to use animated SVG files, be careful to use CSS animations for
				embedded SVGs and JS animations for open SVGs.
			</p>

			<div>
				<h4 class="h4 underline decoration-2 md:h3">Final Notes</h4>
				<p>
					Even though simple, I like the idea of showing people a hint of my music taste. If you
					also do, you can easily install musicCard to share! Another thing, huge shout-out to <a
						class="underline transition-all hover:font-bold"
						href="https://github.com/burraksumer"
						target="_blank">Burak Sümer</a
					> as I discovered last.fm API thanks to him. You can use and change musicCard however you like,
					and I hope you'll have as much fun as I did! If you have any questions regarding this, don't
					hesitate to contact me via email. Finally, don't forget to watch out for what you're listening,
					people are looking!
				</p>
			</div>
		</div>
	</div>
</div>
