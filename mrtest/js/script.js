let array 
fetch('https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json')
.then(res => res.json())
.then(res => {
    array = res.data
})
let popup        = document.querySelector('#pop-up')
let findByLength = document.querySelector('#findByLength')
let findBySubstr = document.querySelector('#findBySubstr')
let input        = document.querySelector('#input')
let checkbox     = document.querySelector('#checkbox')
let ol           = document.querySelector('ol')
let hided_pop_up = document.querySelector('#pop-up-hided') 



let togglePopUp = (isShowed) => {
   if(isShowed){
       popup.style.display = "block"
       ol.classList = ['blurred']
       hided_pop_up.style.display = "none"
   } else {
       popup.style.display = "none"
       ol.classList = ['']
       hided_pop_up.style.display = "block"
   }
}

let digit = (number) => {
    let result = []
    array.forEach(word => {
        if(word.length > number){
            result.push(`<li>${word}</li>`)
        }
    })
    togglePopUp(false)
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
    togglePopUp(false)
    return result.join('')
}

hided_pop_up.addEventListener('mouseenter', () => {
    hided_pop_up.className = 'position-absolute hided-pop-up__animation-hover'
    hided_pop_up.addEventListener('click', () => {
        togglePopUp(true)
    })
})
hided_pop_up.addEventListener('mouseleave', () => {
    hided_pop_up.className = 'position-absolute hided-pop-up__animation-default'
})
findByLength.addEventListener('click', () => {
    ol.innerHTML = digit(input.value)
})

findBySubstr.addEventListener('click', () => {
    ol.innerHTML = substr(input.value, checkbox.checked)
})

