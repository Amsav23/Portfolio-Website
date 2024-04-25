// Project data
const projects = [
    { title: "UniLife", 
    description: "UniLife has been my biggest project so far.<br> It is a website for students living in the UK to filter through cities and student housing.<br> They have the freedom to filter through criteria such as pricing, location, number of bedrooms or bathrooms, and more.", 
    image: "/assets/UniLife Screenshot.png", url: "project1.html" },
    { title: "Rick and Morty", description: "A fun webpage to filter through episodes of the adult animated show, Rick and Morty.<br> Users can read details about each character, save their favorites, and even switch to using dark mode.", 
    image: "/assets/Rick and Morty Screenshot.png", url: "project2.html" },
]

// Function to create project elements
function createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.innerHTML = 
        `<h2>${project.title}</h2>
        <p>${project.description}</p>
        <img src="${project.image}" alt="${project.title}">
        <a href="${project.url}" target="_blank">View Project</a>
    `;
    return projectElement;
}

// Function to display projects
function displayProjects() {
    const projectsContainer = document.getElementById("projects");
    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsContainer.appendChild(projectElement);
    });
}

// Display projects when the page loads
window.addEventListener("load", displayProjects);