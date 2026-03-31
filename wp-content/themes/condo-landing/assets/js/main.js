/**
 * Condo Landing Page — Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------
     PRELOADER
  ----------------------------------------------- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('hide'), 1400);
    });
  }

  /* -----------------------------------------------
     NAVBAR SCROLL
  ----------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  const handleNavScroll = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* -----------------------------------------------
     HAMBURGER MENU
  ----------------------------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-menu');
  hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close on link click
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
      hamburger?.classList.remove('active');
    });
  });

  /* -----------------------------------------------
     SMOOTH SCROLL
  ----------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* -----------------------------------------------
     SCROLL REVEAL
  ----------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });

  /* -----------------------------------------------
     COUNTER ANIMATION
  ----------------------------------------------- */
  const animateCounter = (el, target, suffix = '') => {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 20);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

  /* -----------------------------------------------
     GALLERY TABS (filter)
  ----------------------------------------------- */
  const tabs  = document.querySelectorAll('.gallery-tab');
  const items = document.querySelectorAll('.gallery-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      items.forEach(item => {
        if (filter === 'all' || item.dataset.cat === filter) {
          item.style.display = '';
          setTimeout(() => item.style.opacity = '1', 10);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.style.display = 'none', 300);
        }
      });
    });
  });

  /* -----------------------------------------------
     BACK TO TOP
  ----------------------------------------------- */
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* -----------------------------------------------
     FORM SUBMIT (demo)
  ----------------------------------------------- */
  const contactForm = document.querySelector('.contact-form form');
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = contactForm.querySelector('.btn-submit');
    const span = btn.querySelector('span');

    btn.disabled = true;
    span.textContent = '⏳ กำลังส่ง...';

    setTimeout(() => {
      span.textContent = '✅ ส่งสำเร็จ! เราจะติดต่อกลับเร็วๆ นี้';
      btn.style.background = 'linear-gradient(135deg, #2e7d32, #43a047)';
      contactForm.reset();

      setTimeout(() => {
        btn.disabled = false;
        span.textContent = '📩 ส่งข้อมูลและนัดชมโครงการ';
        btn.style.background = '';
      }, 4000);
    }, 1800);
  });

});
