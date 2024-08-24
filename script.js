document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let currentIndex = 0;

    function showTestimonials() {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            testimonial.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        testimonials[currentIndex].classList.add('active');

        // Make the next testimonial partially visible
        if (currentIndex + 1 < testimonials.length) {
            testimonials[currentIndex + 1].classList.add('active');
            testimonials[currentIndex + 1].style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    nextBtn.addEventListener('click', function() {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first testimonial
        }
        showTestimonials();
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = testimonials.length - 1; // Loop back to the last testimonial
        }
        showTestimonials();
    });

    // Initialize the first testimonials as visible
    showTestimonials();
});
