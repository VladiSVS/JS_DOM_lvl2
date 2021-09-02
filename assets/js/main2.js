// // eventlistener
// // Mögliche events: click mouse, keyboard, ....

// const button = document.querySelector('button')
// // console.log(button)
// // button.addEventListener(event, function, option)
// button.addEventListener('click', () => {
//     console.log("EVENTS!", 2 + 2)
//     // alert("HALLO")
//     // window.location.href = "index.html"
// })
// button.addEventListener('click', (event) => {
//     console.log("EVENTS!", event)
//     event.target.style.background = "red"
//     // alert("HALLO")
//     // window.location.href = "index.html"
// })
// // const myFunc = () => {
// //     console.log("Testing named function")
// // }
// // button.addEventListener('click', myFunc)

// // document.addEventListener('mousemove', (e) => {
// //     // console.log(e)
// //     console.log(e)
// //     // if (e.target.tagName == "H1") {
// //     e.target.style.background = "lime"
// //     // }
// // })

// const buttons = document.querySelectorAll('button')
// console.log(buttons)
// buttons.forEach(but => {
//     but.addEventListener('click', (e) => {
//         console.log(e)
//         if (e.target.innerHTML == "Hallo") {
//             console.log("Button 1")
//         } else if (e.target.innerHTML == "Hallo2") {
//             console.log("Button 2")
//         }
//     })
// })
const body = document.querySelector('body')

// window.addEventListener('keydown', (e) => {
//     console.log(e)
//     if (e.key == "a") {
//         body.style.background = "aqua"
//     } else if (e.key == "t") {
//         body.style.background = "tomato"
//     } else if (e.key == "g") {
//         body.style.background = "gold"
//     } else {
//         body.style.background = '#000'
//     }
// })

// // Timeout & Interval

// // setTimeout(function, Wartezeit in ms)

// setTimeout(() => {
//     body.style.background = "red"
//     // alert("IH EIN ALERT!")
// }, 2000)

// document.querySelector('section button').addEventListener('click', (event) => {
//     setTimeout(() => {
//         event.target.style.background = "gold"
//     }, 1000)
// })

// // setInterval(function, zeitinms)
// // regelmäßiger Aufruf von einer Funktion
// // so passiert es für IMMER!
// // setInterval(() => {
// //     body.innerHTML += new Date() + "<br>"
// // }, 2000)


// Wenn wir es anhalten wollen:
let myInterval;
document.querySelector('article .one').addEventListener('click', () => {
    myInterval = setInterval(() => {
        console.log(new Date() + "<br>")
        if (body.style.background == "pink") {
            body.style.background = "gold"
        } else {

            body.style.background = "pink"
        }
    }, 500)
})
document.querySelector('article .two').addEventListener('click', () => {
    console.log("Test")
    clearInterval(myInterval)
})

// Vorsicht mit innerHTML! Teilweise entfernen sie die Eventlistener!

let myToggle = true
document.querySelector('.three').addEventListener('click', () => {
    if (myToggle) {
        myInterval = setInterval(() => {
            console.log(new Date() + "<br>")
            if (body.style.background == "pink") {
                body.style.background = "gold"
            } else {

                body.style.background = "pink"
            }
        }, 500)
    } else {
        clearInterval(myInterval)
    }
    myToggle = !myToggle
})