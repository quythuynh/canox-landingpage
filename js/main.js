(function () {
  var toggle = document.querySelector('.menu-toggle')
  var mobileNav = document.querySelector('.nav-mobile')
  var siteHeader = document.getElementById('site-header')

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open')
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
      toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu')
    })

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open')
        toggle.setAttribute('aria-expanded', 'false')
        toggle.setAttribute('aria-label', 'Mở menu')
      })
    })
  }

  if (siteHeader) {
    function onScroll() {
      siteHeader.classList.toggle('is-scrolled', window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  }
})()
