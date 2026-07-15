(function () {
  "use strict";

  var root = document.documentElement;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Theme toggle (initial data-theme is applied pre-paint in head.html) */
  var THEME_KEY = "liquid-theme";
  var THEME_COLORS = { light: "#ece9ff", dark: "#0d1126" };

  function storedTheme() {
    try {
      var value = localStorage.getItem(THEME_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function systemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    var metaTags = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metaTags.length; i++) {
      metaTags[i].setAttribute("content", THEME_COLORS[theme]);
    }

    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : root.getAttribute("data-theme") === "light" ? "light" : storedTheme() || systemTheme());

  var toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (error) {
        /* private mode: theme just won't persist */
      }
    });
  }

  var colorSchemeMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  if (colorSchemeMedia) {
    var onSystemThemeChange = function (event) {
      if (!storedTheme()) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };
    if (colorSchemeMedia.addEventListener) {
      colorSchemeMedia.addEventListener("change", onSystemThemeChange);
    } else if (colorSchemeMedia.addListener) {
      colorSchemeMedia.addListener(onSystemThemeChange);
    }
  }

  /* Reveal-on-scroll */
  var revealElements = document.querySelectorAll("[data-reveal]");
  if (revealElements.length > 0) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach(function (element) {
        element.classList.add("is-visible");
      });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          /* threshold must stay near 0: tall sections (e.g. publication lists
             on phones) can never reach a 12% intersection ratio and would
             otherwise stay hidden forever */
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.01
        }
      );

      revealElements.forEach(function (element) {
        revealObserver.observe(element);
      });
    }
  }

  /* Count-up metrics */
  var counters = document.querySelectorAll("[data-count-to]");
  if (counters.length > 0) {
    var animateCounter = function (element) {
      var target = parseInt(element.getAttribute("data-count-to"), 10);
      if (isNaN(target)) {
        return;
      }
      if (prefersReducedMotion || !window.requestAnimationFrame) {
        element.textContent = String(target);
        return;
      }
      var duration = 900;
      var startTime = null;
      var tick = function (timestamp) {
        if (startTime === null) {
          startTime = timestamp;
        }
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.round(target * eased));
        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      };
      window.requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window && !prefersReducedMotion) {
      var counterObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (element) {
        counterObserver.observe(element);
      });
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* Masthead state + scroll progress bar */
  var progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.setAttribute("aria-hidden", "true");
  document.body.appendChild(progressBar);

  var masthead = document.querySelector(".masthead");
  var onScroll = function () {
    if (masthead) {
      if (window.scrollY > 10) {
        document.body.classList.add("is-scrolled");
      } else {
        document.body.classList.remove("is-scrolled");
      }
    }

    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progressBar.style.transform = "scaleX(" + ratio + ")";
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
})();
