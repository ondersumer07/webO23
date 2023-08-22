export const load = async () => {
	try {
		const fetchBlogCard = async () => {
			const blogCardRes = await fetch(
				`https://personal-website.pockethost.io/api/collections/blogCards/records?sort=position`
			);

			if (!blogCardRes.ok) {
				throw new Error('Failed to fetch collections data. Status: ${blogCardRes.status}');
			}

			const blogCardData = await blogCardRes.json();
			return blogCardData.items;
		};

		return {
			streamed: {
				blogCard: fetchBlogCard()
			}
		};
	} catch (error) {
		// Handle the error here
		return {
			redirect: '/error'
		};
	}
};
