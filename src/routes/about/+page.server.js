// Import lastfm API key
import { LAST_FM_API_KEY } from '$env/static/private';

export const load = async () => {
	try {
		const fetchSongs = async () => {
			const songRes = await fetch(
				// Fetch from API
				`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ondersumer07&api_key=${LAST_FM_API_KEY}&format=json`
			);

			if (!songRes.ok) {
				throw new Error(`Failed to fetch song data. Status: ${songRes.status}`);
			}

			const songData = await songRes.json();
			return songData;
		};

		return {
			// No streamed for correct API response
			songs: fetchSongs()
		};
	} catch (error) {
		// Handle the error here
		console.error('An error occurred:', error);
		return {
			redirect: '/error'
		};
	}
};
