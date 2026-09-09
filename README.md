# Writing Portfolio — Nehansh Kesharwani

A small editorial site collecting writing for **NPTEL Stories**, **IIT Madras BS Insider**, and **Veritas Speaking Digest**.

This is a static site designed to be published as a GitHub Pages **project site**, with the website served from the `writing-portfolio` repository path.

## Live URL

https://nehanshkesharwani.github.io/writing-portfolio/

## Repository

`writing-portfolio`

## Project structure

The website files sit directly at the root of the repository:

```text
writing-portfolio/
├── .nojekyll
├── README.md
├── favicon.svg
├── index.html
├── robots.txt
├── assets/
├── bsinsider/
├── nptel/
└── veritas/
```

### Main pages

| Section                 | File                   |
| ----------------------- | ---------------------- |
| Homepage                | `index.html`           |
| NPTEL Stories           | `nptel/index.html`     |
| BS Insider              | `bsinsider/index.html` |
| Veritas Speaking Digest | `veritas/index.html`   |
| Shared styles           | `assets/css/style.css` |
| Navigation script       | `assets/js/main.js`    |

## Publishing with GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select the `main` branch.
4. Select `/ (root)` as the folder.
5. Click **Save**.
6. After deployment, the site will be available at:

   `https://nehanshkesharwani.github.io/writing-portfolio/`

GitHub Pages serves:

* `index.html` at `/writing-portfolio/`
* `nptel/index.html` at `/writing-portfolio/nptel/`
* `bsinsider/index.html` at `/writing-portfolio/bsinsider/`
* `veritas/index.html` at `/writing-portfolio/veritas/`

Keep these files and folders at the repository root. Do not place them inside another `writing-portfolio/` directory.

## Local preview

From the project folder, run:

```bash
python3 -m http.server 8080
```

Then open:

`http://localhost:8080/`

## Updating the portfolio

When a completed story is published:

1. Copy an existing published `<article class="story">` block.
2. Add the exact title, date, and live URL.
3. Remove that title from the **Awaiting publication** list.
4. Update the count shown in the page header if the numbers change.

Do not invent URLs or publication dates.

## Canonical URLs

Each page sets its canonical URL and `og:url` for the GitHub Pages project site:

```text
https://nehanshkesharwani.github.io/writing-portfolio/
```

The corresponding `/nptel/`, `/bsinsider/`, and `/veritas/` paths are used for their respective pages.

If the repository is renamed, the site moves to a custom domain, or the site structure changes, update these URLs in all four HTML pages.

Relative links and assets are structured for GitHub Pages project-site deployment.

## Notes

* External stories open in a new tab.
* The site remains readable without JavaScript.
* On smaller screens, JavaScript progressively enhances the navigation into a menu.
* The navigation supports keyboard interaction, including Escape to close the menu.
* The design intentionally uses typography, whitespace, paper-like tones, and thin rules rather than stock photography or decorative effects.
