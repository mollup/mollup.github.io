/**
 * MatchPoint Landing Page — main.js
 * Handles: signup form, nav scroll state, scroll-in animations
 */
(function () {
  'use strict';

  // ---- 1. Sticky nav shadow on scroll ----
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.style.borderBottomColor = window.scrollY > 10
        ? 'rgba(124,58,237,0.25)'
        : 'rgba(255,255,255,0.08)';
    }, { passive: true });
  }

  // ---- 2. Signup form — basic validation ----
  var form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = document.getElementById('emailInput');
      var email = emailInput ? emailInput.value.trim() : '';

      if (!isValidEmail(email)) {
        if (emailInput) {
          emailInput.classList.add('error');
          emailInput.focus();
          emailInput.setAttribute('aria-invalid', 'true');
        }
        return;
      }

      if (emailInput) {
        emailInput.classList.remove('error');
        emailInput.setAttribute('aria-invalid', 'false');
      }

      // Log submission event (swap for real API call in production)
      console.log('[MatchPoint] Waitlist signup', {
        email: email,
        variant: window.MP_AB_VARIANT || 'unknown',
      });

      // Optimistic confirmation
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = '✓ You\'re on the waitlist!';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }
      if (emailInput) emailInput.disabled = true;
    });

    // Clear error state on re-type
    var emailInput = document.getElementById('emailInput');
    if (emailInput) {
      emailInput.addEventListener('input', function () {
        emailInput.classList.remove('error');
        emailInput.removeAttribute('aria-invalid');
      });
    }
  }

  // ---- 3. Intersection Observer — fade-in on scroll ----
  if ('IntersectionObserver' in window) {
    var style = document.createElement('style');
    style.textContent = [
      '.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.55s ease, transform 0.55s ease; }',
      '.reveal.visible { opacity: 1; transform: none; }',
    ].join('\n');
    document.head.appendChild(style);

    var revealTargets = document.querySelectorAll(
      '.feature-card, .step, .stat, .section__header, .community__copy'
    );
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  }

  // ---- Helpers ----
  function isValidEmail(email) {
    // Basic RFC 5322 compliant check — no eval, no regex injection risk
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  }
})();
