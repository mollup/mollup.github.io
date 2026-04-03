/**
 * MatchPoint A/B Test — ab-test.js
 *
 * Splits visitors 50/50 into variant A (default purple gradient CTAs)
 * or variant B (warm orange/yellow gradient CTAs).
 *
 * The assigned variant is persisted in localStorage so a returning visitor
 * always sees the same variant. Events are logged to the console in this
 * prototype; swap console.log for your analytics SDK (e.g. Segment, Plausible)
 * in production.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'mp_ab_variant';

  // ---- 1. Assign or recall variant ----
  var variant = localStorage.getItem(STORAGE_KEY);
  if (!variant) {
    variant = Math.random() < 0.5 ? 'A' : 'B';
    try {
      localStorage.setItem(STORAGE_KEY, variant);
    } catch (_) {
      // Storage blocked — continue without persistence
    }
  }

  // Expose on window so main.js and analytics can read it
  window.MP_AB_VARIANT = variant;

  // ---- 2. Apply variant styling to CTAs ----
  if (variant === 'B') {
    // Wait for DOM to be ready before querying elements
    document.addEventListener('DOMContentLoaded', function () {
      applyVariantB();
    });
  }

  function applyVariantB() {
    // Override CTA button labels and style for variant B
    var ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(function (btn) {
      btn.classList.add('cta-variant-b');

      var label = btn.querySelector('.cta-label');
      if (!label) return;

      var ctaId = btn.getAttribute('data-cta');
      var variantBLabels = {
        'nav':              'Join Free',
        'hero-primary':     'Start Competing Now',
        'hiw-cta':          'Launch My Tournament',
        'community-join':   'Join the Fight',
        'signup-submit':    'Get My Free Account',
      };

      if (variantBLabels[ctaId]) {
        label.textContent = variantBLabels[ctaId];
      }
    });
  }

  // ---- 3. Track CTA impression on page load ----
  document.addEventListener('DOMContentLoaded', function () {
    console.log('[MatchPoint A/B] Variant assigned:', variant);
    trackEvent('page_view', { variant: variant });
  });

  // ---- 4. Track CTA clicks ----
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.cta-btn');
    if (!btn) return;
    var ctaId = btn.getAttribute('data-cta') || 'unknown';
    trackEvent('cta_click', { variant: variant, cta_id: ctaId });
  });

  function trackEvent(name, props) {
    // Replace this with your real analytics call in production, e.g.:
    //   analytics.track(name, props);
    //   gtag('event', name, props);
    var prefix = '[MatchPoint A/B]';
    console.log(prefix, name, JSON.stringify(props));
  }
})();
