window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollUp").style.display = "block";
    } else {
        document.getElementById("scrollUp").style.display = "none";
    }
}

document.getElementById("scrollUp").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides and remove active class from all dots
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if (dots[i]) {
            dots[i].className = dots[i].className.replace(" active", "");
            dots[i].style.backgroundColor = "#bbb"; // Default color
        }
    }
    
    // Show the current slide and set the active dot
    slides[slideIndex-1].style.display = "block";
    if (dots[slideIndex-1]) {
        dots[slideIndex-1].className += " active";
        dots[slideIndex-1].style.backgroundColor = "#fff"; // Active dot color
    }
}

// Add indicators dynamically based on the number of slides
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.getElementsByClassName("slide");
    const dotsContainer = document.querySelector(".dots");
    
    // Clear existing dots to avoid duplication
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", () => currentSlide(i + 1));
        dotsContainer.appendChild(dot);
    }
    
    // Set the interval to automatically change slides
    setInterval(function() {
        plusSlides(1);
    }, 3000); // Change slide every 3 seconds
});