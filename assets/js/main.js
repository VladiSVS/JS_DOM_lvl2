// DOM 

const myDiv = document.getElementById('myDiv')
console.log(myDiv)
myDiv.style.background = "gold"


// Arrayartige HTML Collection
// keine Array Methoden möglich
// müssen auch immer sagen mit welchem Element wir reden wollen!
// Tag Name = HTML Tag
const allDivs = document.getElementsByTagName('div')
console.log('allDivs', allDivs)

for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].style.background = "lime"
    allDivs[i].style.border = "1px solid black"
}

const allSect = document.getElementsByTagName('section')
console.log(allSect)
// allSect.style.border = "5px solid tomato" kann nicht funktionieren!
allSect[0].style.border = "5px solid tomato"


// Suchen wir nach dem ClassName
const allCenter = document.getElementsByClassName('center')
console.log(allCenter)

for (let i = 0; i < allCenter.length; i++) {
    allCenter[i].style.background = "lightblue"
}


// für Inputs mit name Attribut
const allGender = document.getElementsByName('gender')
const checkGender = () => {
    console.log(allGender)
    for (let i = 0; i < allGender.length; i++) {
        // console.log(allGender[i].checked)
        if (allGender[i].checked) {
            console.log(allGender[i].value)
        }
    }

}

// allDivs[1].style.background = "yellow"

// querySelector

// document.querySelector('css')
// gibt das ERSTE Element zurück, auf das die CSS Eigenschaft zutrifft!
// const query = document.querySelector('div')
// const query = document.querySelector('.center')
// const query = document.querySelector('section .center')
const query = document.querySelector('.center:nth-of-type(3)')
console.log(query)
query.style.border = "5px solid purple"


const allQuery = document.querySelectorAll('section .center')
console.log(allQuery)
allQuery.forEach(element => {
    element.innerHTML = "JS changed my life"
    element.style.color = "red"
})

const changeSome = () => {
    const myDivs = document.querySelectorAll('div')
    myDivs.forEach(div => {
        div.style.height = "0px"
    })
}

