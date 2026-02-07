# Repository Guidelines

## Project Structure & Module Organization
- `_config.yml` holds site-wide settings and must be updated for global metadata.
- `_data/` contains YAML data files (for example `navigation.yml`, `authors.yml`, `ui-text.yml`).
- Content pages live in `_pages/`, while blog posts live in `_posts/`.
- The academic sections are in `_publications/`, `_talks/`, `_teaching/`, and `_portfolio/`.
- Theme building blocks are in `_includes/`, `_layouts/`, and `_sass/`.
- Static assets and downloads are in `assets/`, `images/`, and `files/`.
- Content generators live in `markdown_generator/` and the talk map tooling uses `talkmap.py`.

## Build, Test, and Development Commands
- `bundle install`: installs Ruby/Jekyll dependencies from `Gemfile`.
- `jekyll serve -l -H localhost`: runs the local site at `http://localhost:4000` with live rebuilds.
- `npm run build:js`: minifies theme JavaScript into `assets/js/main.min.js`.
- `npm run watch:js`: rebuilds the minified JS when files under `assets/js/` change.
- `docker build -t jekyll-site .`: builds the containerized dev environment.
- `docker run -p 4000:4000 --rm -v $(pwd):/usr/src/app jekyll-site`: serves the site via Docker.

## Coding Style & Naming Conventions
- YAML uses two-space indentation (see `_config.yml` and `_data/*.yml`).
- Markdown content files should include YAML front matter at the top.
- Blog posts follow `YYYY-MM-DD-title.md` naming in `_posts/` and use kebab-case.
- Keep JavaScript changes in `assets/js/` and rebuild the minified bundle before publishing.

## Testing Guidelines
- There is no automated test suite; validate changes by running `jekyll serve` and checking pages in the browser.
- For content changes, verify navigation, links, and layout rendering on key pages.

## Commit & Pull Request Guidelines
- Recent history uses short, descriptive messages (for example `CV update`). Keep commits concise and specific.
- PRs should describe the change, list any updated pages, and include screenshots for layout or styling edits.
- If a change is intended for the upstream Academic Pages template rather than this site, open an issue/PR there instead of broad refactors here.

## Security & Configuration Tips
- Treat everything in `files/` and `images/` as public; avoid uploading private documents.
- Changes to `_config.yml` require restarting the Jekyll server to take effect.
