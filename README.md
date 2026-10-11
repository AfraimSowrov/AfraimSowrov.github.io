# Portfolio site (skeleton)

Plain HTML/CSS/JS. No build step, $0 hosting on GitHub Pages.

## Go live
1. Create a public GitHub repo named `YOUR-USERNAME.github.io`.
2. Upload every file and folder from this project (unzipped) to the repo root.
3. Repo Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Open `https://YOUR-USERNAME.github.io` after a minute or two.

## Fill in first (all in `data/site-data.js`)
- `github`, `linkedin`, `email` (empty links stay hidden)
- Add your CV PDF as `assets/cv.pdf`
- Check `skills`, `bio`, `experience` for accuracy; delete anything you can't back up

## Add a project
Copy the template comment in `data/site-data.js` into `projects`, fill only what you have. Empty sections are hidden. Set `status` to `planned`, `in-progress` or `complete`. Label simulations with `kind: "Simulation"`.

## Add papers or reports
Push entries into `publications`, `reports` or `presentations`: `{ title, authors, venue, year, url }`.

## Files
- `data/site-data.js`: all content
- `assets/site.js`: page layouts (shared header, footer, all pages)
- `assets/style.css`: design, automatic light/dark
- `*.html`: thin page shells

## Custom domain later
Add a `CNAME` file containing your domain and set it under Settings > Pages. No code changes needed.
