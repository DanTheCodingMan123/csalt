document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    let lastScrollPosition = 0;

    window.addEventListener("scroll", () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down: completely hide the header
            header.style.top = `-${header.offsetHeight}px`;
        } else {
            // Scrolling up: show the header
            header.style.top = "0";
        }

        lastScrollPosition = currentScrollPosition;
    });

    // Scroll animation for value pillars
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

                // Observe all subteam items
                const subteamItems = document.querySelectorAll('.subteam-item');
                subteamItems.forEach(item => {
                    observer.observe(item);
                });

                // Animated counter for stats
                const statNumbers = document.querySelectorAll('.stat-number');
                const counterObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const target = parseInt(entry.target.getAttribute('data-target'));
                            animateCounter(entry.target, target);
                            counterObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });

                statNumbers.forEach(stat => {
                    counterObserver.observe(stat);
                });

                function animateCounter(element, target) {
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        element.textContent = Math.floor(current);
                    }, 30);
                }

            });