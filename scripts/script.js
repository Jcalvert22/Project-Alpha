
// Display projects from array
function displayProjects(projects) {
	if (Array.isArray(projects)) {
		console.log(`Loaded ${projects.length} projects.`);
	} else {
		console.error("Projects data is not an array:", projects);
	}
}

// Display achievements from array
function displayAchievements(achievements) {
	if (Array.isArray(achievements)) {
		console.log(`Loaded ${achievements.length} achievements.`);
	} else {
		console.error("Achievements data is not an array:", achievements);
	}
}