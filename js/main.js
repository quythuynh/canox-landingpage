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

  // Scroll Reveal Animation using Intersection Observer
  var reveals = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window && reveals.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    reveals.forEach(function (el) {
      observer.observe(el)
    })
  } else {
    // Fallback if IntersectionObserver is not supported
    reveals.forEach(function (el) {
      el.classList.add('active')
    })
  }

  // FAQ Accordion Toggle
  var faqTriggers = document.querySelectorAll('.faq-trigger')
  faqTriggers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true'
      var item = btn.closest('.faq-item')
      var content = item.querySelector('.faq-content')
      
      // Close all other items for premium experience
      faqTriggers.forEach(function (otherBtn) {
        if (otherBtn !== btn && otherBtn.getAttribute('aria-expanded') === 'true') {
          otherBtn.setAttribute('aria-expanded', 'false')
          otherBtn.closest('.faq-item').querySelector('.faq-content').style.maxHeight = '0px'
        }
      })

      btn.setAttribute('aria-expanded', !expanded ? 'true' : 'false')
      if (!expanded) {
        content.style.maxHeight = content.scrollHeight + 'px'
      } else {
        content.style.maxHeight = '0px'
      }
    })
  })
})()
