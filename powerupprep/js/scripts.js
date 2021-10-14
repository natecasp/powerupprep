var slideIndex = 1;
              showSlides(slideIndex);

              // Next/previous controls
              function plusSlides(n) {
                showSlides(slideIndex += n);
              }

              // Thumbnail image controls
              function currentSlide(n) {
                showSlides(slideIndex = n);
              }

              function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].classList = dots[i].classList.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].classList += " active";
              } 

function showEnglish() {
  document.getElementById('math').style.display = 'none';
  document.getElementById('reading').style.display = 'none';
  document.getElementById('science').style.display = 'none';
  document.getElementById('english').style.display = 'block';
}
function showMath() {
  document.getElementById('reading').style.display = 'none';
  document.getElementById('science').style.display = 'none';
  document.getElementById('english').style.display = 'none';
  document.getElementById('math').style.display = 'block';

}function showReading() {
  document.getElementById('science').style.display = 'none';
  document.getElementById('english').style.display = 'none';
  document.getElementById('math').style.display = 'none';
  document.getElementById('reading').style.display = 'block';

}function showScience() {
  document.getElementById('math').style.display = 'none';
  document.getElementById('reading').style.display = 'none';
  document.getElementById('english').style.display = 'none';
  document.getElementById('science').style.display = 'block';
}

