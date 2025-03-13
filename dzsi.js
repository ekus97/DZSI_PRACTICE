(function ($) {
  $(document).ready(function () {
    let hamburgerIcon = document.querySelector(".hamburger-menu");
    let navMenu = document.querySelector(".main-nav nav");
    let dropdownToggle = document.querySelector("ul.nav-menus li");

    hamburgerIcon.addEventListener("click", function () {
      this.classList.toggle("active"); // Toggle the 'active' class
      if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      }
    });

    // Close the hamburger menu when the window is resized to more than 1024 pixels
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) {
        navMenu.style.display = "none"; // Hide the nav menu
        hamburgerIcon.classList.remove("active"); // Remove the 'active' class from the hamburger icon
      }
    });
    $(".icon").click(function () {
      $(".items").hide();
      $(".search-box").addClass("active");
    });
    $(".search-box-reset").click(function () {
      setTimeout(function () {
        $(".items").fadeTo(2300, 1);
        $(".search-box").removeClass("active");
      }, 300);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) {
        var element = document.querySelector(".main-nav nav");
        element.style.display = "";
      }
    });

    // less than 767px
    $(".inner-text-menu .inner-item").click(function (e) {
      e.stopPropagation();
      var winWidth = $(window).width();
      if (winWidth < 768) {
        if (!$(this).hasClass("mobile-active")) {
          $(this).siblings().removeClass("mobile-active");
          $(this).addClass("mobile-active");
        } else {
          $(this).removeClass("mobile-active");
        }
      }
    });
    //less than  to 1025px
    $("header ul.nav-menus > li").click(function (e) {
      e.stopPropagation();
      var winWidth = $(window).width();
      if (winWidth < 1024) {
        if (!$(this).hasClass("active-nav")) {
          // Remove 'active-nav' class from all siblings and slide up their dropdowns
          $(this).siblings().removeClass("active-nav");
          $(this).siblings().find(".dropdown-menu").slideUp();

          // Add 'active-nav' class to this item and slide down its dropdown
          $(this).addClass("active-nav");
          $(this).find(".dropdown-menu").slideDown();
        } else {
          // If this item is already active, just slide it up and remove the class
          $(this).removeClass("active-nav");
          $(this).find(".dropdown-menu").slideUp();
        }
      }
    });

    $(".tabs-nav .inner-item").click(function () {
      var winWidth = $(window).width();
      if (winWidth < 1024) {
        $(this).parents(".sub-menu").find(".inner-item").removeClass("active");
        $(this).addClass("active");

        var activeTab = $(this).find("a").attr("href");
        $(this).parents(".sub-menu").find(".tab-content").hide();
        $(activeTab).show();
        return false;
      }
    });

    // Greater than or equal to 1024px

    $(".tabs-nav .inner-item").mouseenter(function () {
      var winWidth = $(window).width();
      if (winWidth >= 1024) {
        $(this).parents(".sub-menu").find(".inner-item").removeClass("active");
        $(this).addClass("active");

        var activeTab = $(this).find("a").attr("href");
        $(this).parents(".sub-menu").find(".tab-content").hide();
        $(activeTab).show();
        return false;
      }
    });
    ///////
    $(".menu-right .tab-content").each(function (index) {
      var content_inner = $(this).html();
      $(".inner-text-menu .inner-item")
        .eq(index)
        .find(".mobile-inner-menu")
        .append(content_inner);
    });
    //////

    $(".tabs-nav .inner-item").click(function () {
      var winWidth = $(window).width();
      var $submenu = $(this).find(".mobile-inner-menu"); // Get the corresponding submenu
      if (winWidth < 767) {
        // Slide up all submenus first
        $(".mobile-inner-menu").slideUp(400); // Hide all submenus
        $(this).removeClass("active");

        // Then slide down the targeted submenu if it's not already visible
        if ($submenu.is(":visible")) {
          $submenu.slideUp(400);
          $(this).removeClass("active");
        } else {
          $submenu.slideDown(400); // Show the targeted submenu
          $(this).addClass("active");
        }
      } else {
        // If the window width is 767 or more, hide all submenus
        $(".mobile-inner-menu").slideUp(400);
        $(this).removeClass("mobile-active");
      }
    });

    $(window).on("resize", function () {
      var win = $(this); //this = window
      if (win.width() >= 1025) {
        $(".mobile-inner-menu").removeAttr("style");
      } else {
        $(".dropdown-menu").removeAttr("style");
        $(".items").removeClass("active-nav");
      }

      if (win.width() >= 768) {
        $(".inner-item").removeClass("mobile-active");
        $(".mobile-inner-menu").removeAttr("style");
      }
    });
  });
})(jQuery);

$(document).ready(function () {
  $(".hero-banner .card-wrap").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    appendArrows: $(this).find(".slider-controls"),
    prevArrow: '<span class="arrow-prev"></span>',
    nextArrow: '<span class="arrow-next"></span>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(function () {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-target");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 9000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(
              this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            );
          },
        }
      );
    });
  });

  $(".cta-card-slider .card-slider-wrap").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows: true,
    appendArrows: $(this).find(".cta-slider-controls"),
    prevArrow: '<span class="prev-cta-arrow"></span>',
    nextArrow: '<span class="next-cta-arrow"></span>',
  });

  $(".logo-grid-slider .slide-wrap").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".accordion-header:first").addClass("active");
  $(".accordion-body:first").css("display", "block");
  $(".accordion-item:first").addClass("show");
  // Click event for the accordion header
  $(".accordion .accordion-header").click(function () {
    $(".accordion-item").removeClass("show");

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parent().find(".accordion-body").slideUp("slow");
    } else {
      $(".accordion .accordion-header").removeClass("active");
      $(".accordion .accordion-body").slideUp("slow");
      $(this).closest(".accordion-item").addClass("show");
      $(this).addClass("active");
      $(this).parent().find(".accordion-body").slideDown("slow");
    }
  });

  $(".tabs-content").hide();
  $(".tabs-content:first-child").show();
  $(".tab:first").addClass("active");
  $(".tab").click(function () {
    var tabId = $(this).data("tab-id");
    $(".tabs-content").hide();
    $('.tabs-content[data-tab="' + tabId + '"]').show();
    $(".tab").removeClass("active");
    $(this).addClass("active");
  });
}); //end ready function
