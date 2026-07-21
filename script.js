/* Dovedale Development - minimal vanilla JS
   Progressive enhancement only; the site is fully readable without it. */
(function () {
  "use strict";

  // populate our products list with data from array of objects
  const products = [
    {
      name: "CycleDutch",
      description:
        "Learn to cycle the Dutch way. A course teaching expats the rules of the road in the Netherlands.",
      link: "https://cycledutch.vercel.app",
      logo: "assets/cycledutch.png",
      type: "Course",
    },
    {
      name: "Millionle",
      description:
        "A simple, daily game where you guess a number between 1 and 1,000,000.",
      link: "https://millionle.com",
      logo: "assets/millionle.svg",
      type: "Game",
    },
  ];

  const productsList = document.querySelector(".products-list");
  if (productsList) {
    products.forEach((product) => {
      const productItem = document.createElement("article");
      productItem.className = "product-card";
      productItem.innerHTML = `
        <div class="card-top">
          <img
            class="card-logo"
            src="${product.logo}"
            alt="${product.name} logo"
            width="48"
            height="48"
          />
          <span class="pill">Live · ${product.type}</span>
        </div>
        <h3>${product.name}</h3>
        <p>
          ${product.description}
        </p>
        <a
          class="card-link"
          href="${product.link}"
          target="_blank"
          rel="noopener"
        >
          Visit ${product.name}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7v9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      `;
      productsList.appendChild(productItem);
    });
  }

  // Sticky-header border on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close after tapping a link
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Auto-update copyright year(s)
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });
})();
