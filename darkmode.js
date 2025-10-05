// Darkmode button 

const themeCheck = document.getElementById('theme-toggle');
const root = document.documentElement;

if (themeCheck) {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        root.classList.add('dark-mode');
        themeCheck.checked = true;
    }

    themeCheck.addEventListener('change', (e) => {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            root.classList.add('dark-mode');
        } else {
            root.classList.remove('dark-mode');
        }
    });
}