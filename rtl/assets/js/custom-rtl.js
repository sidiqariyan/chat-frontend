(function ($) {
  "use strict";

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".sticky_nav").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll) {
          $(".sticky_nav").addClass("navbar_fixed");
        } else {
          $(".sticky_nav").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  function Menu_js() {
    if ($(".submenu").length) {
      $(".submenu > .dropdown-toggle").click(function () {
        var location = $(this).attr("href");
        window.location.href = location;
        return false;
      });
    }
  }
  Menu_js();

  function menu_dropdown() {
    if ($(window).width() < 992) {
      $(".menu > li .mobile_dropdown_icon").on("click", function (event) {
        event.preventDefault();
        $(this).parent().find(".dropdown-menu").first().slideToggle(700);
        $(this).parent().siblings().find(".dropdown-menu").slideUp(700);
      });
    }
  }
  menu_dropdown();

  //*============ background color js ==============*/
  $("[data-bg-color]").each(function () {
    var bg_color = $(this).data("bg-color");
    $(this).css({
      "background-color": bg_color,
    });
  });

  //*============ background image js ==============*/
  $("[data-bg-image]").each(function () {
    var bg = $(this).data("bg-image");
    $(this).css({
      background: "no-repeat center 0/cover url(" + bg + ")",
    });
  });

  if ($(".testimonial_slider_one").length) {
    $(".testimonial_slider_one").slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      speed: 1000,
      dots: false,
      arrows: true,
      prevArrow: ".prev",
      nextArrow: ".next",
      rtl: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".testimonial_slider_two").length) {
    $(".testimonial_slider_two").slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "200px",
      speed: 1000,
      dots: false,
      arrows: true,
      prevArrow: ".prevs",
      nextArrow: ".nexts",
      rtl: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "200px",
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "30px",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".counter").length) {
    // Counter up
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
  }

  if ($(".marquee").length) {
    var Increment = 1; // Amount to move per tick...
    var LoopDelay = 500 / 30; // How fast ticks happen...
    var Loop;

    function DestroyLoop() {
      clearInterval(Loop);
    }

    function CreateLoop() {
      Loop = setInterval(function () {
        var FirstSlide = $(".marquee .slide:first-child");
        var FirstMargin = parseInt(FirstSlide.css("margin-left")) - Increment;
        FirstSlide.css({
          "margin-left": FirstMargin,
        });

        if (Math.abs(FirstMargin) >= FirstSlide.outerWidth()) {
          FirstSlide.css({
            "margin-left": 0,
          });
          FirstSlide.appendTo($(".marquee"));
        }
      }, LoopDelay);
    }

    $(".marquee").on("mouseenter", DestroyLoop);
    $(".marquee").on("mouseleave", CreateLoop);
    CreateLoop();
  }

  $(".saas_accordion_item").each(function () {
    var $accordion = $(".saas_accordion_item");
    if ($accordion.length > 0) {
      $(".saas_accordion_item .accordion-item").first().addClass("is-active");
      $accordion.find(".accordion-item").on("click", function () {
        $(this).siblings(".accordion-item").removeClass("is-active");
        $(this).toggleClass("is-active");
      });
    }
  });

  if ($(".select").length > 0) {
    $(".select").niceSelect();
  }

  /*-------------------------------------------------------------------------------
	  popup js
	-------------------------------------------------------------------------------*/
  function popupGallery() {
    if ($(".popup-youtube").length) {
      $(".popup-youtube").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
      });
    }
  }
  popupGallery();

  /*=========== Blog isotope js===========*/
  function blogMasonry() {
    if ($("#blog_masonry").length) {
      $("#blog_masonry").isotope({
        layoutMode: "masonry",
        itemSelector: ".col-lg-4",
      });
    }
  }
  blogMasonry();

  /*=========== Portfolio isotope js===========*/
  function portfolioMasonry() {
    var portfolio = $("#work-portfolio");
    if (portfolio.length) {
      portfolio.imagesLoaded(function () {
        // images have loaded
        // Activate isotope in container
        portfolio.isotope({
          // itemSelector: ".portfolio_item",
          layoutMode: "masonry",
          filter: "*",
          animationOptions: {
            duration: 1000,
          },
          transitionDuration: "0.5s",
          masonry: {},
        });

        // Add isotope click function
        $("#portfolio_filter div").on("click", function () {
          $("#portfolio_filter div").removeClass("active");
          $(this).addClass("active");

          var selector = $(this).attr("data-filter");
          portfolio.isotope({
            filter: selector,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: false,
            },
          });
          return false;
        });
      });
    }
  }
  portfolioMasonry();

  $(document).ready(function () {
    // Function to handle tab change
    function changeTab(tabJs, index) {
      // Remove active class from all tabs within the same menu
      tabJs
        .closest(".promo_tab_box .nav")
        .find("li .nav-link")
        .removeClass("active");

      tabJs.addClass("active");

      var target = tabJs.attr("data-bs-target");

      $(target)
        .addClass("active show")
        .siblings(".tab-pane")
        .removeClass("active show");

      // Reset progress bar for all tabs except the clicked one
      $(".progress-bar").not(tabJs.find(".progress-bar")).stop().width(0);

      // Update progress bar for the clicked tab
      updateProgressBar(tabJs.find(".progress-bar"), 5000);
    }

    // Function to update progress bar
    function updateProgressBar(progressBar, duration) {
      progressBar.stop().width(0).animate(
        {
          width: "100%",
          right: "0",
          left: "100%",
        },
        duration,
        "linear"
      );
    }

    // Tab click event handler
    var tabJs = $(".promo_tab_box .nav li .nav-link");
    var firstTab = tabJs.first();
    changeTab(firstTab, tabJs.index(firstTab));
    updateProgressBar(firstTab.find(".progress-bar"), 5000);
    tabJs.on("click", function (e) {
      e.preventDefault();
      changeTab($(this), tabJs.index($(this)));
      return false;
    });

    // Auto-cycle tabs with progress bar
    var currentIndex = 0;
    var intervalDuration = 5000; // Set the interval duration in milliseconds

    function autoCycleTabs() {
      var nextIndex = (currentIndex + 1) % tabJs.length;
      var activeTab = tabJs.eq(nextIndex);
      changeTab(activeTab, nextIndex);
      currentIndex = nextIndex;
    }

    var tabCycle = setInterval(autoCycleTabs, intervalDuration);

    // Handle hover to stop and resume tab cycling and progress bar for all tabs
    $(".promo_tab_box .nav li .nav-link").hover(
      function () {
        clearInterval(tabCycle);
        $(".progress-bar").stop();
      },
      function () {
        tabCycle = setInterval(autoCycleTabs, intervalDuration);
        updateProgressBar(
          $(".nav-link.active .progress-bar"),
          intervalDuration
        );
      }
    );

    // Function to reset progress bar
    function resetProgressBar(progressBar) {
      progressBar.stop().width(0);
    }
  });

  // Function to features scroll animation change
  if ($(".features_animation").length) {
    $(".features_animation .feature_item_inner").each(function (index) {
      $(this).css("top", 50 + index * 15 + "px");
    });

    const cards = gsap.utils.toArray(".feature_item_inner");
    cards.forEach((card, index) => {
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: () => 1 - (cards.length - index) * 0.025,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        markers: false,
        id: "pin",
        end: "max",
        invalidateOnRefresh: true,
      });
    });
  }

  /*--------- WOW js-----------*/

  function bodyScrollAnimation() {
    var scrollAnimate = $("body").data("scroll-animation");
    if (scrollAnimate === true) {
      new WOW({}).init();
    }
  }
  bodyScrollAnimation();
  // Preloader

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery);
