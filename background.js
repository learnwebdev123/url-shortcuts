chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      handleUrlChange(tabId, changeInfo.url);
    }
  });
  
  async function handleUrlChange(tabId, url) {
    try {
      const urlObj = new URL(url);
      if (urlObj.protocol === 'chrome:') return;
      
      const input = urlObj.hostname === 'www.google.com' ? 
        urlObj.searchParams.get('q') : 
        urlObj.pathname.slice(1);
      
      if (!input) return;
      
      const shortcuts = await chrome.storage.sync.get('shortcuts');
      if (!shortcuts.shortcuts) return;
      
      const [shortcut, ...searchTerms] = input.split(' ');
      const targetUrl = shortcuts.shortcuts[shortcut];
      
      if (targetUrl) {
        let redirectUrl = targetUrl;
        if (searchTerms.length > 0) {
          redirectUrl = targetUrl.replace('%s', searchTerms.join(' '));
        }
        
        chrome.tabs.update(tabId, { url: redirectUrl });
      }
    } catch (error) {
      console.error('Error handling URL change:', error);
    }
  }