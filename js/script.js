// ==========================================================================
// SCHLOSSBERG — shared site behavior
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

// Projects page: filter grid by city
var filters = document.getElementById('filters');
var grid = document.getElementById('grid');
if(filters && grid){
  var buttons = filters.querySelectorAll('button');
  var tiles = grid.querySelectorAll('.tile');
  filters.addEventListener('click', function(e){
    var btn = e.target.closest('button');
    if(!btn) return;
    buttons.forEach(function(b){ b.classList.remove('is-active'); });
    btn.classList.add('is-active');
    var filter = btn.getAttribute('data-filter');
    tiles.forEach(function(tile){
      var show = filter === 'all' || tile.getAttribute('data-city') === filter;
      tile.style.display = show ? '' : 'none';
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
      note.textContent = 'Gracias — este formulario todavía no envía emails de verdad. Conectalo siguiendo el README.md.';
    }
  });
}
