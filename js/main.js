/* ==========================================================
   Portfolio renderer
   You should not need to edit this file to update content.
   All text, links and images come from the files in /content.
   ========================================================== */

const CONTENT_FILES = ['profile', 'experience', 'projects', 'skills', 'achievements', 'certifications', 'education'];

/* ---------- Icons (inline SVG, no external requests) ---------- */
const stroke = (paths) =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const fill = (d) => `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`;

const ICONS = {
  github: fill('M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3'),
  linkedin: fill('M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z'),
  hackerrank: stroke('<path d="M12 2l8.66 5v10L12 22l-8.66-5V7z"/><path d="M9.5 8v8M14.5 8v8M9.5 12h5"/>'),
  trailblazer: stroke('<path d="M17.5 19H8a5 5 0 1 1 .9-9.92A6 6 0 0 1 20 11.5a3.75 3.75 0 0 1-2.5 7.5z"/>'),
  email: stroke('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
  website: stroke('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'),
  code: stroke('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
  database: stroke('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>'),
  spark: stroke('<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/><path d="M19 3v4M17 5h4"/>'),
  layers: stroke('<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'),
  chart: stroke('<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>'),
  cpu: stroke('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>'),
  tools: stroke('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>'),
  trophy: stroke('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0z"/>'),
  book: stroke('<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>'),
  star: stroke('<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>'),
  award: stroke('<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>'),
  external: stroke('<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'),
  download: stroke('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>'),
  details: stroke('<path d="M4 6h16M4 12h10M4 18h7"/>'),
  sun: stroke('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>'),
  moon: stroke('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>'),
  menu: stroke('<path d="M4 6h16M4 12h16M4 18h16"/>'),
  close: stroke('<path d="M18 6 6 18M6 6l12 12"/>'),
  arrowUp: stroke('<path d="m18 15-6-6-6 6"/>'),
  pin: stroke('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  copy: stroke('<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'),
  check: stroke('<path d="M20 6 9 17l-5-5"/>'),
  grad: stroke('<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),
  briefcase: stroke('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
};
const icon = (name) => ICONS[name] || ICONS.code;

/* Visual style for each project category (cover art when there is no screenshot) */
const CATEGORY_STYLE = {
  'AI & Agents': { icon: 'spark', c1: '#8b5cf6', c2: '#2dd4bf' },
  'Data & BI': { icon: 'chart', c1: '#f5b14c', c2: '#38bdf8' },
  'Machine Learning': { icon: 'cpu', c1: '#38bdf8', c2: '#22c55e' },
  Other: { icon: 'code', c1: '#f472b6', c2: '#2dd4bf' },
};

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const safeUrl = (u = '') => (/^(https?:|mailto:|tel:|\/|\.|assets\/|#)/i.test(u.trim()) ? esc(u.trim()) : '');
const extLink = (u) => (/^https?:/i.test(u) ? ' target="_blank" rel="noopener noreferrer"' : '');
const setAll = (attr, fn) => $$(`[${attr}]`).forEach(fn);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

async function loadContent() {
  const entries = await Promise.all(
    CONTENT_FILES.map(async (name) => {
      const res = await fetch(`content/${name}.json`, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`Could not load content/${name}.json (${res.status})`);
      try {
        return [name, await res.json()];
      } catch (err) {
        throw new Error(`content/${name}.json has a formatting mistake: ${err.message}`);
      }
    })
  );
  return Object.fromEntries(entries);
}

/* ---------- Section renderers ---------- */
function renderProfile(p, projects) {
  document.title = `${p.name} | ${p.headline}`;
  setAll('data-name', (el) => (el.textContent = p.name));
  setAll('data-initials', (el) => (el.textContent = p.initials || p.name.split(' ').map((w) => w[0]).join('')));
  $('[data-headline]').textContent = p.headline;
  $('[data-intro]').textContent = p.intro;
  const openTo = $('[data-open-to]');
  if (p.openTo) openTo.textContent = p.openTo; else openTo.remove();
  $('[data-location]').innerHTML = p.location ? `${icon('pin')} ${esc(p.location)}` : '';
  $('[data-year]').textContent = new Date().getFullYear();

  $('[data-avatar]').innerHTML = p.photo
    ? `<img src="${safeUrl(p.photo)}" alt="Photo of ${esc(p.name)}" width="340" height="340">`
    : `<div class="monogram" role="img" aria-label="${esc(p.name)}"><span>${esc(p.initials)}</span></div>`;

  $('[data-about]').innerHTML = (p.about || []).map((para) => `<p>${esc(para)}</p>`).join('');

  const visibleProjects = projects.filter((x) => x.show !== false).length;
  $('[data-highlights]').innerHTML = (p.highlights || [])
    .map((h) => {
      const value = h.value === 'auto' ? `${visibleProjects}+` : h.value;
      return `<div class="card stat"><p class="stat-value gradient-text">${esc(value)}</p><p class="stat-label">${esc(h.label)}</p></div>`;
    })
    .join('');

  const socials = (p.socials || []).filter((s) => s.url);
  const socialHtml = socials
    .map((s) => `<li><a href="${safeUrl(s.url)}"${extLink(s.url)} aria-label="${esc(s.name)}" title="${esc(s.name)}">${icon(s.icon)}</a></li>`)
    .join('');
  setAll('data-socials', (el) => (el.innerHTML = socialHtml));

  // Resume
  const r = p.resume || {};
  if (r.file) {
    setAll('data-resume-download', (el) => (el.href = r.file));
    setAll('data-resume-view', (el) => (el.href = r.file));
    $('[data-resume-frame]').src = `${r.file}#view=FitH`;
  }
  $('[data-resume-updated]').textContent = r.updated ? `Last updated: ${r.updated}` : '';

  renderContact(p, socials);
}

function renderContact(p, socials) {
  const c = p.contact || {};
  $('[data-contact-message]').textContent = c.message || '';
  const cards = [];
  if (c.email) {
    cards.push(`
      <div class="card contact-card">
        <span class="ci">${icon('email')}</span>
        <a href="mailto:${esc(c.email)}" style="color:inherit;text-decoration:none"><span class="cl">Email</span><span class="cv">${esc(c.email)}</span></a>
        <button class="icon-btn copy" type="button" data-copy="${esc(c.email)}" aria-label="Copy email address">${icon('copy')}</button>
      </div>`);
  }
  if (c.phone) {
    cards.push(`<a class="card contact-card" href="tel:${esc(c.phone.replace(/\s/g, ''))}"><span class="ci">${icon('briefcase')}</span><span><span class="cl">Phone</span><span class="cv">${esc(c.phone)}</span></span></a>`);
  }
  socials
    .filter((s) => s.icon !== 'email')
    .forEach((s) => {
      const label = s.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
      cards.push(`<a class="card contact-card" href="${safeUrl(s.url)}"${extLink(s.url)}><span class="ci">${icon(s.icon)}</span><span><span class="cl">${esc(s.name)}</span><span class="cv">${esc(label)}</span></span></a>`);
    });
  if (c.location) cards.push(`<div class="card contact-card"><span class="ci">${icon('pin')}</span><span><span class="cl">Based in</span><span class="cv">${esc(c.location)}</span></span></div>`);
  $('[data-contact-cards]').innerHTML = cards.join('');

  const form = $('[data-contact-form]');
  if (c.formspreeEndpoint) {
    form.hidden = false;
    form.action = c.formspreeEndpoint;
    initContactForm(form, c.email);
  } else {
    // No form service configured: show a simple "email me" panel instead
    form.insertAdjacentHTML(
      'afterend',
      `<div class="card cta-panel reveal">
        <h3>Have an opportunity in mind?</h3>
        <p>Send me an email and I'll get back to you.</p>
        ${c.email ? `<a class="btn btn-primary" href="mailto:${esc(c.email)}?subject=${encodeURIComponent('Hello Swarangi')}">${icon('email')} Email me</a>` : ''}
        ${p.resume?.file ? `<a class="btn btn-ghost" href="${safeUrl(p.resume.file)}" download>${icon('download')} Download resume</a>` : ''}
      </div>`
    );
    form.remove();
  }
}

function renderExperience(items) {
  $('[data-experience]').innerHTML = items
    .map(
      (e) => `
      <li class="timeline-item reveal">
        <article class="card timeline-card">
          <div class="timeline-top">
            <h3>${esc(e.role)}</h3>
            <span class="date-pill">${esc(e.start)} – ${esc(e.end)}</span>
          </div>
          <p class="timeline-meta"><strong>${esc(e.company)}</strong>${e.location ? ` · ${esc(e.location)}` : ''}${e.type ? ` · ${esc(e.type)}` : ''}</p>
          ${e.points?.length ? `<ul class="bullets">${e.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}</ul>` : ''}
          ${e.tech?.length ? `<div class="tags" style="margin-top:14px">${e.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
        </article>
      </li>`
    )
    .join('');
}

function projectCover(p) {
  const style = CATEGORY_STYLE[p.category] || CATEGORY_STYLE.Other;
  const badges = [
    p.featured ? '<span class="badge badge-featured">★ Featured</span>' : '',
    p.status ? `<span class="badge badge-status">${esc(p.status)}</span>` : p.demo ? '<span class="badge badge-live">● Live</span>' : '',
  ].join('');
  const art = p.image
    ? `<img src="${safeUrl(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="640" height="360">`
    : `<div class="cover-art" style="--c1:${style.c1};--c2:${style.c2}"><span class="cover-icon">${icon(style.icon)}</span><span class="cover-title">${esc(p.title.split(':')[0])}</span></div>`;
  return `<div class="project-cover"><div class="badges">${badges}</div>${art}</div>`;
}

function projectLinks(p, index, withDetails) {
  return [
    p.demo ? `<a class="link-btn primary" href="${safeUrl(p.demo)}" target="_blank" rel="noopener noreferrer">${icon('external')} Live demo</a>` : '',
    p.github ? `<a class="link-btn" href="${safeUrl(p.github)}" target="_blank" rel="noopener noreferrer">${icon('github')} Code</a>` : '',
    withDetails ? `<button class="link-btn" type="button" data-open-project="${index}">${icon('details')} Details</button>` : '',
  ].join('');
}

function renderProjects(all) {
  const projects = all
    .filter((p) => p.show !== false)
    .sort((a, b) => (b.featured === true) - (a.featured === true));

  // Filter buttons: only for categories that actually have projects
  const order = Object.keys(CATEGORY_STYLE);
  const cats = [...new Set(projects.map((p) => p.category || 'Other'))].sort((a, b) => order.indexOf(a) - order.indexOf(b));
  $('[data-filters]').innerHTML = ['All', ...cats]
    .map((c) => {
      const n = c === 'All' ? projects.length : projects.filter((p) => (p.category || 'Other') === c).length;
      return `<button class="filter-btn" type="button" data-filter="${esc(c)}" aria-pressed="${c === 'All'}">${esc(c)}<span class="count">${n}</span></button>`;
    })
    .join('');

  $('[data-projects]').innerHTML = projects
    .map(
      (p, i) => `
      <article class="card project-card reveal" data-category="${esc(p.category || 'Other')}">
        ${projectCover(p)}
        <div class="project-body">
          <p class="project-category">${esc(p.category || 'Other')}</p>
          <h3>${esc(p.title)}</h3>
          ${p.tagline ? `<p class="project-tagline">${esc(p.tagline)}</p>` : ''}
          <p class="project-desc">${esc(p.description)}</p>
          <div class="tags">${(p.tech || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <div class="project-links">${projectLinks(p, i, true)}</div>
        </div>
      </article>`
    )
    .join('');

  // Filtering
  $('[data-filters]').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    const f = btn.dataset.filter;
    $$('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    $$('.project-card').forEach((card) => card.classList.toggle('is-hidden', f !== 'All' && card.dataset.category !== f));
  });

  // Details dialog
  const dialog = $('#project-dialog');
  $('[data-projects]').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open-project]');
    if (!btn) return;
    const p = projects[Number(btn.dataset.openProject)];
    $('.dialog-body', dialog).innerHTML = `
      ${projectCover(p)}
      <div class="dialog-head">
        <div><p class="project-category">${esc(p.category || 'Other')}</p><h3 id="dialog-title">${esc(p.title)}</h3></div>
        <button class="icon-btn" type="button" data-close-dialog aria-label="Close">${icon('close')}</button>
      </div>
      ${p.tagline ? `<p class="project-tagline">${esc(p.tagline)}</p>` : ''}
      <p>${esc(p.description)}</p>
      ${p.points?.length ? `<ul class="bullets">${p.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}</ul>` : ''}
      <div class="tags">${(p.tech || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      <div class="project-links">${projectLinks(p, 0, false) || '<p class="small">Code and demo links coming soon.</p>'}</div>`;
    dialog.showModal();
  });
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog || e.target.closest('[data-close-dialog]')) dialog.close();
  });
}

function renderSkills(groups) {
  $('[data-skills]').innerHTML = groups
    .map(
      (g) => `
      <article class="card skill-card reveal">
        <div class="skill-head"><span class="skill-icon">${icon(g.icon)}</span><h3>${esc(g.group)}</h3></div>
        <div class="tags">${(g.items || []).map((s) => `<span class="tag">${esc(s)}</span>`).join('')}</div>
      </article>`
    )
    .join('');
}

function renderAchievements(items, certs) {
  $('[data-achievements]').innerHTML = items
    .map(
      (a) => `
      <article class="card achievement reveal">
        <span class="achievement-icon">${icon(a.icon || 'trophy')}</span>
        <div>
          <h4>${esc(a.title)}${a.year ? ` <span class="muted small">· ${esc(a.year)}</span>` : ''}</h4>
          <p>${esc(a.detail)}</p>
          ${a.link ? `<a href="${safeUrl(a.link)}"${extLink(a.link)}>View ${icon('external')}</a>` : ''}
        </div>
      </article>`
    )
    .join('');

  $('[data-certifications]').innerHTML = certs
    .map(
      (c) => `
      <li class="card cert reveal">
        <span class="cert-icon">${icon('award')}</span>
        <div><div class="cert-title">${esc(c.title)}</div><div class="cert-issuer">${esc(c.issuer)}${c.year ? ` · ${esc(c.year)}` : ''}</div></div>
        ${c.link ? `<a href="${safeUrl(c.link)}"${extLink(c.link)} aria-label="View ${esc(c.title)} certificate">${icon('external')}</a>` : ''}
      </li>`
    )
    .join('');
}

function renderEducation(items) {
  $('[data-education]').innerHTML = items
    .map(
      (e) => `
      <article class="card edu-card reveal">
        <div class="edu-top"><span class="edu-icon">${icon('grad')}</span><span class="date-pill">${esc(e.start)} – ${esc(e.end)}</span></div>
        <h3>${esc(e.institution)}</h3>
        <p>${esc(e.degree)}${e.location ? ` · ${esc(e.location)}` : ''}</p>
        ${e.score ? `<p class="edu-score">${esc(e.score)}</p>` : ''}
      </article>`
    )
    .join('');
}

/* ---------- Interactions ---------- */
function initTyping(lines) {
  const el = $('[data-typing]');
  if (!lines?.length) return;
  if (reducedMotion) { el.textContent = lines[0]; return; }
  let line = 0, char = 0, deleting = false;
  const tick = () => {
    const text = lines[line];
    char += deleting ? -1 : 1;
    el.textContent = text.slice(0, char);
    let delay = deleting ? 35 : 70;
    if (!deleting && char === text.length) { deleting = true; delay = 1800; }
    else if (deleting && char === 0) { deleting = false; line = (line + 1) % lines.length; delay = 400; }
    setTimeout(tick, delay);
  };
  tick();
}

function initHeroCanvas() {
  const canvas = $('.hero-canvas');
  if (!canvas || reducedMotion) return;
  const ctx = canvas.getContext('2d');
  let w, h, nodes, running = true, raf;
  const color = () => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#2dd4bf';
  let accent = color();

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(70, Math.floor((w * h) / 18000));
    nodes = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    ctx.strokeStyle = accent; ctx.fillStyle = accent;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y, d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.globalAlpha = (1 - d / 130) * 0.35;
          ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
        }
      }
      ctx.globalAlpha = 0.7;
      ctx.beginPath(); ctx.arc(nodes[i].x, nodes[i].y, 1.6, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (running) raf = requestAnimationFrame(draw);
  };
  resize(); draw();
  window.addEventListener('resize', resize);
  document.addEventListener('themechange', () => (accent = color()));
  // Pause the animation when the hero is off screen, to save battery
  new IntersectionObserver(([entry]) => {
    const wasRunning = running;
    running = entry.isIntersecting;
    if (running && !wasRunning) draw(); else if (!running) cancelAnimationFrame(raf);
  }).observe($('.hero'));
}

function initTheme() {
  const btn = $('#theme-toggle');
  const root = document.documentElement;
  const update = () => {
    const dark = root.dataset.theme !== 'light';
    btn.innerHTML = dark ? icon('sun') : icon('moon');
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    $('meta[name="theme-color"]').content = dark ? '#070b16' : '#f6f8fc';
  };
  btn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    update();
    document.dispatchEvent(new Event('themechange'));
  });
  update();
}

function initNav() {
  const header = $('.site-header');
  const progress = $('.scroll-progress');
  const toTop = $('#to-top');
  const menuBtn = $('#menu-toggle');
  const links = $('#nav-links');
  toTop.innerHTML = icon('arrowUp');

  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle('scrolled', y > 20);
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    toTop.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));

  const setMenu = (open) => {
    links.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuBtn.innerHTML = open ? icon('close') : icon('menu');
  };
  setMenu(false);
  menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  links.addEventListener('click', (e) => e.target.closest('a') && setMenu(false));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !e.target.closest('.nav')) setMenu(false);
  });

  // Highlight the nav link of the section currently on screen
  const navMap = new Map($$('.nav-links a[href^="#"]:not(.btn)').map((a) => [a.getAttribute('href').slice(1), a]));
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navMap.forEach((a) => a.classList.remove('active'));
        navMap.get(entry.target.id)?.classList.add('active');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  $$('main section[id]').forEach((s) => sectionObserver.observe(s));
}

function initReveal() {
  const items = $$('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('visible')); return; }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('visible');
        io.unobserve(el);
        // Drop the stagger delay once revealed, so hover effects respond instantly
        setTimeout(() => (el.style.transitionDelay = ''), 900);
      }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    io.observe(el);
  });
}

function initCopy() {
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.innerHTML = icon('check');
      btn.setAttribute('aria-label', 'Copied');
      setTimeout(() => { btn.innerHTML = icon('copy'); btn.setAttribute('aria-label', 'Copy email address'); }, 1800);
    } catch { window.location.href = `mailto:${btn.dataset.copy}`; }
  });
}

function initContactForm(form, email) {
  const status = $('.form-status', form);
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { status.textContent = 'Please fill in your name, a valid email and a message.'; form.reportValidity(); return; }
    const btn = $('button[type="submit"]', form);
    btn.disabled = true; status.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.reset(); status.textContent = 'Thank you! Your message has been sent.';
    } catch {
      status.innerHTML = `Sorry, that didn't send. Please email me directly at <a href="mailto:${esc(email)}">${esc(email)}</a>.`;
    } finally { btn.disabled = false; }
  });
}

/* ---------- Start ---------- */
(async function init() {
  initTheme();
  initNav();
  initCopy();
  try {
    const c = await loadContent();
    renderProfile(c.profile, c.projects);
    renderExperience(c.experience);
    renderProjects(c.projects);
    renderSkills(c.skills);
    renderAchievements(c.achievements, c.certifications);
    renderEducation(c.education);
    initTyping(c.profile.typingLines);
  } catch (err) {
    console.error(err);
    $('main').insertAdjacentHTML('afterbegin', `<p class="load-error">Sorry, the portfolio content couldn't load. ${esc(err.message)}</p>`);
  }
  initReveal();
  initHeroCanvas();
})();
