let hamburgerButton = document.getElementById("hamburger-button");
let mobileMenuList = document.getElementById("mobile-menu-list");

hamburgerButton.addEventListener("click", () => {
    if (mobileMenuList.classList.contains("mobile-menu-hide")) {
        mobileMenuList.classList.remove("mobile-menu-hide");
        mobileMenuList.classList.add("mobile-menu-show");
    } else {
        mobileMenuList.classList.remove("mobile=menu-show");
        mobileMenuList.classList.add("mobile-menu-hide");
    }
});

// hamburgerButton.addEventListener("click", () => {
//     if (mobileMenuList.style.display === "none") {
//         mobileMenuList.style.display = "block";
//     } else {
//         mobileMenuList.style.display = "none";
//     }
// })


