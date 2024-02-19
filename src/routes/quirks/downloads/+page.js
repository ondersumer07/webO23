export const load = async () => {
	try {
		const fetchDownloads = async () => {
			const downloadsRes = await fetch(
				`https://personal-website.pockethost.io/api/collections/downloads/records?sort=position`
			);

			if (!downloadsRes.ok) {
				throw new Error(`Failed to fetch downloads data. Status: ${downloadsRes.status}`);
			}

			const downloadsData = await downloadsRes.json();
			return downloadsData.items;
		};

		return {
			streamed: {
				downloads: fetchDownloads()
			}
		};
	} catch (error) {
		// Handle the error here
		return {
			redirect: '/error'
		};
	}
};
