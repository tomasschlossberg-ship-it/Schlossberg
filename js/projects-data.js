// ==========================================================================
// HOSS — project data
//
// This is the ONLY place you need to edit to add, remove, or update a
// project. Each entry becomes one row on its category page, and one
// gallery page (proyecto.html?slug=...).
//
// Fields:
//   slug         unique id used in the URL, e.g. proyecto.html?slug=paris-5
//   category     "Residential" | "Commercial" | "Hospitality"
//   categoryPage the HTML file for that category's list
//   name         project name shown on the page
//   year         shown next to the name — fill in the real year, "TBD" for now
//
//   Two ways to supply photos for a project:
//
//   A) You HAVE real photos:
//      cover    path to the cover image, e.g. 'assets/projects/paris-5/cover.jpg'
//      gallery  array of image paths for the gallery grid
//      video    optional — path to a vertical video, shown full-size
//               above the gallery grid, no cropping/letterboxing.
//               Keep it an .mp4 (H.264) for the widest browser support —
//               a .mov from an iPhone needs converting first.
//
//   B) You DON'T have photos yet:
//      images   how many placeholder gallery tiles to generate.
//      (omit "cover"/"gallery" — proyecto.html falls back to placeholders)
//
// To add a project: copy one block below, change the values, done —
// it will automatically appear on its category page and get its own
// gallery. To add a whole new category, also copy one of the
// proyectos-*.html files and add a link to it from proyectos.html.
// ==========================================================================

window.HOSS_PROJECTS = [
  { slug: 'casa-en-barrio-privado', category: 'Residential', categoryPage: 'proyectos-residential.html', name: 'Casa en Barrio Privado', year: 'TBD', images: 6 },

  {
    slug: 'paris-5',
    category: 'Residential',
    categoryPage: 'proyectos-residential.html',
    name: 'Paris 5',
    location: 'Jardin des Plantes',
    year: 'TBD',
    cover: 'assets/projects/paris-5/cover.jpg',
    video: 'assets/projects/paris-5/video.mp4',
    gallery: [
      'assets/projects/paris-5/01-living-beams-kitchen.jpg',
      'assets/projects/paris-5/02-living-shelf.jpg',
      'assets/projects/paris-5/03-kitchen-island.jpg',
      'assets/projects/paris-5/04-kitchen-marble-dark.jpg',
      'assets/projects/paris-5/05-hallway.jpg',
      'assets/projects/paris-5/06-bathroom.jpg',
      'assets/projects/paris-5/07-bedroom.jpg'
    ]
  },

  { slug: 'apartamento-paris-ii', category: 'Residential', categoryPage: 'proyectos-residential.html', name: 'Apartamento en París II', year: 'TBD', images: 5 },

  { slug: 'joyeria-mexicana-paris', category: 'Commercial', categoryPage: 'proyectos-commercial.html', name: 'Boutique de Joyería Mexicana, París', year: 'TBD', images: 6 },

  { slug: 'clubhouse', category: 'Hospitality', categoryPage: 'proyectos-hospitality.html', name: 'Clubhouse', year: 'TBD', images: 6 }
];
