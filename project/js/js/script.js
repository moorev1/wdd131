document.addEventListener("DOMContentLoaded", function() {
    // Testimonials data
    const testimonials = [
        {
            name: "Alice",
            text: "Zara Delight has changed the way I cook! The recipes are easy to follow and absolutely delicious."
        },
        {
            name: "Bob",
            text: "I love the variety of recipes available. There’s always something new to try."
        },
        {
            name: "Charlie",
            text: "The community at Zara Delight is so supportive and inspiring. I’ve learned so much from fellow food lovers."
        }
    ];

    // Function to load testimonials
    function loadTestimonials() {
        const container = document.getElementById('testimonial-container');
        if (!container) {
            console.error('Testimonial container not found');
            return;
        }
        testimonials.forEach(testimonial => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `<p>${testimonial.text}</p><p>- ${testimonial.name}</p>`;
            container.appendChild(card);
        });
    }

    // Load testimonials when the DOM content is loaded
    loadTestimonials();

    // Check if the user has joined
    function checkIfJoined() {
        try {
            const joined = localStorage.getItem('joined');
            if (joined === 'true') {
                alert('Welcome back! You have already joined us.');
            }
        } catch (error) {
            console.error('Error accessing localStorage', error);
        }
    }

    checkIfJoined();

    // Function to handle joining
    function handleJoinUs() {
        try {
            const joined = localStorage.getItem('joined');
            if (joined !== 'true') {
                localStorage.setItem('joined', 'true');
                alert('Thank you for joining us!');
            } else {
                alert('You have already joined us!');
            }
        } catch (error) {
            console.error('Error accessing localStorage', error);
        }
    }

    // Listen for join button click
    const joinButton = document.getElementById('join-button');
    if (joinButton) {
        joinButton.addEventListener('click', handleJoinUs);
    } else {
        console.error('Join button not found');
    }
});
