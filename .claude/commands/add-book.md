Add a new book entry to the Jekyll site at the current working directory.

The user will provide: book title, author name, and review/notes text. Optionally a date (defaults to today's date in YYYY-MM-DD format).

If the user hasn't provided these details, ask for them before proceeding.

Steps:
1. Create a new file in `_books/` named `<TitleNoSpaces>.md` (PascalCase, no hyphens)
2. Use this exact frontmatter format (no `layout` field — it is set by default in `_config.yml`):
```
---
title: "Book Title"
author: Author Name
date: YYYY-MM-DD
---
```
3. Add the review/notes text below the frontmatter (prose, no heading)
4. Confirm the file was created and show the user the content

$ARGUMENTS
