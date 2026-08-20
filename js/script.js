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
    if(metaEl){
      var metaText = project.year + ' — ' + project.category;
      if(project.location) metaText += ' — ' + project.location;
      metaEl.textContent = metaText;
    }
    if(backEl){ backEl.href = project.categoryPage; backEl.textContent = '← ' + project.category; }

    // Cover: real photo if supplied, otherwise a placeholder.
    if(project.cover){
      projectCover.innerHTML = '<img src="' + project.cover + '" alt="' + project.name + '">';
    } else {
      projectCover.innerHTML = '<div class="ph"><span class="ph-label">Cover image — replace</span></div>';
    }

    // Gallery: real photos if supplied, otherwise placeholder tiles
    // based on the "images" count.
    if(galleryEl){
      var html = '';
      if(project.gallery && project.gallery.length){
        project.gallery.forEach(function(src){
          html += '<div><img src="' + src + '" alt="' + project.name + '"></div>';
        });
      } else {
        for(var i = 1; i <= (project.images || 0); i++){
          html += '<div><div class="ph"><span class="ph-label">Image ' + i + ' — replace</span></div></div>';
        }
      }
      galleryEl.innerHTML = html;
    }
  } else {
    if(nameEl) nameEl.textContent = 'Project not found';
    if(metaEl) metaEl.textContent = '';
    projectCover.innerHTML = '';
  }

  // "More from [category]" — flows the gallery straight into the rest
  // of the category instead of forcing an auto-scroll.
  if(project){
    var moreGrid = document.getElementById('moreProjectsGrid');
    var moreTitle = document.getElementById('moreProjectsTitle');
    var moreSection = document.getElementById('moreProjectsSection');
    var others = window.HOSS_PROJECTS.filter(function(p){
      return p.category === project.category && p.slug !== project.slug;
    });

    if(moreTitle) moreTitle.textContent = 'More ' + project.category;

    if(others.length && moreGrid){
      var moreHtml = '';
      others.forEach(function(p, i){
        var img = p.cover ? '<img src="' + p.cover + '" alt="' + p.name + '">' : '<div class="ph"><span class="ph-label">Cover image</span></div>';
        var tileClass = others.length === 1 ? 'tile-a' : (i % 2 === 0 ? 'tile-c' : 'tile-b');
        moreHtml += '<article class="tile ' + tileClass + '">' +
          '<a href="proyecto.html?slug=' + p.slug + '">' +
          '<div class="tile-frame">' + img + '</div>' +
          '<div class="tile-cap"><h3>' + p.name + '</h3><span class="meta">' + p.year + '</span></div>' +
          '</a></article>';
      });
      moreGrid.innerHTML = moreHtml;
    } else if(moreSection){
      // No other projects in this category yet — hide the section
      // rather than show an empty grid.
      moreSection.style.display = 'none';
    }
  }
}
