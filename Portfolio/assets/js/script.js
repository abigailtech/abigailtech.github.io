
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  let savedProjects = JSON.parse(localStorage.getItem("savedProjects")) || [];

  cards.forEach(card => {
    const projectId = card.getAttribute("data-id");
    const button = card.querySelector(".save-btn");

    if (savedProjects.includes(projectId)) {
      button.textContent = "Saved";
      button.classList.add("saved");
    } else {
      button.textContent = "Remember";
      button.classList.remove("saved");
    }

    button.addEventListener("click", () => {
      savedProjects = JSON.parse(localStorage.getItem("savedProjects")) || [];

      if (savedProjects.includes(projectId)) {
        savedProjects = savedProjects.filter(id => id !== projectId);
        button.textContent = "Remember";
        button.classList.remove("saved");
      } else {
        savedProjects.push(projectId);
        button.textContent = "Saved";
        button.classList.add("saved");
      }

      localStorage.setItem("savedProjects", JSON.stringify(savedProjects));
    });
  });
});

