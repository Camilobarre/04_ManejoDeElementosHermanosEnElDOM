const main = document.querySelector('main')
const btnExample = createButtonInfo()

//Insert the element before the container
// main.before(btnExample)

//Insert the element after the container
//main.after(btnExample)

//Insert the element before the first child
//main.prepend(btnExample)

//Insert the element after the last child
//main.append(btnExample)

//Replace all element children
//main.replaceChildren(btnExample)

//Replace all main
//main.replaceWith(btnExample)

//The element is autodelete
// main.remove()

//Creamos un botón
function createButtonInfo() {
    const btn = document.createElement("button")
    btn.classList.add("btn", "btn-info")
    btn.textContent = "Point"
    return btn
}

// console.log(main);
// console.log(main.children);

// const btnDark= document.querySelector(".btn-dark")
// console.log(btnDark.parentElement);

// console.log(main.firstElementChild);
// console.log(main.lastElementChild);

console.log(main.previousElementSibling);
console.log(main);
console.log(main.nextElementSibling);