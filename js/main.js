// // Logo Width
try {
    document.addEventListener("scroll", () => {
        console.log(scrollY)
        if (scrollY > 54) {
            document.querySelector(".header-logo").classList.add("active");

        }
        else {
            document.querySelector(".header-logo").classList.remove("active");
        }
    })

} catch (err) {
    console.log(err);
}
// Menu links
try {
    var listItem = document.querySelectorAll('.list__item__links');
    listItem.forEach(item => { item.addEventListener('click', changeMenu) });
    function deacMenu() {
        listItem.forEach(item => { item.classList.remove('active') })
    }
    function changeMenu(e) {
        deacMenu();
        this.classList.add('active');   
    }

} catch (err) {
    console.log(err);
}
// // Back To Top
try {
    var backToTopButton = document.querySelector('.scroll__top__top');
    document.addEventListener("scroll", () => {
        console.log(scrollY)
        if (scrollY > 100) {
            backToTopButton.classList.add("active");
        }
        else {
            backToTopButton.classList.remove("active");
        }
    });
    // 
    backToTopButton.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });

} catch (err) {
    console.log(err);
}

