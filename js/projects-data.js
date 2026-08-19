// ==========================================================================
// HOSS — project data
//
// This is the ONLY place you need to edit to add, remove, or update a
// project. Each entry becomes one row on its category page, and one
// gallery page (proyecto.html?slug=...).
//
// Fields:
//   slug         unique id used in the URL, e.g. proyecto.html?slug=casa-en-barrio-privado
//   category     "Residential" | "Commercial" | "Hospitality"
//   categoryPage the HTML file for that category's list
//   name         project name shown on the page
//   year         shown next to the name — fill in the real year, "TBD" for now
//   images       how many placeholder gallery tiles to generate.
//                Once you have real photos, replace the gallery rendering
//                in proyecto.html the same way described in README.md for
//                other images — swap the placeholder <div class="ph"> for
//                an <img src="assets/projects/your-photo.jpg">.
//
// To add a project: copy one block below, change the values, done —
// it will automatically appear on its category page and get its own
// gallery. To add a whole new category, also copy one of the
// proyectos-*.html files and add a link to it from proyectos.html.
// ==========================================================================

window.HOSS_PROJECTS = [
  { slug: 'casa-en-barrio-privado',   category: 'Residential',  categoryPage: 'proyectos-residential.html',  name: 'Casa en Barrio Privado', year: 'TBD', images: 6 },
  { slug: 'apartamento-paris-i',      category: 'Residential',  categoryPage: 'proyectos-residential.html',  name: 'Apartamento en París I',  year: 'TBD', images: 5 },
  { slug: 'apartamento-paris-ii',     category: 'Residential',  categoryPage: 'proyectos-residential.html',  name: 'Apartamento en París II', year: 'TBD', images: 5 },

  { slug: 'joyeria-mexicana-paris',   category: 'Commercial',   categoryPage: 'proyectos-commercial.html',   name: 'Boutique de Joyería Mexicana, París', year: 'TBD', images: 6 },

  { slug: 'clubhouse',                category: 'Hospitality',  categoryPage: 'proyectos-hospitality.html',  name: 'Clubhouse', year: 'TBD', images: 6 }
];
