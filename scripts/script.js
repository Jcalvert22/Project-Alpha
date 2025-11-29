// Global variables to store data
let projectsData = [];
let achievementsData = [];

// Document ready function using jQuery
$(document).ready(function() {
    console.log('Document successfully loaded');
    console.log('Welcome to Jace Calvert\'s Developer Portfolio');
    
    // Initialize the application
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('Initializing application...');
    
    // Load data from JSON files
    loadProjects();
    loadAchievements();
    
    // Setup event listeners
    setupEventListeners();
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
}

/**
 * Setup event listeners for search and filter functionality
 */
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Project search
    $('#projectSearch').on('input', function() {
        const searchTerm = $(this).val();
        console.log('Project search:', searchTerm);
        filterProjects();
    });
    
    // Project filter
    $('#projectFilter').on('change', function() {
        const category = $(this).val();
        console.log('Project filter changed:', category);
        filterProjects();
    });
    
    // Achievement search
    $('#achievementSearch').on('input', function() {
        const searchTerm = $(this).val();
        console.log('Achievement search:', searchTerm);
        filterAchievements();
    });
    
    // Achievement filter
    $('#achievementFilter').on('change', function() {
        const category = $(this).val();
        console.log('Achievement filter changed:', category);
        filterAchievements();
    });
}

/**
 * Setup smooth scrolling for navigation links
 */
function setupSmoothScrolling() {
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this).attr('href');
        if (target !== '#' && $(target).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 70
            }, 800);
        }
    });
}

/**
 * Load projects from JSON file using Fetch API
 */
function loadProjects() {
    console.log('Loading projects...');
    
    try {
        fetch('assets/data/projects.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Projects loaded successfully:', data);
                projectsData = data.projects;
                displayProjects(projectsData);
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                displayError('projectsContainer', 'Failed to load projects. Please try again later.');
            });
    } catch (error) {
        console.error('Unexpected error in loadProjects:', error);
        displayError('projectsContainer', 'An unexpected error occurred.');
    }
}

/**
 * Load achievements from JSON file using Fetch API
 */
function loadAchievements() {
    console.log('Loading achievements...');
    
    try {
        fetch('assets/data/achievements.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Achievements loaded successfully:', data);
                achievementsData = data.achievements;
                displayAchievements(achievementsData);
            })
            .catch(error => {
                console.error('Error loading achievements:', error);
                displayError('achievementsContainer', 'Failed to load achievements. Please try again later.');
            });
    } catch (error) {
        console.error('Unexpected error in loadAchievements:', error);
        displayError('achievementsContainer', 'An unexpected error occurred.');
    }
}

/**
 * Display projects as Bootstrap cards
 */
function displayProjects(projects) {
    console.log('Displaying', projects.length, 'projects');
    
    const container = $('#projectsContainer');
    container.empty();
    
    if (projects.length === 0) {
        container.html(`
            <div class="col-12 text-center">
                <p class="text-muted">No projects found matching your criteria.</p>
            </div>
        `);
        return;
    }
    
    projects.forEach(project => {
        const card = createProjectCard(project);
        container.append(card);
    });
}

/**
 * Create a Bootstrap card for a project
 */
function createProjectCard(project) {
    return $(`
        <div class="col-md-6 col-lg-4 project-card" data-category="${project.category}">
            <div class="card h-100 shadow-sm hover-card">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text flex-grow-1">${project.description}</p>
                    <div class="mb-2">
                        ${project.technologies.map(tech => 
                            `<span class="badge bg-secondary me-1 mb-1">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="d-flex gap-2">
                        <a href="${project.codeLink}" class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener">
                            <i class="bi bi-github"></i> Code
                        </a>
                        ${project.liveLink !== '#' ? 
                            `<a href="${project.liveLink}" class="btn btn-dark btn-sm" target="_blank" rel="noopener">
                                <i class="bi bi-box-arrow-up-right"></i> Live Demo
                            </a>` : 
                            '<span class="btn btn-secondary btn-sm disabled">No Live Demo</span>'
                        }
                    </div>
                </div>
            </div>
        </div>
    `);
}

/**
 * Display achievements as Bootstrap cards
 */
function displayAchievements(achievements) {
    console.log('Displaying', achievements.length, 'achievements');
    
    const container = $('#achievementsContainer');
    container.empty();
    
    if (achievements.length === 0) {
        container.html(`
            <div class="col-12 text-center">
                <p class="text-muted">No achievements found matching your criteria.</p>
            </div>
        `);
        return;
    }
    
    achievements.forEach(achievement => {
        const card = createAchievementCard(achievement);
        container.append(card);
    });
}

/**
 * Create a Bootstrap card for an achievement
 */
function createAchievementCard(achievement) {
    return $(`
        <div class="col-md-6 col-lg-4 achievement-card" data-category="${achievement.category}">
            <div class="card h-100 shadow-sm hover-card">
                <img src="${achievement.image}" class="card-img-top" alt="${achievement.title}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">${achievement.title}</h5>
                        <span class="badge bg-success">${achievement.category}</span>
                    </div>
                    <p class="card-text text-muted small mb-2">
                        <i class="bi bi-building"></i> ${achievement.issuer} | 
                        <i class="bi bi-calendar"></i> ${achievement.date}
                    </p>
                    <p class="card-text">${achievement.description}</p>
                </div>
            </div>
        </div>
    `);
}

/**
 * Filter projects based on search and category
 */
function filterProjects() {
    const searchTerm = $('#projectSearch').val().toLowerCase();
    const category = $('#projectFilter').val();
    
    console.log('Filtering projects - Search:', searchTerm, 'Category:', category);
    
    const filtered = projectsData.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm) ||
                            project.description.toLowerCase().includes(searchTerm) ||
                            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm));
        
        const matchesCategory = category === 'all' || project.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    displayProjects(filtered);
}

/**
 * Filter achievements based on search and category
 */
function filterAchievements() {
    const searchTerm = $('#achievementSearch').val().toLowerCase();
    const category = $('#achievementFilter').val();
    
    console.log('Filtering achievements - Search:', searchTerm, 'Category:', category);
    
    const filtered = achievementsData.filter(achievement => {
        const matchesSearch = achievement.title.toLowerCase().includes(searchTerm) ||
                            achievement.description.toLowerCase().includes(searchTerm) ||
                            achievement.issuer.toLowerCase().includes(searchTerm);
        
        const matchesCategory = category === 'all' || achievement.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    displayAchievements(filtered);
}

/**
 * Display error message in a container
 */
function displayError(containerId, message) {
    $(`#${containerId}`).html(`
        <div class="col-12">
            <div class="alert alert-danger" role="alert">
                <i class="bi bi-exclamation-triangle"></i> ${message}
            </div>
        </div>
    `);
}

// Log when script is loaded
console.log('Script.js loaded successfully');


