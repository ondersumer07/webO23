// @ts-ignore implicitly has "any" type error
export const load = async ({ params }) => {
	try {
		// @ts-ignore implicitly has "any" type error
		const fetchPortfolio = async (portfolioPage) => {
			const portfolioRes = await fetch(
				`https://personal-website.pockethost.io/api/collections/portfolioPages/records?url=${portfolioPage}`
			);

			if (!portfolioRes.ok) {
				throw new Error('Failed to fetch portfolio page data. Status: ${portfolioRes.status');
			}

			const portfolioData = await portfolioRes.json();
			return portfolioData.items;
		};

		return {
			streamed: {
				portfolioPage: fetchPortfolio(params.portfolioPage)
			}
		};
	} catch (error) {
		// Handle the error here
		console.error('An error occurred: ', error);
		return {
			redirect: '/error'
		};
	}
};
