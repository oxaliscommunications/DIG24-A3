// Initialise fullpage.js

new fullpage("#fullpage", {
  //options
  autoScrolling: true,
  scrollHorizontally: true,
  menu: "#menu",
  lockAnchors: false,
  anchors: ["home", "aboutus", "endorsements", "gallery", "footer"],
  navigation: false,
  navigationPosition: "right",
  slidesNavPosition: "top",
  fixedElements: ".menu, .footer",
  onLeave: (origin, destination, direction) => {
    if (direction == "down") {
      scrollingDown();
    } else if (direction == "up") {
      scrollingUp();
    }
  },

  afterRender: () => {
    homePage();
  },
});
// animate the Roscoe logo onto the page
function homePage() {
  const tl = new TimelineMax({ delay: 0.5 });
  tl.from("#logo", {
    y: -500,
    scale: 0.1,
    ease: "back",
    duration: 1.5,
  }).from(
    "#hamburger-menu",
    {
      opacity: 0,
      scale: 0.6,
      ease: "back",
      duration: 1.2,
    },
    "-=0.3"
  );
}
//function to fade in the text whever we see the About Us paragraphs
function aboutUsSection() {
  const tl = new TimelineMax({ delay: 0.5 });
  tl.from(
    ".section-about-us .column p",
    { y: "40%", opacity: 0, ease: "SlowMo", duration: 1 },
    "-=0.0"
  );
}
// in GSAP animate the Roscoe logo from bottom to top of page to give the appearance of moving from previous page
function scrollingUp() {
  const tl = new TimelineMax({ delay: 0 });
  tl.from("#logo", { y: "200vh", ease: "slow", duration: 1 })
    .from(" #R, #E, #TM", { y: "200vh", ease: "slow", duration: 1.3 }, "-=1.3")
    .from("#O-1, #O-2", { y: "200vh", ease: "slow", duration: 1.2 }, "-=1.1")
    .from("#S, #C", { y: "200vh", ease: "slow", duration: 1.1 }, "-=1.0")
    .from(
      "#hamburger-menu",
      {
        opacity: 0,
        scale: 0.6,
        ease: "back",
        duration: 1.2,
      },
      "-=0.3"
    )
    .add(aboutUsSection(), {}, "+=3.0");
}

//in GSAP animate the Roscoe logo down from out of view top of page to give the appearance of moving downfrom previous page
function scrollingDown() {
  const tl = new TimelineMax({ delay: 0 });
  tl.from("#logo", { y: "-200vh", ease: "slow", duration: 1 });
  tl.from(" #R, #E, #TM", { y: "-200vh", ease: "slow", duration: 1.3 }, "-=1.3")
    .from("#O-1, #O-2", { y: "-200vh", ease: "slow", duration: 1.2 }, "-=1.1")
    .from("#S, #C", { y: "-200vh", ease: "slow", duration: 1.1 }, "-=1.0")
    .from(
      "#hamburger-menu",
      {
        opacity: 0,
        scale: 0.6,
        ease: "back",
        duration: 1.2,
      },
      "-=0.3"
    )
    .add(aboutUsSection(), {}, "+=3.0");
}

// settings for the swiper slideshow
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  type: "fraction",
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
