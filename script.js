// popup logic for index.html
(function(){
  const popup = document.getElementById('popup-box');
  const yes = document.getElementById('popupYes');
  const no = document.getElementById('popupNo');
  const viewBtn = document.getElementById('viewWebsite');

  // show popup (after 900ms)
  window.addEventListener('load', ()=> setTimeout(()=> popup.classList.add('show'), 900));

  // show website button too
  viewBtn && viewBtn.addEventListener('click', ()=> {
    // redirect in same tab to website.html
    window.location.href = 'website.html';
  });

  // Yes -> same tab open full site (website.html)
  yes && yes.addEventListener('click', ()=> { popup.classList.remove('show'); window.location.href='website.html'; });

  // No -> close popup
  no && no.addEventListener('click', ()=> popup.classList.remove('show'));
})();
