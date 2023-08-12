<script>
	// Set default variables
	export let currentCity = 'Ankara';
	export let weatherState = 'Sunny';
	export let degreesCelcius = 21;

	// Get current time on load, might add refresh feature
	function momentTime() {
		let currentDate = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/' + currentCity });
		let currentDayofYear = currentDate.split(' ')[0];
		let currentTime = currentDate.split(' ')[1].slice(0, 5);
		return [currentTime, currentDayofYear];
	}
</script>

<!-- min-w to visualize properly -->
<div class="card w-screen rounded-lg md:w-auto md:min-w-[350px]">
	<header class="card-header p-0">
		<div class="rounded-lg bg-[url('/weatherBg/rainy.svg')] bg-cover bg-no-repeat px-6 py-4">
			<div class="flex h-full flex-row justify-between">
				<div class="items-between mr-4 flex grow flex-col justify-between md:mr-8">
					<h3 class="h4 text-primary-100 md:h3">{weatherState}</h3>
					<h1 class="h1 text-4xl text-primary-100 md:text-6xl">{degreesCelcius}°</h1>
				</div>
				<div class="items-between flex flex-col justify-between text-right">
					<div>
						<p class="text-sm font-bold text-primary-100 md:text-lg">{momentTime()[0]}</p>
						<p class="text-sm text-primary-100 md:text-lg">{momentTime()[1]}</p>
					</div>
					<p class="text-sm text-primary-100 md:text-lg">{currentCity}</p>
				</div>
			</div>
		</div>
	</header>
</div>
