// script.js
document.addEventListener('DOMContentLoaded', function () {
  (function () {
    var toggle = document.getElementById('menuToggle');
    var mobileNav = document.getElementById('mobileNav');
    if (!toggle || !mobileNav) return;

      function setOpen(open){
  document.body.classList.toggle('nav-open', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  if(open){ mobileNav.removeAttribute('hidden'); } else { mobileNav.setAttribute('hidden',''); }
}

    toggle.addEventListener('click', function (e) {
      // prevent the document click handler (below) from immediately closing it
      e.stopPropagation();
      setOpen(!document.body.classList.contains('nav-open'));
    });

    document.addEventListener('click', function (e) {
      if (!document.body.classList.contains('nav-open')) return;
      if (!mobileNav.contains(e.target) && e.target !== toggle) setOpen(false);
    });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) setOpen(false); });

    var FORM_URL = "https://square.site/appointments/buyer/widget/sn4cy8jiz3eqzp/LR5XBVY2DBV83";
    ['#inquiry', '#inquiryBtn', '#inquiryBtnHero', '#inquiryBtnStripe', '#inquiryBtnMobile'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) {
        el.setAttribute('href', FORM_URL);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener');
      }
    });
  })();
});


