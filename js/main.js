const menuBtn = document.querySelector('.container');
let menuActive = false;
menuBtn.addEventListener('click', () => {
    if(!menuActive) {
        menuBtn.classList.add('active');
        menuActive = true;
    } else {
        menuBtn.classList.remove('active');
        menuActive = false;
    }
});