let array 
fetch('https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json')
.then(res => res.json())
.then(res => {
    array = res.data
})
let findByLength = document.querySelector('#findByLength')
let findBySubstr = document.querySelector('#findBySubstr')
let input        = document.querySelector('#input')
let checkbox = document.querySelector('#checkbox')
let ol = document.querySelector('ol')

let digit = (number) => {
    let result = []
    array.forEach(word => {
        if(word > number){
            result.push(`<li>${word}</li>`)
        }
    })
    return result.join('')
}

let substr = (substr, checked) => {
    let result = []
    array.forEach(word => {
        if(checked === true ){
            if(word.includes(substr)) {
                result.push(`<li>${word}</li>`)
            }
        } else {
            if(word.toLowerCase().includes(substr.toLowerCase())) {
                result.push(`<li>${word}</li>`)
            }
        }        
    })
    return result.join('')
}

findByLength.addEventListener('click', () => {
    ol.innerHTML = digit(input.value)
})

findBySubstr.addEventListener('click', () => {
    ol.innerHTML = substr(input.value, checkbox.checked)
})

