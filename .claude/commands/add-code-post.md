Add a new code article to the Jekyll site at the current working directory.

The user will provide: article title, body content. Optionally a date (defaults to today in YYYY-MM-DD).

If the user hasn't provided these details, ask for them before proceeding.

Steps:
1. Create a new file in `_code/` named `<title-with-hyphens>.md` (lowercase, hyphenated)
2. Use this exact frontmatter format (no `layout` field — it is set by default in `_config.yml`):
```
---
title: Article Title
date: YYYY-MM-DD
---
```
3. Add the article body below the frontmatter. Code articles typically use:
   - Prose paragraphs
   - Markdown code blocks (triple backticks with language identifier)
   - Numbered or bulleted lists for steps
   - Blockquotes for notable quotes
4. Confirm the file was created and show the user the content

$ARGUMENTS
