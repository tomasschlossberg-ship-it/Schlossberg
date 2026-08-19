// ==========================================================================
// HOSS — shared site behavior
// ==========================================================================

// Footer year
document.querySelectorAll('#year').forEach(function(el){
  el.textContent = new Date().getFullYear();
});

// Nav: solid background after scrolling past the hero
var nav = document.getElementById('nav');
function onScroll(){
  if(!nav) return;
  if(window.scrollY > 40){ nav.classList.add('is-scrolled'); }
  else{ nav.classList.remove('is-scrolled'); }
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// Mobile nav toggle
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', function(){
    navToggle.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navToggle.classList.remove('is-open');
      navLinks.classList.remove('is-open');
    });
  });
}

// Contact form: placeholder submit handling.
// Replace this with a real endpoint (Formspree, Resend, your own API route, etc.)
// See README.md for setup instructions.
var contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    var note = document.getElementById('formNote');
    if(note){
      note.textContent = "Thanks — this form doesn't send real emails yet. Connect it following README.md.";
    }
  });
}

// Home hero slideshow: cycles through .hero-slide elements automatically.
// Add or remove slides freely in the HTML — this reads whatever is there.
var heroSlides = document.querySelectorAll('#heroSlides .hero-slide');
if(heroSlides.length > 1){
  var currentSlide = 0;
  setInterval(function(){
    heroSlides[currentSlide].classList.remove('is-active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('is-active');
  }, 5000);
}

// Single-project gallery page (proyecto.html?slug=...).
// Reads the project from projects-data.js and builds the page.
// See js/projects-data.js to add/edit projects — nothing here needs editing.
var projectCover = document.getElementById('projectCover');
if(projectCover && window.HOSS_PROJECTS){
  var slug = new URLSearchParams(window.location.search).get('slug');
  var project = window.HOSS_PROJECTS.find(function(p){ return p.slug === slug; });

  var nameEl = document.getElementById('projectName');
  var metaEl = document.getElementById('projectMeta');
  var backEl = document.getElementById('backLink');
  var galleryEl = document.getElementById('projectGallery');
  var titleEl = document.getElementById('pageTitle');

  if(project){
    if(titleEl) titleEl.textContent = project.name + ' — Hoss';
    if(nameEl) nameEl.textContent = project.name;
    if(metaEl) metaEl.textContent = project.year + ' — ' + project.category;
    if(backEl){ backEl.href = project.categoryPage; backEl.textContent = '← ' + project.category; }

    projectCover.innerHTML = '<div class="ph"><span class="ph-label">Cover image — replace</span></div>';

    if(galleryEl){
      var html = '';
      for(var i = 1; i <= project.images; i++){
        html += '<div><div class="ph"><span class="ph-label">Image ' + i + ' — replace</span></div></div>';
      }
      galleryEl.innerHTML = html;
    }
  } else {
    if(nameEl) nameEl.textContent = 'Project not found';
    if(metaEl) metaEl.textContent = '';
    projectCover.innerHTML = '';
  }
}
