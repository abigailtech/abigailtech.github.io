const filterSelect = document.getElementById('categorySelect');
const projectCards = document.querySelectorAll('.project-card');

  filterSelect.addEventListener('change', function () {
    const selectedCategory = this.value;

    projectCards.forEach(card => {
      const tags = Array.from(card.querySelectorAll('.project-tag')).map(tag => tag.textContent.toLowerCase());
      if (selectedCategory === 'all' || tags.includes(selectedCategory)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

