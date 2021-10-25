var span = document.getElementById("age")
var date =  new Date().getFullYear()
var age = date - 2000
span.textContent = age

function onhover(name, image) {
    image.style.height = image.style.height * 2
    image.style.width = image.style.width * 2
    let texthover = document.getElementById("texthover")
    texthover.textContent = name
}

function offhover(image) {
    image.style.height = image.style.height / 2
    image.style.width = image.style.width / 2
    let texthover = document.getElementById("texthover")
    texthover.textContent = ""
}