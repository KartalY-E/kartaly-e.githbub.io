const btnScrollToTop = document.querySelector('#btnScrollToTop');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        btnScrollToTop.classList.add("btn-active");
    } else {
        btnScrollToTop.classList.remove("btn-active");
    }
})

btnScrollToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});