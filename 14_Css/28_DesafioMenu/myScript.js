function verificaHash(name) {
    document.querySelectorAll('a').forEach(e => e.parentNode.style.backgroundColor = "gray")
    
    let element = document.querySelector(`li > [href="#${name}"]`)
    element.parentNode.style.backgroundColor = "blue"
}
