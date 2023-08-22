// @ts-ignore implicitly has "any" type error
export const load = async ({ params }) => {
	try {
		// @ts-ignore implicitly has "any" type error
		const fetchBlog = async (blogPage) => {
			const blogRes = await fetch(
				`https://personal-website.pockethost.io/api/collections/blogPages/records?url=${blogPage}`
			);

			if (!blogRes.ok) {
				throw new Error('Failed to fetch blog page data. Status: ${blogRes.status');
			}

			const blogData = await blogRes.json();
			return blogData.items;
		};

		return {
			streamed: {
				blogPage: fetchBlog(params.blogPage)
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
