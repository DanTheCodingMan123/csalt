document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    let lastScrollPosition = 0;

    window.addEventListener("scroll", () => {
        const currentScrollPosition = window.scrollY;

        if (!header) return;
        header.classList.toggle("is-scrolled", currentScrollPosition > 16);

        if (currentScrollPosition > lastScrollPosition && !header.classList.contains("menu-open")) {
            // Scrolling down: completely hide the header
            header.style.top = `-${header.offsetHeight}px`;
        } else {
            // Scrolling up: show the header
            header.style.top = "0";
        }

        lastScrollPosition = currentScrollPosition;
    }, { passive: true });

    document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
        const siteHeader = toggle.closest(".header");
        const nav = siteHeader?.querySelector(".nav");
        if (!siteHeader || !nav) return;

        toggle.setAttribute("aria-expanded", "false");

        const closeMenu = () => {
            siteHeader.classList.remove("menu-open");
            toggle.setAttribute("aria-expanded", "false");
        };

        toggle.addEventListener("click", () => {
            const isOpen = siteHeader.classList.toggle("menu-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            siteHeader.style.top = "0";
        });

        nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
                toggle.focus();
            }
        });
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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealTargets = document.querySelectorAll(
        'main > section:not(.hero):not(.projects-intro):not(.project-detail-hero):not(.recruitment-hero):not(.timeline-section):not(.recruitment-schedule):not(.project-detail-content), .project-copy > section, .project-facts'
    );

    revealTargets.forEach((element, index) => {
        element.classList.add('site-reveal');
        element.style.setProperty('--reveal-delay', `${(index % 3) * 90}ms`);
        observer.observe(element);
    });

                // Observe all subteam items
                const subteamItems = document.querySelectorAll('.subteam-item');
                const groupPhotos = document.querySelectorAll('.subteam-group-photo');
                const subteamsVisual = document.querySelector('.subteams-visual');
                const subteamIdleLogo = document.querySelector('.subteam-idle-logo');

                function showGroupPhoto(photoName) {
                    groupPhotos.forEach(photo => {
                        photo.classList.toggle(
                            'is-active',
                            photo.dataset.groupPhoto === photoName
                        );
                    });
                    if (subteamsVisual) {
                        subteamsVisual.classList.add('has-active-photo');
                    }
                }

                function hideGroupPhotos() {
                    groupPhotos.forEach(photo => photo.classList.remove('is-active'));
                    if (subteamsVisual) {
                        subteamsVisual.classList.remove('has-active-photo');
                    }
                }

                if (subteamIdleLogo) {
                    observer.observe(subteamIdleLogo);
                }

                document.querySelectorAll('.donate-logo-animation').forEach(logo => {
                    observer.observe(logo);
                });

                subteamItems.forEach(item => {
                    observer.observe(item);
                    item.setAttribute('tabindex', '0');
                    item.addEventListener('mouseenter', () => {
                        showGroupPhoto(item.dataset.groupPhoto);
                    });
                    item.addEventListener('mouseleave', hideGroupPhotos);
                    item.addEventListener('focusin', () => {
                        showGroupPhoto(item.dataset.groupPhoto);
                    });
                    item.addEventListener('focusout', hideGroupPhotos);
                });

                const recruitmentTimeline = document.querySelector('.recruitment-timeline');
                if (recruitmentTimeline) {
                    observer.observe(recruitmentTimeline);
                }

                const timelineEvents = document.querySelectorAll('.timeline-reveal');
                timelineEvents.forEach(event => {
                    observer.observe(event);
                });

                document.querySelectorAll('.wec-carousel').forEach(carousel => {
                    const slides = Array.from(carousel.querySelectorAll('.wec-slide'));
                    const previousButton = carousel.querySelector('.wec-carousel-prev');
                    const nextButton = carousel.querySelector('.wec-carousel-next');
                    const dotsContainer = carousel.querySelector('.wec-carousel-dots');
                    let currentSlide = 0;
                    let pointerStartX = null;

                    const dots = slides.map((slide, index) => {
                        const dot = document.createElement('button');
                        dot.type = 'button';
                        dot.className = 'wec-carousel-dot';
                        dot.setAttribute('aria-label', `Show gallery image ${index + 1} of ${slides.length}`);
                        dot.addEventListener('click', () => showSlide(index));
                        dotsContainer.appendChild(dot);
                        return dot;
                    });

                    function showSlide(index) {
                        currentSlide = (index + slides.length) % slides.length;
                        slides.forEach((slide, slideIndex) => {
                            const isActive = slideIndex === currentSlide;
                            slide.classList.toggle('is-active', isActive);
                            slide.setAttribute('aria-hidden', String(!isActive));
                        });
                        dots.forEach((dot, dotIndex) => {
                            const isActive = dotIndex === currentSlide;
                            dot.classList.toggle('is-active', isActive);
                            if (isActive) {
                                dot.setAttribute('aria-current', 'true');
                            } else {
                                dot.removeAttribute('aria-current');
                            }
                        });
                    }

                    previousButton.addEventListener('click', () => showSlide(currentSlide - 1));
                    nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
                    carousel.setAttribute('tabindex', '0');
                    carousel.addEventListener('keydown', event => {
                        if (event.key === 'ArrowLeft') {
                            event.preventDefault();
                            showSlide(currentSlide - 1);
                        }
                        if (event.key === 'ArrowRight') {
                            event.preventDefault();
                            showSlide(currentSlide + 1);
                        }
                    });
                    carousel.addEventListener('pointerdown', event => {
                        pointerStartX = event.clientX;
                    });
                    carousel.addEventListener('pointerup', event => {
                        if (pointerStartX === null) return;
                        const distance = event.clientX - pointerStartX;
                        if (Math.abs(distance) > 50) {
                            showSlide(currentSlide + (distance < 0 ? 1 : -1));
                        }
                        pointerStartX = null;
                    });

                    showSlide(0);
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
