export const load = async () => {
	try {
		const fetchPortfolioCard = async () => {
			const portfolioRes = await fetch(
				`https://personal-website.pockethost.io/api/collections/portfolio/records?sort=position`
			);

			if (!portfolioRes.ok) {
				throw new Error(`Failed to fetch collections data. Status: ${portfolioRes.status}`);
			}

			const portfolioData = await portfolioRes.json();
			return portfolioData.items;
		};

		return {
			streamed: {
				portfolio: fetchPortfolioCard()
			}
		};
	} catch (error) {
		// Handle the error here
		return {
			redirect: '/error'
		};
	}
};
