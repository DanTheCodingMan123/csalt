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
});