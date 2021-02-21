let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        duration: 4000, // Animation duration.
        easing: "swing", // Transition type.

        step: function (value) {
          $(this).text(Math.ceil(value));
        }  // A function to be called for each animated property of each animated element. This function provides an opportunity to modify the Tween object to change the value of the property before it is set.
        
      });
  });
};

let a = 0;
$(window).scroll(function () {
  let oTop = $(".numbers").offset().top - window.innerHeight; // The .offset() method allows us to retrieve the current position of an element  relative to the document
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



 // sticky navigation

let navbar = $(".navbar");

$(window).scroll(function () {
  let oTop = $(".section-2").offset().top - window.innerHeight; // get the complete hight of window
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});