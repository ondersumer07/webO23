export const load = async () => {
	try {
		const fetchWorkExp = async () => {
			const workExpRes = await fetch(
				'https://personal-website.pockethost.io/api/collections/work_experience/records?sort=position'
			);

			if (!workExpRes.ok) {
				throw new Error(`Failed to fetch collections data. Status: ${workExpRes.status}`);
			}

			const workExpData = await workExpRes.json();
			return workExpData.items;
		};

		const fetchVolunteerExp = async () => {
			const volunteerExpRes = await fetch(
				'https://personal-website.pockethost.io/api/collections/volunteer_experience/records?sort=position'
			);

			if (!volunteerExpRes.ok) {
				throw new Error('Failed to fetch collections data. Status: ${volunteerExpRes.status}');
			}

			const volunteerExpData = await volunteerExpRes.json();
			return volunteerExpData.items;
		};

		const fetchEducation = async () => {
			const educationRes = await fetch(
				'https://personal-website.pockethost.io/api/collections/education/records?sort=position'
			);

			if (!educationRes.ok) {
				throw new Error('Failed to fetch collections data. Status: ${educationRes.status}');
			}

			const educationData = await educationRes.json();
			return educationData.items;
		};

		const fetchActivities = async () => {
			const activityRes = await fetch(
				'https://personal-website.pockethost.io/api/collections/activities/records?sort=position'
			);

			if (!activityRes.ok) {
				throw new Error('Failed to fetch collections data. Status: ${activityRes.status}');
			}

			const activityData = await activityRes.json();
			return activityData.items;
		};

		return {
			streamed: {
				workExp: fetchWorkExp(),
				volunteerExp: fetchVolunteerExp(),
				education: fetchEducation(),
				activity: fetchActivities()
			}
		};
	} catch (error) {
		// Handle the error here
		return {
			redirect: '/error'
		};
	}
};
