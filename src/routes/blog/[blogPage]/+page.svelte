<script>
	import { page } from '$app/stores';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js/lib/core';

	// Import each language module you require
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import shell from 'highlight.js/lib/languages/shell';

	// Register each imported language module
	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);

	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);

	export let data;

	// 0 = English, 1 = Turkish
	let lang = 0;
	function langSwitch() {
		switch (lang) {
			case 0:
				lang = 1;
				break;
			case 1:
				lang = 0;
				break;
		}
		return lang;
	}
</script>

{#await data.streamed?.blogPage}
	<div class="flex animate-pulse flex-col items-center justify-center">
		<div class="placeholder mb-5 w-1/4" />
		<div class="placeholder mb-4 w-full md:w-3/4" />
		<div class="placeholder mb-4 w-full md:w-3/4" />
		<div class="placeholder mb-4 w-full md:w-3/4" />
		<div class="placeholder mb-4 w-full md:w-3/4" />
		<div class="placeholder mb-4 w-full md:w-3/4" />
		<div class="placeholder w-full md:w-3/4" />
	</div>
{:then blogPage}
	{#each blogPage as blogPage}
		{#if blogPage.url === $page.url.pathname}
			<div class="flex max-w-full items-center justify-center">
				<div class="flex max-w-7xl flex-col items-center justify-center">
					<div class="flex w-full items-center justify-center">
						<div class="card mb-5 p-4 text-justify md:w-3/4">
							<p class="text-md">
								This is a translated version of the original text in Turkish. <button
									class="underline transition-all hover:font-bold"
									on:click={langSwitch}
									><p>{lang == 0 ? 'See original.' : 'See English.'}</p></button
								>
							</p>
						</div>
					</div>
					<h2 class="h2 pb-8 text-center underline decoration-2 transition-all hover:font-black">
						{lang == 0 ? blogPage.titleENG : blogPage.titleTR}
					</h2>
					<div class="mb-5 text-justify text-lg md:w-3/4">
						{@html lang == 0 ? blogPage.textENG1 : blogPage.textTR1}
						<CodeBlock language={blogPage.codeLang} code={blogPage.code}></CodeBlock>
						{@html lang == 0 ? blogPage.textENG2 : blogPage.textTR2}
					</div>
				</div>
			</div>
		{/if}
	{/each}
{/await}
