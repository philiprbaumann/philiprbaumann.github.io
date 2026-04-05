# TODO

## Content & Privacy
- [x] Obfuscate birthday in `_thoughts/apr-19-2022.md` (currently reveals April 17 + age 25 in 2022, reconstructing ~1997 birth year)
- [x] Remove cat's name from `_thoughts/feb-08-2022.md` (pet names are commonly used in security questions)
- [x] Add *Project Hail Mary* — entry exists and is complete
- [x] Add *The Stormlight Archive* to books (`_books/`) — stub created, add your review
- [x] Add Stranger Things to the site — created `_tv/` collection with its own index + item layouts; Stranger Things stub added
- [x] Add a board games section — `_boardgames/` collection created with card grid + individual item layouts; add your entries to `_boardgames/`

## Mobile Rendering
- [x] Fix movie grid: currently 4 columns with no mobile breakpoints — broken on phones (`_sass/movie-grid.scss`)
- [x] Fix navigation touch targets: nav items are 30px tall, minimum is 44px (`assets/styles/main.scss`)
- [x] Add mobile breakpoints to thought, wiki, music, and playlist grids (none currently exist)
- [x] Fix about-grid breakpoint: currently triggers at 1200px, should be ~768px (`_sass/about-grid.scss`)
- [x] Wrap Spotify embeds in responsive containers (`_layouts/playlist.html`)
- [x] Add a hamburger/collapse menu for mobile navigation
- [x] Fix wiki cards: fixed 300px width overflows on small screens (`_sass/wiki-list.scss`)
- [x] Fix image grid: 3 columns with no mobile fallback (`_sass/site-image.scss`)

## Recipes — Enhanced Format
- [x] Add structured frontmatter to all recipe files: `time`, `servings`, `tags` — done for all 3 recipes
- [x] Recipe card: show title + time + tags as visual chips — done
- [x] Recipe index: switched from entry-list to card grid — `recipe-card-grid` with title, time/servings, tags, and excerpt
- [x] Individual recipe page: ingredients sidebar (from frontmatter) + instructions column — two-column on desktop, stacked on mobile
- [x] Add a `tags` filter on the index — jQuery filter bar, tags collected dynamically from frontmatter
- [x] Equipment field added (`equipment:` frontmatter, shown in meta line)

## Playlists — Journey Timeline
- [ ] Redesign the playlist page as an interactive horizontal scroll — each playlist is a stop on a continuous winding path
- [ ] The path should meander up and down organically (SVG or CSS-drawn line), loosely mimicking the rhythm of a life lived — not perfectly straight, not random noise
- [ ] Each stop on the line: playlist title, Spotify embed, and 1–2 sentences of personal context for that playlist
- [ ] Add bullet-point "life events" scattered along the path between playlists (e.g. "started college", "moved to NYC") as small labeled markers
- [ ] Add more playlists with personal descriptions to populate the timeline — currently `_playlists/` has entries but most lack a `description` field; add that to the frontmatter schema
- [ ] Mobile: collapse to vertical scroll with the same winding-path aesthetic

## Design & Usability
- [ ] Run a dedicated Claude Code session to review and improve overall visual flow, typography, spacing, and presentation across all collection types
