
document.addEventListener("keyup", event => {
    const keyPressed = String.fromCharCode(event.keyCode);
    const keyElement = document.getElementById(keyPressed);
    const highlightedKey = document.querySelector(".selected");

    keyElement.classList.add("hit")
    keyElement.addEventListener('animationend', () => {
        console.log(keyElement);
        keyElement.classList.remove("hit")

    })


})




