<script>
	export let company = '';
	export let date_of_work = '';
	export let role = '';
	export let description = '';
	export let link = 'javascript:void(0)';
</script>

<!-- Each experience slot -->
<div class="py-5 md:grid md:grid-cols-3">
	<div class="md:hidden">
		<h3 class="h2 text-3xl">{role}</h3>
	</div>
	<div
		class="flex flex-row items-center justify-between pb-3 md:col-span-1 md:col-start-1 md:flex-col md:items-start md:justify-normal md:pb-0"
	>
		<h3 class="h4 md:h3 md:mr-5"><a target="_blank" href={link}>{company}</a></h3>
		<p class="text-sm">{date_of_work}</p>
	</div>
	<div class="hidden md:col-span-1 md:col-start-2 md:contents">
		<h3 class="h2 text-3xl">{role}</h3>
	</div>
	<div class="md:col-span-2 md:col-start-3">
		<p class="text-md">
			{description}
		</p>
	</div>
</div>

<div class="flex items-center justify-center py-5">
	<hr class="w-3/4" />
</div>
