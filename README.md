# Quick URL Shortcuts - Chrome Extension

## Overview
Quick URL Shortcuts is a Chrome extension that transforms how you navigate the web through custom URL shortcuts. Define your own navigation shortcuts and instantly redirect to full URLs.

## Features
- 🚀 **Custom Shortcuts**: Create personalized shortcuts for your favorite websites
- 🔍 **Search Support**: Use dynamic shortcuts with search parameters
- ⚡ **Instant Redirection**: Quick navigation to your desired destinations
- 💾 **Sync Storage**: Your shortcuts sync across Chrome instances
- 🎨 **Clean Interface**: Simple and intuitive shortcut management

## Installation

### Developer Mode Installation
1. Clone this repository or download the source code:
```bash
git clone https://github.com/yourusername/url-shortcuts.git
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top-right corner

4. Click "Load unpacked" and select the extension directory

### Directory Structure
```
url-shortcuts/
├── icons/
│   ├── icon48.png
│   └── icon128.png
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
├── background.js
└── README.md
```

## Usage

### Adding Shortcuts
1. Click the extension icon in your Chrome toolbar
2. Enter your desired shortcut and corresponding URL
3. Click "Add Shortcut"

### Example Shortcuts
| Shortcut | URL | Description |
|----------|-----|-------------|
| `g` | `https://google.com` | Quick access to Google |
| `yt` | `https://youtube.com/results?search_query=%s` | Search YouTube |
| `gh` | `https://github.com/%s` | Go to GitHub profile/repo |
| `r` | `https://reddit.com/r/%s` | Jump to subreddit |

### Using Shortcuts
- Simple redirect: Type `g` in the address bar
- With search: Type `yt cute microsoft` to search YouTube for "cute cats"
- Profile/Page: Type `gh learnwebdev123` to visit GitHub's Microsoft page

### Search Parameter
Use `%s` in your URL to indicate where the search term should be inserted.

## Examples

### Basic Navigation
```
Shortcut: g
URL: https://google.com
Usage: Type 'g' → Goes to Google
```

### Search Functionality
```
Shortcut: yt
URL: https://youtube.com/results?search_query=%s
Usage: Type 'yt microsoft' → Searches YouTube for 'Microsoft'
```

### Dynamic Parameters
```
Shortcut: gh
URL: https://github.com/%s
Usage: Type 'gh profile' → Goes to github.com/profile
```

## Technical Details

### Permissions Used
- `storage`: For saving shortcuts
- `tabs`: For URL redirection

### Files and Their Purposes
- `manifest.json`: Extension configuration
- `popup.html`: User interface
- `popup.js`: Shortcut management logic
- `background.js`: URL monitoring and redirection
- `styles.css`: Visual styling

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Troubleshooting

### Common Issues
1. **Shortcuts not working**
   - Ensure the shortcut is typed in the address bar
   - Check if the shortcut was saved properly
   - Verify the URL format is correct

2. **Extension not loading**
   - Verify all files are present
   - Check for console errors
   - Ensure manifest.json is valid

3. **Icons not showing**
   - Confirm icons are in the correct directory
   - Verify icon sizes (48x48 and 128x128)
   - Check file names match manifest

### Debug Mode
1. Right-click the extension icon
2. Select "Inspect popup"
3. Check the Console tab for errors

## Steps to use the extension ( URL Shortcuts)

Open Chrome browser
Type chrome://extensions/ in the address bar and press Enter
Enable "Developer mode" by toggling the switch in the top-right corner
Click the "Load unpacked" button
Navigate to and select your url-shortcuts directory

Click the extension icon in your Chrome toolbar (you might need to pin it first)
Add some shortcuts of your choice
In a new tab, type your shortcut in the address bar:


---

For bugs, feature requests, or questions, please [open an issue](https://github.com/learnwebdev123/url-shortcuts/issues).

