Add a new movie review to the Jekyll site at the current working directory.

The user will provide: movie title, rating (e.g. 8/10), and optionally some review text.

If the user hasn't provided these details, ask for them before proceeding.

Steps:
1. Create a new file in `_movies/` named `<Title-With-Hyphens>.md`
2. Use this exact frontmatter format (no `layout` field — it is set by default in `_config.yml`):
```
---
title: "Movie Title"
rating: X/10
---
```
3. Add the review text below the frontmatter (no heading, just prose)
4. Confirm the file was created and show the user the content

File naming: title-cased words separated by hyphens, no special characters except hyphens (e.g. "The Dark Knight" → `The-Dark-Knight.md`).

$ARGUMENTS
