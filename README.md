# Writing Portfolio — Nehansh Kesharwani

A small editorial site collecting writing for **NPTEL Stories**, **IIT Madras BS Insider**, and **Veritas Speaking Digest**.

It is a static site, built to be published as a GitHub Pages **project site** (a site that lives under a repository path, not at the domain root).

## Expected live URL

```text
https://nehanshkeshwarni.github.io/writing-portfolio/
```

If the repository name is different, GitHub Pages will use that name as the path instead.

## Repository name

`writing-portfolio`

## How to publish

The files in this folder (`index.html`, `nptel/`, `bsinsider/`, `veritas/`, `assets/`, `favicon.svg`, `robots.txt`) should sit at the **root of the GitHub repository**. Do not nest them inside an extra `writing-portfolio/` directory in the repo.

1. Create a GitHub repository named `writing-portfolio` on the account that should host the site (the URL above assumes `nehanshkeshwarni`).
2. Upload or push these files to the `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set the branch to `main` and the folder to `/ (root)`.
6. Save, wait a minute, and open the live URL.

GitHub Pages will serve `index.html` at the repository path, `nptel/index.html` at `/nptel/`, and so on.

A typical sequence from this folder:

```bash
git init
git add .
git commit -m "Add writing portfolio"
git branch -M main
git remote add origin git@github.com:nehanshkeshwarni/writing-portfolio.git
git push -u origin main
```

Use the GitHub username and repository that you actually own.

## Local preview

From this folder:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080/](http://localhost:8080/).

To check the GitHub Pages subpath locally, serve the parent directory instead and visit `/writing-portfolio/`.

## How to update content later

| Work | File |
| --- | --- |
| Homepage | `index.html` |
| NPTEL Stories | `nptel/index.html` |
| BS Insider | `bsinsider/index.html` |
| Veritas Speaking Digest | `veritas/index.html` |
| Shared styles | `assets/css/style.css` |
| Navigation script | `assets/js/main.js` |

When a completed story is published:

1. Copy an existing published `<article class="story">` block.
2. Add the exact title, date (if there is one), and live URL.
3. Remove that title from the “Awaiting publication” list.
4. Update the quiet count line in the page header if the numbers change.

Do not invent URLs or dates.

### Canonical URLs

Each page sets `<link rel="canonical">` and `og:url` to:

```text
https://nehanshkeshwarni.github.io/writing-portfolio/
```

(and the matching `/nptel/`, `/bsinsider/`, `/veritas/` paths).

If the site moves — a renamed repository, a custom domain, or a user-site root — update those tags on all four HTML pages. Relative links and assets do not need to change; they are path-safe for a project site.

## Notes

- External stories open in a new tab.
- The site is readable without JavaScript. On small screens, JavaScript progressively enhances the header into a menu (Escape to close, `aria-expanded`, `aria-current`).
- No photographs are required. The design is type, paper, and rules.
