// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img[loading='lazy']"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      let lazyLoadThrottleTimeout;
      lazyLoadThrottleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        lazyImages.forEach(function(img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
      }, 20);
    }
  });
  
  // Example of DOM interaction and localStorage
  document.addEventListener("DOMContentLoaded", function() {
    const themeSwitcher = document.getElementById("themeSwitcher");
    themeSwitcher.addEventListener("change", function() {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
  
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
    }
  });
  