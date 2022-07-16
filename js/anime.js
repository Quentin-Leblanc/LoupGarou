


  // Wrap every letter in a span
var textWrapper = document.querySelector('.movIn');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.movIn .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 50 * (i+1)
  });

/*
                        targets: '.movIn',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000,
                        autoplay: false
*/