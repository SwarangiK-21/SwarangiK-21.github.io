# Swarangi Kothawade: Portfolio

Personal portfolio website: **https://swarangik-21.github.io**

Plain HTML, CSS and JavaScript. No build step, no database, no paid services.
Hosted free on GitHub Pages.

---

## How the site is organised

```
content/              ← ALL your text and links live here (this is what you edit)
  profile.json          name, headline, intro, about, stats, socials, contact, resume
  projects.json         project cards
  experience.json       jobs and internships
  skills.json           skill groups
  achievements.json     achievements
  certifications.json   certifications
  education.json        education
assets/
  resume/               your resume PDF
  img/projects/         project screenshots
  favicon.svg           browser tab icon
index.html            page layout (rarely needs changes)
css/styles.css        colours, fonts, spacing (colours are at the top)
js/main.js            reads /content and builds the page (no need to edit)
.pages.yml            settings for the optional Pages CMS editor
```

Change a file in `content/`, save it to GitHub, and the live site updates in about a minute.

---

## Three ways to update the site

### Option A: Pages CMS editor (easiest, no code)

1. Go to **https://app.pagescms.org** and sign in with GitHub.
2. Open the repository `SwarangiK-21.github.io`.
3. Pick a section in the left menu (Projects, Experience, Skills…), edit the form, and click **Save**.

Pages CMS is free and open source. It saves straight to your GitHub repository, so there is no
database, no server and no extra password. The first time, GitHub asks you to approve access to
the repository.

### Option B: Edit on github.com (no install)

1. Open the repository on github.com, then the `content` folder.
2. Click a file (for example `projects.json`) and then the ✏️ pencil icon.
3. Make your change and click **Commit changes**.

### Option C: Edit on your computer

Edit the files in VS Code, then commit and push with Git (or GitHub Desktop).

---

## Common tasks

### Add a new project

Open `content/projects.json` and copy an existing block, from `{` to `},`, then edit it:

```json
{
  "title": "My New Project",
  "tagline": "One line that sums it up",
  "description": "Two or three sentences on what it does and why.",
  "points": ["Key feature or result", "Another one"],
  "tech": ["Python", "SQL"],
  "category": "Data & BI",
  "github": "https://github.com/SwarangiK-21/my-new-project",
  "demo": "",
  "image": "assets/img/projects/my-new-project.jpg",
  "status": "",
  "featured": false,
  "show": true
},
```

- `category` must be one of: `AI & Agents`, `Data & BI`, `Machine Learning`, `Other`.
- Leave `demo`, `github` or `image` as `""` when you don't have one. The button or picture is then hidden,
  and a coloured cover is drawn automatically.
- `"featured": true` puts the project first, with a ★ badge.
- `"show": false` hides a project without deleting it.
- `"status": "In progress"` adds a badge.

### Add a screenshot to a project

Upload the image (16:9 works best, e.g. 1280×720, JPG under 300 KB) into `assets/img/projects/`,
then set `"image": "assets/img/projects/your-file.jpg"` on that project.

### Replace your resume

Upload the new PDF to `assets/resume/` **with the same name** (`Swarangi_Kothawade_Resume.pdf`), replacing
the old one. Then update `"updated"` under `"resume"` in `profile.json`. If you use a different
filename, also change `"file"` there.

### Add a job, certification, achievement or skill

Same idea: copy an existing block in the matching file and edit it. Order in the file = order on the site.

### Add your photo

Upload a square photo to `assets/img/` (e.g. `assets/img/profile.jpg`) and set
`"photo": "assets/img/profile.jpg"` in `profile.json`.

### Add or hide a social link

In `profile.json` → `socials`. An empty `"url": ""` hides that link. Available icons:
`github`, `linkedin`, `hackerrank`, `trailblazer`, `email`, `website`.

### Turn on a contact form (optional)

1. Create a free account at https://formspree.io and make a new form. The free plan allows 50 messages a month.
2. Copy the form URL (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `"formspreeEndpoint"` in `profile.json`.

When it's empty, the site shows an **Email me** button instead.

### Change colours

Open `css/styles.css`. The first two blocks hold every colour, one for dark mode and one for light mode.
`--accent` is the main teal and `--highlight` is the amber.

---

## JSON rules (avoid the most common mistakes)

- Text goes in double quotes: `"like this"`.
- Items in a list are separated by commas, **but there's no comma after the last item**.
- If the site shows *"content couldn't load"* after an edit, the message names the file with the mistake.
  Paste that file into https://jsonlint.com to find the exact line.

---

## Preview on your computer (optional)

The page loads its content with JavaScript, so double-clicking `index.html` won't work. Run a tiny local server instead:

```bash
python -m http.server 5500
```

Then open http://localhost:5500. Or use the **Live Server** extension in VS Code.

---

## Hosting notes (GitHub Pages free tier)

- Free for public repositories. The repository (and everything in it, including the resume PDF) is public.
- Limits: site up to 1 GB, about 100 GB of traffic a month. A portfolio uses a tiny fraction of this.
- Updates usually go live 30–90 seconds after a commit. Check progress in the repository's **Actions** tab.
- A custom domain (e.g. `swarangi.dev`) is optional. The domain costs money, but GitHub Pages stays free.
