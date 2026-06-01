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

  // Scroll Reveal & Stagger Animation using Intersection Observer
  var reveals = document.querySelectorAll('.reveal')
  
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          
          // Trigger count up if this section contains count-up elements
          var counters = entry.target.querySelectorAll('.count-up')
          if (counters.length > 0) {
            counters.forEach(function (counter) {
              if (!counter.classList.contains('counted')) {
                counter.classList.add('counted')
                var target = parseInt(counter.getAttribute('data-target'), 10)
                var count = 0
                var speed = 2000 / target // 2 seconds total duration
                var updateCount = function () {
                  var increment = target / 50
                  if (count < target) {
                    count += increment
                    counter.innerText = Math.ceil(count)
                    setTimeout(updateCount, 30)
                  } else {
                    counter.innerText = target
                  }
                }
                updateCount()
              }
            })
          }
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
    // Fallback
    reveals.forEach(function (el) {
      el.classList.add('active')
      el.querySelectorAll('.count-up').forEach(function (counter) {
        counter.innerText = counter.getAttribute('data-target')
      })
    })
  }

  // Back to Top Button Behavior & Scrollspy
  var backToTopBtn = document.getElementById('back-to-top')
  var navLinks = document.querySelectorAll('.nav-desktop a')
  var sections = document.querySelectorAll('section[id]')

  window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY
    
    // Back to top show/hide
    if (backToTopBtn) {
      if (scrollPos > 300) {
        backToTopBtn.classList.add('show')
      } else {
        backToTopBtn.classList.remove('show')
      }
    }

    // Scrollspy: active nav links
    sections.forEach(function (sec) {
      var top = sec.offsetTop - 120
      var height = sec.offsetHeight
      var id = sec.getAttribute('id')

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active')
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active')
          }
        })
      }
    })
  }, { passive: true })

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
