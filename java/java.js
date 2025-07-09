
// Get buttons and container
const btnMonth = document.getElementById("btn-month");
const btnYear = document.getElementById("btn-year");
const cards = document.getElementById("pricingCards");

// Function to render pricing cards based on selected plan
const renderCards = (active) => {
  const data =
    active === "month"
      ? [
          {
            title: "Personal",
            price: "$399",
            highlight: false,
            features: ["03 PSD Pack", "03 Wordpress Pack", "120 Support Ticket"],
          },
          {
            title: "Business",
            price: "$899",
            highlight: true,
            features: ["05 PSD Pack", "05 Wordpress Pack", "1000 Support Ticket"],
          },
          {
            title: "Ultimate",
            price: "$499",
            highlight: false,
            features: ["20 PSD Pack", "20 Wordpress Pack", "1500 Support Ticket"],
          },
        ]
      : [
          {
            title: "Personal",
            price: "$1499",
            highlight: true,
            features: ["03 PSD Pack", "03 Wordpress Pack", "120 Support Ticket"],
          },
          {
            title: "Business",
            price: "$499",
            highlight: false,
            features: ["05 PSD Pack", "05 Wordpress Pack", "1000 Support Ticket"],
          },
          {
            title: "Ultimate",
            price: "$799",
            highlight: false,
            features: ["20 PSD Pack", "20 Wordpress Pack", "1500 Support Ticket"],
          },
        ];

  // Generate HTML for each card
  cards.innerHTML = data
    .map(
      (item) => `
        <div class="col-md-4 mb-4">
          <div class="pricing-card ${item.highlight ? "highlight" : ""}">
            <div class="card-content p-4 border rounded">
              <h4 class="fw-bold">${item.title}</h4>
              <div class="card-title-border my-2"></div>
              <div class="mb-3">
                <span class="text-muted">From </span>
                <span class="price-amount">${item.price}</span>
              </div>
              <div class="mb-4">
                ${item.features
                  .map(
                    (feature) => `
                      <div class="feature-item mb-2">
                        <div>
                          <span class="check-mark text-success">✔</span>
                          <span class="feature-text">${feature}</span>
                        </div>
                        <p class="small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <p class="small text-muted">Lorem ipsum sit amet consectetur elit.</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
              <button class="btn btn-custom w-100 ${
                item.highlight ? "btn-outline-primary" : "btn-primary"
              }">
                GET STARTED NOW
              </button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
};

// Handle button clicks
btnMonth.addEventListener("click", () => {
  btnMonth.classList.add("active");
  btnYear.classList.remove("active");
  renderCards("month");
});

btnYear.addEventListener("click", () => {
  btnYear.classList.add("active");
  btnMonth.classList.remove("active");
  renderCards("year");
});

// Initial render
renderCards("month");
// ===== Owl Carousel Testimonials =====
// Initialize testimonial carousel using OwlCarousel plugin
$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    slideBy: 1, // كل مرة يتحرك كارت واحد
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
    },
  });
});
//================Scroll To Top Button =================//

$(document).ready(function () {
  // Show/Hide scroll-to-top button based on scroll position
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("#scrollTopBtn").removeClass("d-none");
    } else {
      $("#scrollTopBtn").addClass("d-none");
    }
  });

  // Smooth scroll to top
  $("#scrollTopBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

