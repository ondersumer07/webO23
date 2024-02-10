export const load = async () => {
	try {
		const fetchPoems = async () => {
			const poemsRes = await fetch(
				`https://personal-website.pockethost.io/api/collections/poems/records?perPage=67` // change perPage as poem number increases
			);

			if (!poemsRes.ok) {
				throw new Error(`Failed to fetch poems data. Status: ${poemsRes.status}`);
			}

			const poemsData = await poemsRes.json();
			return poemsData.items;
		};

		const fetchRandomNum = async () => {
			const randomNumRes = await fetch(`http://ondersumer07.pythonanywhere.com/randomNumAPI`);

			if (!randomNumRes.ok) {
				throw new Error(`Failed to fetch random number data. Status: ${randomNumRes.status}`);
			}

			const randomNumData = await randomNumRes.json();
			return randomNumData;
		};

		return {
			streamed: {
				poems: fetchPoems(),
				randomPoemNum: fetchRandomNum()
			}
		};
	} catch (error) {
		// Handle the error here
		return {
			redirect: '/error'
		};
	}
};
