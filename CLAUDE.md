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

| Directory | Layout | Content |
|-----------|--------|---------|
| `_thoughts/` | thoughts | Personal reflections |
| `_movies/` | movie | Movie reviews with ratings |
| `_playlists/` | playlists | Music playlists |
| `_music/` | music | Album/artist entries |
| `_code/` | code | Code articles and project write-ups |
| `_books/` | books | Book reviews |
| `_wiki/` | wiki | Knowledge base articles |
| `_recipes/` | recipes | Recipes |
| `resume/` | resume | Resume content |

Collections are declared in `_config.yml` with `output: true` and an assigned default layout so collection files don't need to specify a layout in frontmatter.

**Layouts** live in `_layouts/`. Most pages extend `default.html`. The homepage (`index.html`) uses `home.html` which includes a background image. Each collection type has its own layout file that structures how posts are displayed.

**Includes** in `_includes/` are reusable components (navbar, footer, head, about section, etc.) composed into layouts via Liquid `{% include %}` tags.

**Styling** uses SCSS in `_sass/`, compiled by Jekyll. Grid layouts are collection-specific (e.g., `movie-grid.scss`, `thought-grid.scss`). Custom fonts are self-hosted in `assets/fonts/`.

**JavaScript** is minimal — jQuery is loaded via `_includes/jquery.html`.

**Content format**: Markdown files with YAML frontmatter. Common frontmatter fields vary by collection (e.g., `rating` for movies, `time` for thoughts).
