const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
});

// mobile menu expand
expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
    });
});
//nav bar scroll to fixed
document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // navbar_top.click(function(e) {
            //     e.preventDefault();
            //     $('body, html').animate({
            //         scroll: $(this.hash).offset().top
            //     }, 500);
            // });
            // add padding top to show content behind navbar
            // navbar_height = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            // document.body.style.paddingTop = '0';
        }
    });
});