# Vibe Apps in Power Platform — UN Agency Edition

A workshop companion site for the **Vibe Apps in Power Platform** hands-on lab. Modeled on the clean, prompt-driven style of [jivtesh.github.io](https://jivtesh.github.io/ai/nonprofit_ai_workshop.html).

Live once published: `https://<your-github-username>.github.io/vibe-apps-workshop/`

---

## What's in this repo

| File | Purpose |
|------|---------|
| `index.html` | The entire workshop site — single file, no build step, no dependencies |
| `README.md` | This file |

Everything (styles, layout, copy-to-clipboard) lives inside `index.html`. Just edit and push.

---

## Publish to GitHub Pages — Step by Step

### Option A: Quickest path (GitHub web UI, no command line)

1. **Create a new repo**
   - Go to <https://github.com/new>
   - Name it `vibe-apps-workshop` (or any name you like — the URL will include this)
   - Set **Public**
   - Check **Add a README file**, click **Create repository**

2. **Upload the workshop files**
   - On the repo page, click **Add file → Upload files**
   - Drag `index.html` (and this `README.md`) into the upload area
   - Add a commit message like *"Add workshop site"* and click **Commit changes**

3. **Enable GitHub Pages**
   - Open the repo's **Settings** tab
   - In the left sidebar, click **Pages**
   - Under **Source**, choose **Deploy from a branch**
   - Pick **Branch: `main`** and **Folder: `/ (root)`**, click **Save**
   - Wait 30–60 seconds — GitHub will show your live URL at the top of the Pages settings

4. **Share the link!** It will be:
   `https://<your-username>.github.io/vibe-apps-workshop/`

### Option B: Command-line path

```bash
# From the folder containing index.html
git init
git add index.html README.md
git commit -m "Add Vibe Apps workshop site"
git branch -M main
git remote add origin https://github.com/<your-username>/vibe-apps-workshop.git
git push -u origin main
```

Then follow step 3 above to enable Pages.

---

## Customizing the site

All customizations happen in `index.html`. Common edits:

### Change your name / agency in the footer
Search for `Brianna Morris` near the bottom of `index.html` and update.

### Add or edit a prompt card
Find any `<div class="prompt-card">` block. Copy it, change the text in both places:
- `data-copy="..."` — the text that gets copied to clipboard
- The `<div class="prompt-body">...</div>` content — what users see

### Change colors
The CSS variables at the top of `<style>` control the theme:
```css
--un-blue: #009EDB;    /* primary accent */
--accent:  #5C2D91;    /* secondary accent (used in hero gradient) */
```

### Add a new section
1. Duplicate any `<section class="block" id="...">...</section>` block
2. Give it a unique `id`
3. Add a matching `<a class="chip" href="#your-id">...</a>` in the section-nav up top

### Add / remove use-case cards
Find the `<div class="usecase-grid">` block under **Build Inspiration**. Each card is a `<div class="usecase">...</div>` — copy/paste/edit.

---

## How to run the workshop with this site

1. **Project the site** on the main screen at the start of the session
2. Walk attendees through **Overview → Prerequisites → Setup**
3. Open <https://vibe.powerapps.com> side-by-side
4. For each step, click the **📋 Copy** button — then paste straight into the Power Apps chat
5. Pause after each major step for questions / troubleshooting
6. If any pair finishes early, point them to **Build Inspiration** to pick a second use case

---

## Design features baked in

- 🎨 Gradient hero using UN Blue → Microsoft purple
- 📋 One-click copy on every prompt card
- 🧭 Sticky section chips for fast navigation
- 💡 Color-coded callouts (Tips, Notes, Warnings)
- 📱 Fully responsive — works on laptops, tablets, phones
- ⬆️ Floating "back to top" button on long scroll
- ♿ Semantic HTML, readable type scale, high-contrast palette

---

## Credits & inspiration

Style inspired by [Jivtesh's Nonprofit AI Workshop](https://jivtesh.github.io/ai/nonprofit_ai_workshop.html). Lab content adapted from *Lab 2 – Vibe Apps in Power Platform – UN Agency Edition*.
