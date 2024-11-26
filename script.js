// Wait for the DOM to load before animating
document.addEventListener('DOMContentLoaded', () => {
    // Select all cards
    const cards = document.querySelectorAll('.card');
    const cimg = document.querySelectorAll('.center-image');
    const line = document.querySelectorAll('.line');

    gsap.from(cimg, {
        y: -50,
        opacity: 0, // Start fully transparent
        duration: 1, // Total animation time for each card
        ease: 'power2.out', // Smooth easing for animation
    });

    gsap.from(line, {
        y: -80,
        opacity: 0, // Start fully transparent
        duration: 1.2, // Total animation time for each card
        ease: 'power2.out', // Smooth easing for animation
    });

    // Animate cards: fade in and move upward
    gsap.from(cards, {
        y: 50, // Start 50px below their final position
        opacity: 0, // Start fully transparent
        duration: 0.8, // Total animation time for each card
        stagger: 0.2, // Delay between each card's animation
        ease: 'power2.out', // Smooth easing for animation
    });
});

// Hover effect using GSAP
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        // Animate the hovered card expanding its width
        gsap.to(card, {
            flex: 2, // Expanded width (adjust as needed)
            duration: 0.3, // Smooth transition
            ease: 'power2.out',
        });

        // Animate other cards shrinking dynamically
        cards.forEach((otherCard) => {
            if (otherCard !== card) {
                gsap.to(otherCard, {
                    flex: 1, // Reduced width
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        // Reset all cards to equal width
        gsap.to(cards, {
            flex: 1, // Reset width for all
            duration: 0.3,
            ease: 'power2.out',
        });
    });
});
