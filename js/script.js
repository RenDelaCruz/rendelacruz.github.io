
document.addEventListener("mousemove", function (e) {
    const card = document.querySelector(".card")
    let cursorX = e.clientX;
    let cursorY = e.clientY;

    let cardCenterX = card.offsetWidth / 2;
    let cardCenterY = card.offsetHeight / 2;

    card.style.left = (cursorX - cardCenterX) + "px";
    card.style.top = (cursorY - cardCenterY) + "px";
});