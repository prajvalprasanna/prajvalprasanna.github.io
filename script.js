// Current active tab
let currentTab = 'projects';

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadFeatured();
    renderGrid();
});

// Load Profile Information
function loadProfile() {
    const p = data.profile;
    document.getElementById('profile-name').textContent = p.name;
    document.getElementById('profile-title').textContent = p.title;
    document.getElementById('profile-about').textContent = p.about;
    document.getElementById('profile-img').src = p.image;

    // Contact Info
    const contactContainer = document.getElementById('contact-info');
    contactContainer.innerHTML = `
        <div class="contact-item"><i class="fas fa-envelope"></i> ${p.contact.email}</div>
        <div class="contact-item"><i class="fas fa-map-marker-alt"></i> ${p.contact.location}</div>
        ${p.contact.phone ? `<div class="contact-item"><i class="fas fa-phone"></i> ${p.contact.phone}</div>` : ''}
    `;

    // Social Links
    const socialContainer = document.getElementById('social-links');
    socialContainer.innerHTML = p.social.map(s => `
        <a href="${s.url}" class="social-btn" target="_blank" title="${s.name}">
            <i class="${s.icon}"></i>
        </a>
    `).join('');

    // ... existing code ...

    // Timeline Rendering Helper
    const renderTimeline = (items, containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = items.map(item => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h4 class="timeline-role">${item.role || item.degree}</h4>
                    <span class="timeline-date">${item.year}</span>
                    <p class="timeline-company">${item.company || item.school}</p>
                    <p class="timeline-desc">${item.desc}</p>
                </div>
            </div>
        `).join('');
    };

    // Render Experience and Education
    if (p.experience) renderTimeline(p.experience, 'experience-timeline');
    if (p.education) renderTimeline(p.education, 'education-timeline');
}

// Load Featured Content (Latest Work)
function loadFeatured() {
    const featuredId = data.latestWork.id;
    const type = data.latestWork.type;
    const items = type === 'project' ? data.projects : data.articles;
    const item = items.find(i => i.id === featuredId);

    if (!item) return;

    const container = document.getElementById('featured-content');
    container.innerHTML = `
        <a href="${item.link}" target="_blank" style="text-decoration: none;">
            <div class="featured-card">
                ${item.image ? `<img src="${item.image}" alt="${item.title}" class="featured-img">` : ''}
                <div class="featured-info">
                    <h3 class="featured-title">${item.title}</h3>
                    <p class="featured-desc">${item.description || item.domain + ' - ' + item.date}</p>
                    <div class="tags">
                        ${renderTags(item.tags)}
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Switch Tab
function switchTab(tab) {
    currentTab = tab;

    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(tab)) {
            btn.classList.add('active');
        }
    });

    // Reset search
    document.getElementById('search-input').value = '';

    renderGrid();
}

// Render Grid Content
function renderGrid(filterText = '') {
    const container = document.getElementById('content-grid');
    const items = currentTab === 'projects' ? data.projects : data.articles;

    const filteredItems = items.filter(item => {
        const searchText = filterText.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(searchText);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(searchText));
        const matchesDesc = (item.description || item.domain).toLowerCase().includes(searchText);
        return matchesTitle || matchesTags || matchesDesc;
    });

    container.innerHTML = filteredItems.map(item => {
        if (currentTab === 'projects') {
            return `
                <a href="${item.link}" class="card" target="_blank">
                    <img src="${item.image}" alt="${item.title}" class="card-img">
                    <div class="card-content">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.description}</p>
                        <div class="tags">
                            ${renderTags(item.tags)}
                        </div>
                    </div>
                </a>
            `;
        } else {
            return `
                <a href="${item.link}" class="card" target="_blank">
                    <div class="card-content">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc" style="margin-bottom: 5px;">${item.domain}</p>
                        <p class="card-desc" style="font-size: 0.85rem; opacity: 0.7; margin-bottom: 15px;">${item.date}</p>
                        <div class="tags">
                            ${renderTags(item.tags)}
                        </div>
                    </div>
                </a>
            `;
        }
    }).join('');
}

// Helper to render tags with icons
function renderTags(tags) {
    return tags.map(tag => {
        const iconInfo = data.tagIcons[tag.toLowerCase()];
        let iconHtml = '';

        if (iconInfo) {
            if (iconInfo.startsWith('http')) {
                iconHtml = `<img src="${iconInfo}" class="tag-icon" alt="${tag}">`;
            } else {
                iconHtml = `<i class="${iconInfo} tag-icon"></i>`;
            }
        }

        return `
            <span class="tag">
                ${iconHtml}
                ${tag}
            </span>
        `;
    }).join('');
}

// Search Filter
function filterContent() {
    const text = document.getElementById('search-input').value;
    renderGrid(text);
}
