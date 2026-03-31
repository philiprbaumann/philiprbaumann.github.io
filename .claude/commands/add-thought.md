Add a new thought/journal entry to the Jekyll site at the current working directory.

The user will provide: title and the body text. Optionally a date (defaults to today) and a "time" display string (e.g. "Mar. 30 2026").

If the user hasn't provided these details, ask for them before proceeding.

Steps:
1. Create a new file in `_thoughts/` named `<mmm-dd-yyyy>.md` (e.g. `mar-30-2026.md`)
2. Use this exact frontmatter format (no `layout` field — it is set by default in `_config.yml`):
```
---
title: "Title Here"
time: "Mon. DD YYYY"
date: YYYY-MM-DD
---
```
3. Add the body text below the frontmatter
4. Confirm the file was created and show the user the content

$ARGUMENTS
