function loadProjectDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  const projectData = projectsData[projectId];
  
  if (projectData) {
      document.title = `${projectData.title} - Abigail Llanque Romero`;
      document.getElementById('project-title').textContent = projectData.title;
      document.getElementById('project-description').textContent = projectData.description;
      const projectImageElement = document.getElementById('project-image');
      projectImageElement.style.backgroundImage = `url('${projectData.image}')`;
      
  } else {
      document.getElementById('project-container').innerHTML = `
          <div class="project-not-found">
              <h2>Project Not Found</h2>
              <p>Sorry, the project you're looking for doesn't exist or has been moved.</p>
              <a href="project.html" class="btn">Return to Projects</a>
          </div>
      `;
  }
}
window.addEventListener('DOMContentLoaded', loadProjectDetails);