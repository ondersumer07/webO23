<script>
	import { page } from '$app/stores';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js/lib/core';

	// Import each language module you require
	import javascript from 'highlight.js/lib/languages/javascript';
	import python from 'highlight.js/lib/languages/python';

	// Register each imported language module
	hljs.registerLanguage('javascript', javascript);
	// @ts-ignore
	hljs.registerLanguage('python', python);

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
			<div class="m-auto xl:w-3/4">
				{#if blogPage.translated === 1}
					<div class="flex w-full items-center justify-center">
						<div class="card mb-5 w-full p-4 text-justify">
							<p class="text-md">
								This is a translated version of the original text in Turkish. <button
									class="underline transition-all hover:font-bold"
									on:click={langSwitch}
									><p>{lang == 0 ? 'See original.' : 'See English.'}</p></button
								>
							</p>
						</div>
					</div>
				{/if}
				<h2 class="h2 pb-8 text-center underline decoration-2 transition-all hover:font-black">
					{lang == 0 ? blogPage.titleENG : blogPage.titleTR}
				</h2>
				<div class="mb-5 text-justify text-lg">
					{@html lang == 0 ? blogPage.textENG1 : blogPage.textTR1}
					{#if blogPage.codeLang1}
						<CodeBlock buttonCopied={'Copied🎉'} language={blogPage.codeLang1} code={blogPage.code1}
						></CodeBlock>
					{/if}
					{#if blogPage.textENG2}
						{@html lang == 0 ? blogPage.textENG2 : blogPage.textTR2}
					{/if}
					{#if blogPage.codeLang2}
						<CodeBlock buttonCopied={'Copied🎉'} language={blogPage.codeLang2} code={blogPage.code2}
						></CodeBlock>
					{/if}
					{#if blogPage.textENG3}
						{@html lang == 0 ? blogPage.textENG3 : blogPage.textTR3}
					{/if}
				</div>
			</div>
		{/if}
	{/each}
{/await}
