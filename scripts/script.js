
// Display projects from array
// Button click handler
function btnClicky() {
	console.log("Button was clicked!");
}

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

// DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
	console.log("document succesfully loaded");
	const btn = document.getElementById("btnClicky");
	if (btn) {
		btn.addEventListener("click", btnClicky);
	}
});