Fix mobile responsiveness issues across the Jekyll site at the current working directory.

Known problem areas (work through all of these):
1. `_sass/movie-grid.scss` — 4-column grid with no mobile breakpoints
2. `assets/styles/main.scss` — nav touch targets are 30px, minimum should be 44px
3. `_sass/thought-grid.scss`, `_sass/wiki-list.scss`, `_sass/site-image.scss` — grids with no mobile breakpoints
4. `_sass/about-grid.scss` — breakpoint triggers at 1200px, should be ~768px
5. `_layouts/playlist.html` — Spotify embeds need responsive containers
6. `_sass/wiki-list.scss` — wiki cards have fixed 300px width that overflows on small screens
7. `_sass/site-image.scss` — 3-column image grid with no mobile fallback
8. Navigation — needs a hamburger/collapse menu for mobile

For each fix:
- Read the current file before editing
- Add mobile breakpoints using `@media (max-width: 768px)` as the standard breakpoint
- Keep desktop styles unchanged
- Use a single-column layout as the mobile fallback for grids
- For the hamburger menu, add minimal JS toggle — keep it simple

Work through each file systematically. If the user passes a specific file or issue as an argument, fix only that.

$ARGUMENTS
