// Assign poem count in database
let poemCount = 5;
let randomPoemNum = Math.floor(Math.random() * poemCount);

import schedule from 'node-schedule';

// create a recent poems
let poemIDs = [0];

// disabled error message because it's a cron job, it doesn't need a call.
// eslint-disable-next-line no-unused-vars
const job = schedule.scheduleJob('0 0 * * *', function () {
	randomPoemNum = Math.floor(Math.random() * poemCount);
	poemIDs.push(randomPoemNum);
	console.log('This runs at 00.00 every day ' + randomPoemNum);
	console.log(poemIDs);
});

export const load = async () => {
	try {
		const fetchPoems = async () => {
			const poemsRes = await fetch(
				`https://personal-website.pockethost.io/api/collections/poems/records`
			);

			if (!poemsRes.ok) {
				throw new Error(`Failed to fetch poems data. Status: ${poemsRes.status}`);
			}

			const poemsData = await poemsRes.json();
			return poemsData.items;
		};

		return {
			streamed: {
				poems: fetchPoems(),
				randomPoemNum,
				poemIDs,
				poemCount
			}
		};
	} catch (error) {
		// Handle the error here
		return {
			redirect: '/error'
		};
	}
};
