export function getCurrentTheme() {
    // Check if the document element has the `data-theme` attribute
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Return the current theme or 'default' if none is applied
    return currentTheme;
  }
  