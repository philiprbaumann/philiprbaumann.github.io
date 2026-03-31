# TODO

## Content & Privacy
- [ ] Obfuscate birthday in `_thoughts/apr-19-2022.md` (currently reveals April 17 + age 25 in 2022, reconstructing ~1997 birth year)
- [ ] Remove cat's name from `_thoughts/feb-08-2022.md` (pet names are commonly used in security questions)
- [ ] Add *Project Hail Mary* — note: entry already exists in `_books/ProjectHailMary.md`, may just need review/update
- [ ] Add *The Stormlight Archive* to books (`_books/`)
- [ ] Add Stranger Things to the site — decide: extend movies collection to TV, or create a new `_tv/` collection
- [ ] Add a board games section — new `_boardgames/` collection with its own layout, similar to movies or books

## Mobile Rendering
- [ ] Fix movie grid: currently 4 columns with no mobile breakpoints — broken on phones (`_sass/movie-grid.scss`)
- [ ] Fix navigation touch targets: nav items are 30px tall, minimum is 44px (`assets/styles/main.scss`)
- [ ] Add mobile breakpoints to thought, wiki, music, and playlist grids (none currently exist)
- [ ] Fix about-grid breakpoint: currently triggers at 1200px, should be ~768px (`_sass/about-grid.scss`)
- [ ] Wrap Spotify embeds in responsive containers (`_layouts/playlist.html`)
- [ ] Add a hamburger/collapse menu for mobile navigation
- [ ] Fix wiki cards: fixed 300px width overflows on small screens (`_sass/wiki-list.scss`)
- [ ] Fix image grid: 3 columns with no mobile fallback (`_sass/site-image.scss`)

## Design & Usability
- [ ] Run a dedicated Claude Code session to review and improve overall visual flow, typography, spacing, and presentation across all collection types
