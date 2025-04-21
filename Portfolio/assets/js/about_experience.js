document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {

    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const targetId = button.getAttribute('data-target');
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');
  });
});
