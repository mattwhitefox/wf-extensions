document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    darkModeToggle.addEventListener('change', () => {
      if (this.checked) {
        document.body.classList.add('dark');
        chrome.storage.local.set({ 'darkMode': true });
      } else {
        document.body.classList.remove('dark');
        chrome.storage.local.set({ 'darkMode': false });
      }
    });
  
    chrome.storage.local.get('darkMode', function(data) {
      if (data.darkMode) {
        document.body.classList.add('dark');
        darkModeToggle.checked = true;
      }
    });
});