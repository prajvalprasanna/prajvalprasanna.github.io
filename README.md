# Portfolio Website

This is a personal portfolio website built with HTML, CSS, and JavaScript. It features a modern, responsive design with a split layout, dark mode aesthetics, and dynamic content loading.

## How to Edit Content

All the content for the website is stored in the `data.js` file. You can easily update your profile, projects, and articles without touching the HTML structure.

### 1. Edit Profile Information
Open `data.js` and modify the `profile` object:
```javascript
profile: {
    name: "Your Name",
    title: "Your Title",
    about: "Your bio...",
    // ...
}
```

### 2. Add New Projects
Add a new object to the `projects` array in `data.js`:
```javascript
{
    id: "unique-id",
    title: "Project Title",
    description: "Brief description...",
    tags: ["python", "tensorflow"], // Tags determine icons
    link: "https://github.com/...",
    image: "path/to/image.jpg"
}
```

### 3. Add New Articles
Add a new object to the `articles` array in `data.js`:
```javascript
{
    id: "article-id",
    title: "Article Title",
    domain: "Tech Domain",
    date: "Date",
    link: "https://medium.com/...",
    tags: ["tag1", "tag2"]
}
```

### 4. Manage Icons
The `tagIcons` object in `data.js` maps tags to icons. You can use FontAwesome class names (e.g., `fab fa-python`) or image URLs.

## Customization
- **Styles**: Edit `style.css` to change colors, fonts, or layout.
- **Logic**: Edit `script.js` to modify behavior.
