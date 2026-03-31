Add a new recipe to the Jekyll site at the current working directory.

The user will provide: recipe title, an ingredients list, and step-by-step instructions. Optionally a short intro paragraph.

If the user hasn't provided these details, ask for them before proceeding.

Steps:
1. Create a new file in `_recipes/` named `<title-with-hyphens>.md` (lowercase, hyphenated)
2. Use this exact frontmatter format (no `layout` field — it is set by default in `_config.yml`):
```
---
title: Recipe Title
---
```
3. Format the body as:
   - Optional intro paragraph
   - `Ingredients -` followed by a markdown unordered list
   - `Here are the steps to make it:` followed by a markdown numbered list
4. Confirm the file was created and show the user the content

$ARGUMENTS
