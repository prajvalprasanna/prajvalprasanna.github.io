// Current active tab
let currentTab = 'work';

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadFeatured();
    renderSkills();
    renderGrid();
    renderCertifications();
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
    const collection = type === 'work' ? data.workProjects
        : type === 'project' ? data.projects
            : data.articles;
    const item = collection.find(i => i.id === featuredId);

    if (!item) return;

    const container = document.getElementById('featured-content');

    if (type === 'work') {
        container.innerHTML = `
            <div class="featured-card featured-card-clickable" onclick="openWorkModal('${item.id}')">
                <div class="card-thumb featured-thumb" style="background:${item.gradient}">
                    <i class="${item.icon}"></i>
                </div>
                <div class="featured-info">
                    <span class="card-meta">${item.company} &middot; ${item.period}</span>
                    <h3 class="featured-title">${item.title}</h3>
                    <p class="featured-desc">${item.summary}</p>
                    <div class="tags">
                        ${renderTags(item.tags)}
                    </div>
                    <span class="view-details">View details &rarr;</span>
                </div>
            </div>
        `;
        return;
    }

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

// Render grouped Skills
function renderSkills() {
    const container = document.getElementById('skills-content');
    if (!container || !data.skills) return;

    container.innerHTML = Object.entries(data.skills).map(([group, items]) => `
        <div class="skill-group">
            <h4 class="skill-group-title">${group}</h4>
            <div class="tags">
                ${items.map(s => `<span class="tag">${s}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render Certifications & Awards
function renderCertifications() {
    const container = document.getElementById('certs-content');
    if (!container) return;

    const certs = (data.certifications || []).map(c => `
        <a href="${c.url}" class="cert-item" target="_blank" rel="noopener">
            <i class="fas fa-certificate"></i>
            <div>
                <span class="cert-name">${c.name}</span>
                <span class="cert-authority">${c.authority}</span>
            </div>
        </a>
    `).join('');

    const awards = (data.awards || []).map(a => `
        <div class="cert-item award-item">
            <i class="fas fa-trophy"></i>
            <div>
                <span class="cert-name">${a.name}</span>
                <span class="cert-authority">${a.desc}</span>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="cert-grid">${certs}</div>
        ${awards ? `<h4 class="cert-subheading">Awards</h4><div class="cert-grid">${awards}</div>` : ''}
    `;
}

// Switch Tab
function switchTab(tab) {
    currentTab = tab;

    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const labels = { work: 'experience', projects: 'projects', articles: 'articles' };
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === labels[tab]) {
            btn.classList.add('active');
        }
    });

    // Reset search
    document.getElementById('search-input').value = '';

    renderGrid();
}

// Resolve the active collection
function getActiveItems() {
    if (currentTab === 'work') return data.workProjects;
    if (currentTab === 'projects') return data.projects;
    return data.articles;
}

// Render Grid Content
function renderGrid(filterText = '') {
    const container = document.getElementById('content-grid');
    const items = getActiveItems();
    const searchText = filterText.toLowerCase();

    const filteredItems = items.filter(item => {
        const matchesTitle = item.title.toLowerCase().includes(searchText);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(searchText));
        const blurb = item.summary || item.description || item.domain || '';
        const matchesBlurb = blurb.toLowerCase().includes(searchText);
        const matchesImpact = (item.impact || []).some(m => m.toLowerCase().includes(searchText));
        return matchesTitle || matchesTags || matchesBlurb || matchesImpact;
    });

    container.innerHTML = filteredItems.map(item => {
        if (currentTab === 'work') {
            return `
                <div class="card work-card" onclick="openWorkModal('${item.id}')">
                    <div class="card-thumb" style="background:${item.gradient}">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="card-content">
                        <span class="card-meta">${item.company} &middot; ${item.period}</span>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.summary}</p>
                        ${item.impact ? `<ul class="impact-list">${item.impact.map(m => `<li><i class="fas fa-arrow-trend-up"></i>${m}</li>`).join('')}</ul>` : ''}
                        <div class="tags">
                            ${renderTags(item.tags)}
                        </div>
                        <span class="view-details">View details &rarr;</span>
                    </div>
                </div>
            `;
        } else if (currentTab === 'projects') {
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

// Open the work detail modal
function openWorkModal(id) {
    const item = data.workProjects.find(w => w.id === id);
    if (!item) return;

    const d = item.details || {};
    const section = (title, body) => body ? `
        <div class="modal-section">
            <h4 class="modal-section-title">${title}</h4>
            ${body}
        </div>
    ` : '';

    const list = (arr) => arr && arr.length
        ? `<ul class="modal-list">${arr.map(x => `<li>${x}</li>`).join('')}</ul>` : '';

    const stack = (arr) => arr && arr.length
        ? `<div class="tags">${arr.map(s => `<span class="tag">${s}</span>`).join('')}</div>` : '';

    document.getElementById('modal-body').innerHTML = `
        <div class="modal-header">
            <div class="card-thumb modal-thumb" style="background:${item.gradient}">
                <i class="${item.icon}"></i>
            </div>
            <div>
                <span class="card-meta">${item.role} &middot; ${item.company} &middot; ${item.period}</span>
                <h2 class="modal-title">${item.title}</h2>
            </div>
        </div>
        ${item.impact ? `<div class="modal-impact">${item.impact.map(m => `<span class="impact-chip"><i class="fas fa-arrow-trend-up"></i>${m}</span>`).join('')}</div>` : ''}
        ${item.link ? `<a class="modal-link" href="${item.link}" target="_blank" rel="noopener"><i class="fas fa-up-right-from-square"></i> ${item.linkLabel || 'View'}</a>` : ''}
        ${section('The Problem', d.problem ? `<p class="modal-text">${d.problem}</p>` : '')}
        ${section('Approach', list(d.approach))}
        ${section('Tech Stack', stack(d.stack))}
        ${section('Results', list(d.results))}
    `;

    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Close the modal (X button, backdrop click, or Esc).
// When triggered by a click, only close if the backdrop itself was clicked,
// not content inside the panel.
function closeModal(event) {
    if (event && event.type === 'click' && event.target.id !== 'modal-overlay') return;
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

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
