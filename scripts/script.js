function btnClicky() {
    console.log('Button was clicked!');
}

console.log('welcome to my page');

document
    .addEventListener("DOMContentLoaded", () => {
        console.log("document succesfully loaded");
        const btn = document.getElementById('btnClicky');
        if (btn) {
            btn.addEventListener('click', btnClicky);
        }
    }
    )

function displayProjects(projects) {
    if (Array.isArray(projects)) {
        // Example: render project cards
        console.log(`Loaded ${projects.length} projects.`);
        // ...your rendering code here...
    } else {
        console.error("Projects data is not an array:", projects);
    }
}

function displayAchievements(achievements) {
    if (Array.isArray(achievements)) {
        // Example: render achievement cards
        console.log(`Loaded ${achievements.length} achievements.`);
        // ...your rendering code here...
    } else {
        console.error("Achievements data is not an array:", achievements);
    }
}



