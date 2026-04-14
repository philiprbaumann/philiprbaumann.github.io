# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bundle install              # Install dependencies
bundle exec jekyll serve    # Serve locally with live reload at http://localhost:4000
bundle exec jekyll build    # Build static site to _site/
```

There are no tests or linters configured for this project.

## Architecture

Personal portfolio/digital garden site built with Jekyll 4.2 (Ruby), hosted on GitHub Pages at philiprbaumann.com.

**Collections** — the primary content model. Each collection has its own directory and layout:

| Directory | Layout | Key frontmatter |
|-----------|--------|-----------------|
| `_thoughts/` | `thought` | `title`, `time` (display date e.g. "Apr. 2022"), `date` |
| `_movies/` | `movie-item` | `title`, `rating` (e.g. "7/10") |
| `_playlists/` | `playlist` | `title`, `story` |
| `_music/` | `music-item` | `title` |
| `_code/` | `code-item` | `title`, `date` |
| `_books/` | `book-item` | `title`, `author`, `date` |
| `_wiki/` | `wiki` | `title` |
| `_recipes/` | `recipe-item` | `title`, `time`, `servings`, `tags`, `equipment`, `ingredients` |
| `_tv/` | `tv-item` | `title`, `rating` (e.g. "★★★★"), `date` |
| `_boardgames/` | `boardgame-item` | `title` |
| `resume/` | `resume` | — |

Collections are declared in `_config.yml` with `output: true` and an assigned default layout so collection files don't need to specify a layout in frontmatter. **Restart `jekyll serve` after editing `_config.yml`** — it is not hot-reloaded.

**Layouts** live in `_layouts/`. Most pages extend `default.html`. The homepage (`index.html`) uses `home.html` which includes a background image. Each collection type has its own layout file that structures how posts are displayed.

**Includes** in `_includes/` are reusable components (navbar, footer, head, about section, etc.) composed into layouts via Liquid `{% include %}` tags.

**Styling** uses SCSS in `_sass/`, compiled by Jekyll. Grid layouts are collection-specific (e.g., `movie-grid.scss`, `thought-grid.scss`). Custom fonts are self-hosted in `assets/fonts/`.

**JavaScript** is minimal — jQuery is loaded via `_includes/jquery.html`.

**Content format**: Markdown files with YAML frontmatter. Fields vary by collection; see the table above. Each collection also has a corresponding index page under a matching top-level directory (e.g. `movies/index.html`, `wiki/index.html`) that lists all items in that collection.

**Utility scripts**: `fetch_playlist_covers.rb` — fetches cover art for playlists from Spotify.
