let header = {
    root: document.querySelector(".white-background"),
    rootMargin: "0px",
    threshold: 1.0,
};

let observer = new IntersectionObserver(callback, header)

let target = document.querySelector(".navbar")
navObserver.observe()

function whiteBackground() {
    target.classList.add("bg-white")
}