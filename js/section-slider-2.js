// initialize slideindex with 0 as you want to show the first slide first
var SLIDEINDEXTWO = 0;

showSlidesTwo(SLIDEINDEXTWO);

// creating function for showing slides
function showSlidesTwo(index){
    // lets select all the slides and dots using querySelectorAll method
    var slides = document.querySelectorAll(".slide-two");
    var dots = document.querySelectorAll(".dot-two-navigation");
    // if slide index value is greater than length of slides then jump to 1st slide
    if (index >= slides.length){
        SLIDEINDEXTWO = 0;
    // if we want to jump at the last of the slide incase the user is at the first one
    } else if (index < 0) {
        SLIDEINDEXTWO = slides.length - 1;
    } else{
        SLIDEINDEXTWO = SLIDEINDEXTWO;
    }
    // before showing slides we must hide all the slides and remove active-dots class using for loop
    for (var i = 0; i < slides.length; i++){
        // hide slide elements
        slides[i].style.display = "none";
        // hide dots active-dot class
        dots[i].classList.remove("active-dot");
    }
    // show the slide we want and set the dot class active-dot
    slides[SLIDEINDEXTWO].style.display = "block";
    dots[SLIDEINDEXTWO].classList.add("active-dot");
        
};


// select all the dots using querySelectorAll and iterate over each one using forEach method
document.querySelectorAll(".dot-two-navigation").forEach(function(element){
    element.addEventListener("click", function(){
        // make a real array using slice method from array proptotype followed by call method
        var dots = Array.prototype.slice.call(this.parentElement.children);
        // make a dot index variable of the array we have created above
        var dotIndex = dots.indexOf(element);

        // save slideindex value to dot index
        showSlidesTwo(SLIDEINDEXTWO = dotIndex);
    });
});

// lets set our slide automatic using setInterval method
setInterval(function(){
    showSlidesTwo(++SLIDEINDEXTWO);
}, 4000);