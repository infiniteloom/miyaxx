# Miyaxx Website

Official website for Miyaxx band featuring tour dates, music, and band information.

## Features

- Full-screen responsive video background
- Animated floating icon navigation
- Smooth page transitions
- Mobile-friendly with tap-to-reveal interactions
- Japan Tour 2025 dates

## Deployment to GitHub Pages

### Option 1: Using GitHub Desktop (Easiest)

1. **Create a GitHub account** (if you don't have one): https://github.com/join

2. **Download and install GitHub Desktop**: https://desktop.github.com/

3. **Create a new repository**:
   - Open GitHub Desktop
   - Click "Create a New Repository on your hard drive"
   - Name it: `miyaxx` (or `your-username.github.io` for a personal site)
   - Choose the location: `/Users/leathomas/Desktop/Miyaxx website`
   - Click "Create Repository"

4. **Publish to GitHub**:
   - Click "Publish repository" in GitHub Desktop
   - Uncheck "Keep this code private" if you want it public
   - Click "Publish Repository"

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub.com
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://your-username.github.io/miyaxx/`

### Option 2: Using Terminal (Manual)

1. **Initialize Git in your project folder**:
```bash
cd "/Users/leathomas/Desktop/Miyaxx website"
git init
git add .
git commit -m "Initial commit: Miyaxx website"
```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it: `miyaxx`
   - Don't initialize with README
   - Click "Create repository"

3. **Push your code to GitHub**:
```bash
git remote add origin https://github.com/YOUR-USERNAME/miyaxx.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages"
   - Select "main" branch as source
   - Save

Your site will be live at: `https://YOUR-USERNAME.github.io/miyaxx/`

## File Structure

```
/Users/leathomas/Desktop/Miyaxx website/
├── index.html                          # Main HTML file
├── style.css                           # Styles
├── script.js                           # JavaScript functionality
├── miyaxx gif amber caires .mp4        # Background video
├── static-background.png               # Static background image
├── isolated datura.png                 # Datura icon
├── isolated grass.png                  # Grass icon
└── isolated spiral calendula.png       # Calendula icon
```

## Updating Content

### To update show dates:

Edit the `pageContent.listen.content` section in `script.js`:

```javascript
const pageContent = {
    listen: {
        title: 'Listen',
        content: `
            <h3>Japan Tour 2025</h3>
            <ul class="show-list">
                <li class="show-item">
                    <div class="show-date">28.11</div>
                    <div class="show-details">
                        <div class="show-city">Awaji Shima</div>
                        <div class="show-venue">Kominka Awa</div>
                    </div>
                </li>
                // Add more shows here...
            </ul>
        `
    }
}
```

### To update About or Shows content:

Edit the corresponding sections in the `pageContent` object in `script.js`.

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with modern features (flexbox, transitions, animations)
- **Vanilla JavaScript** - Interactions and state management
- **Google Fonts** - Pirata One and Roboto fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Miyaxx. All rights reserved.

