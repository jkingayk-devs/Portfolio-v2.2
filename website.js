// website.js - smooth scroll + theme toggle
(function(){
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // theme toggle (persist)
  const themeSwitch = document.getElementById('themeSwitch');
  const saved = localStorage.getItem('jk_site_theme');
  if(saved === 'light') document.body.classList.add('light-theme');

  themeSwitch && themeSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('jk_site_theme', isLight ? 'light' : 'dark');
  });
})();
