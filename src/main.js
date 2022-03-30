
document.addEventListener("keyup", event => {
    let textBox = document.getElementById('textbox');
    let keyPressed = event.key;
    if(keyPressed == 'Backspace') {
        textBox.innerHTML = textBox.innerHTML.substring(0,textBox.innerHTML.length-1)

    }
    if(keyPressed.length > 1){
        return
    }
    textBox.innerHTML += keyPressed;
    let keyElement = document.getElementById(keyPressed.toUpperCase());
    

    console.log(keyPressed)
    keyElement.classList.add("hit");
    keyElement.addEventListener('animationend', () => {
        keyElement.classList.remove('hit');

        
    })
    

})




