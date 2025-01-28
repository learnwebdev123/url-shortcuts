document.addEventListener('DOMContentLoaded', function() {
    loadShortcuts();
    
    document.getElementById('addShortcut').addEventListener('click', addShortcut);
  });
  
  async function loadShortcuts() {
    const shortcuts = await chrome.storage.sync.get('shortcuts');
    const shortcutsList = document.getElementById('shortcutsList');
    shortcutsList.innerHTML = '';
    
    if (shortcuts.shortcuts) {
      Object.entries(shortcuts.shortcuts).forEach(([shortcut, url]) => {
        const div = document.createElement('div');
        div.className = 'shortcut-item';
        div.innerHTML = `
          <span>${shortcut} → ${url}</span>
          <button class="delete-btn" data-shortcut="${shortcut}">Delete</button>
        `;
        shortcutsList.appendChild(div);
      });
    }
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', deleteShortcut);
    });
  }
  
  async function addShortcut() {
    const shortcut = document.getElementById('shortcut').value.trim();
    const url = document.getElementById('url').value.trim();
    
    if (!shortcut || !url) {
      alert('Please fill in both fields');
      return;
    }
    
    const shortcuts = await chrome.storage.sync.get('shortcuts');
    const updatedShortcuts = { 
      ...shortcuts.shortcuts,
      [shortcut]: url 
    };
    
    await chrome.storage.sync.set({ shortcuts: updatedShortcuts });
    loadShortcuts();
    
    document.getElementById('shortcut').value = '';
    document.getElementById('url').value = '';
  }
  
  async function deleteShortcut(e) {
    const shortcut = e.target.dataset.shortcut;
    const shortcuts = await chrome.storage.sync.get('shortcuts');
    
    delete shortcuts.shortcuts[shortcut];
    await chrome.storage.sync.set({ shortcuts: shortcuts.shortcuts });
    loadShortcuts();
  }