export const SmothText = () => {
  var lefts = document.querySelectorAll(".left");
  var rights = document.querySelectorAll(".right");
  var bottoms = document.querySelectorAll(".bottom");
  var tops = document.querySelectorAll(".top");
  var appearances = document.querySelectorAll(".appearance");

  function isFullyVisible(elem) {
    let observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          obs.unobserve(entry.target);
        }
        // else {
        //     entry.target.classList.remove('animated');
        // }
      });
    });
    for (var i = 0; i < elem.length; i++) {
      var item = elem[i];
      observer.observe(item);
    }
  }

  isFullyVisible(lefts);
  isFullyVisible(rights);
  isFullyVisible(tops);
  isFullyVisible(bottoms);
  isFullyVisible(appearances);
};
