document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const body = document.body;

  themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    // Save theme preference to local storage
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Load theme preference from local storage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }
});