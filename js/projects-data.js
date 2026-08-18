// ==========================================================================
// SCHLOSSBERG — project data
//
// This is the ONLY place you need to edit to add, remove, or update a
// project. Each entry becomes one row on its city page, and one gallery
// page (proyecto.html?slug=...).
//
// Fields:
//   slug      unique id used in the URL, e.g. proyecto.html?slug=casa-retiro
//   city      "Paris" | "Buenos Aires" | "Punta del Este"
//   cityPage  the HTML file for that city's list
//   name      project name shown on the page
//   year      shown next to the name
//   images    how many placeholder gallery tiles to generate.
//             Once you have real photos, replace the gallery rendering
//             in proyecto.html the same way described in README.md for
//             other images — swap the placeholder <div class="ph"> for
//             an <img src="assets/projects/your-photo.jpg">.
//
// To add a project: copy one block below, change the values, done —
// it will automatically appear on its city page and get its own gallery.
// ==========================================================================

window.SCHLOSSBERG_PROJECTS = [
  { slug: 'appartement-marais',            city: 'Paris',           cityPage: 'proyectos-paris.html',           name: 'Appartement Marais',            year: '2023', images: 5 },
  { slug: 'hotel-particulier-le-marais',   city: 'Paris',           cityPage: 'proyectos-paris.html',           name: 'Hôtel Particulier Le Marais',   year: '2022', images: 6 },
  { slug: 'loft-canal-saint-martin',       city: 'Paris',           cityPage: 'proyectos-paris.html',           name: 'Loft Canal Saint-Martin',       year: '2020', images: 4 },

  { slug: 'casa-costanera',                city: 'Buenos Aires',    cityPage: 'proyectos-buenos-aires.html',    name: 'Casa Costanera',                year: '2023', images: 5 },
  { slug: 'penthouse-recoleta',            city: 'Buenos Aires',    cityPage: 'proyectos-buenos-aires.html',    name: 'Penthouse Recoleta',            year: '2021', images: 5 },

  { slug: 'casa-retiro',                   city: 'Punta del Este',  cityPage: 'proyectos-punta-del-este.html',  name: 'Casa Retiro',                   year: '2024', images: 6 },
  { slug: 'villa-jose-ignacio',            city: 'Punta del Este',  cityPage: 'proyectos-punta-del-este.html',  name: 'Villa José Ignacio',            year: '2022', images: 5 },
  { slug: 'casa-la-barra',                 city: 'Punta del Este',  cityPage: 'proyectos-punta-del-este.html',  name: 'Casa La Barra',                 year: '2021', images: 4 }
];
