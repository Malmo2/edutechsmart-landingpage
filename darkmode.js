// Darkmode button 

const themeCheck = document.getElementById('theme-toggle');
const root = document.documentElement;

root.classList.remove('dark-mode');
if (themeCheck) themeCheck.checked = false;

if (themeCheck) {
    themeCheck.addEventListener('change', (e) => {
        root.classList.toggle('dark-mode', e.currentTarget.checked);
    });
}