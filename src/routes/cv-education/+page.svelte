<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import ExperienceAccordion from '$lib/experienceAccordion/experienceAccordion.svelte';
	export let data;
</script>

<!-- Page Title -->
<svelte:head>
	<title>CV/Education | Önder Sümer</title>
</svelte:head>

<div class="card m-auto mb-5 p-4 text-justify xl:w-3/4">
	<p class="text-md">
		This page is a visual version of my resume. <a
			class="underline transition-all hover:font-bold"
			href="/onderSumerCV.pdf"
			target="_blank"
			download>Download PDF</a
		>
		or visit
		<a
			class="underline transition-all hover:font-bold"
			href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/%C3%B6nder-s%C3%BCmer/fc57b4fe-a0bd-4bcf-90ba-60d6df5654ea?view=html"
			target="_blank">Europass CV</a
		> if you'd like.
	</p>
</div>

<div class="m-auto xl:w-3/4">
	<Accordion class="rounded-lg border border-surface-500">
		<AccordionItem open>
			<svelte:fragment slot="summary"
				><h1 class="h2 py-5">Volunteer Experiences</h1></svelte:fragment
			>
			<svelte:fragment slot="content">
				{#await data.streamed?.volunteerExp}
					<div
						class="grid animate-pulse grid-cols-1 grid-rows-3 gap-4 py-5 md:grid-cols-3 md:grid-rows-1"
					>
						<div>
							<div class="placeholder col-span-1 col-start-1 mb-2 w-1/2 rounded-lg" />
							<div class="placeholder col-span-1 col-start-1 w-1/4 rounded-lg" />
						</div>
						<div class="placeholder col-span-1 col-start-2 w-1/2 rounded-lg" />
						<div>
							<div class="placeholder col-span-1 col-start-3 mb-2 rounded-lg" />
							<div class="placeholder col-span-1 col-start-3 rounded-lg" />
						</div>
					</div>
				{:then volunteerExp}
					{#each volunteerExp as volunteerExp}
						<ExperienceAccordion
							company={volunteerExp.company}
							date_of_work={volunteerExp.date_of_work}
							role={volunteerExp.role}
							description={volunteerExp.description}
							link={volunteerExp.link}
						/>
					{/each}
				{/await}
			</svelte:fragment>
		</AccordionItem>

		<AccordionItem>
			<svelte:fragment slot="summary"><h1 class="h2 py-5">Work Experiences</h1></svelte:fragment>
			<svelte:fragment slot="content">
				{#await data.streamed?.workExp}
					<div class="grid animate-pulse grid-cols-3 gap-4 py-5">
						<div>
							<div class="placeholder col-span-1 col-start-1 mb-2 w-1/2" />
							<div class="placeholder col-span-1 col-start-1 w-1/4" />
						</div>
						<div class="placeholder col-span-1 col-start-2 w-1/2" />
						<div class="gap-4">
							<div class="placeholder col-span-1 col-start-3 mb-2" />
							<div class="placeholder col-span-1 col-start-3" />
						</div>
					</div>
				{:then workExp}
					{#each workExp as workExp}
						<ExperienceAccordion
							company={workExp.company}
							date_of_work={workExp.date_of_work}
							role={workExp.role}
							description={workExp.description}
							link={workExp.link}
						/>
					{/each}
				{/await}
			</svelte:fragment>
		</AccordionItem>

		<AccordionItem>
			<svelte:fragment slot="summary"><h1 class="h2 py-5">Education</h1></svelte:fragment>
			<svelte:fragment slot="content">
				{#await data.streamed?.education}
					<div class="grid animate-pulse grid-cols-3 gap-4 py-5">
						<div>
							<div class="placeholder col-span-1 col-start-1 mb-2 w-1/2" />
							<div class="placeholder col-span-1 col-start-1 w-1/4" />
						</div>
						<div class="placeholder col-span-1 col-start-2 w-1/2" />
						<div class="gap-4">
							<div class="placeholder col-span-1 col-start-3 mb-2" />
							<div class="placeholder col-span-1 col-start-3" />
						</div>
					</div>
				{:then education}
					{#each education as education}
						<ExperienceAccordion
							company={education.company}
							date_of_work={education.date_of_work}
							role={education.role}
							description={education.description}
							link={education.link}
						/>
					{/each}
				{/await}
			</svelte:fragment>
		</AccordionItem>

		<AccordionItem>
			<svelte:fragment slot="summary"><h1 class="h2 py-5">Activities</h1></svelte:fragment>
			<svelte:fragment slot="content">
				{#await data.streamed?.activity}
					<div class="grid animate-pulse grid-cols-3 gap-4 py-5">
						<div>
							<div class="placeholder col-span-1 col-start-1 mb-2 w-1/2" />
							<div class="placeholder col-span-1 col-start-1 w-1/4" />
						</div>
						<div class="placeholder col-span-1 col-start-2 w-1/2" />
						<div class="gap-4">
							<div class="placeholder col-span-1 col-start-3 mb-2" />
							<div class="placeholder col-span-1 col-start-3" />
						</div>
					</div>
				{:then activity}
					{#each activity as activity}
						<ExperienceAccordion
							company={activity.company}
							date_of_work={activity.date_of_work}
							role={activity.role}
							description={activity.description}
							link={activity.link}
						/>
					{/each}
				{/await}
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
