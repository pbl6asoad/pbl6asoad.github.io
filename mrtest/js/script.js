let array 
const popup        = document.querySelector('#pop-up')
const findByLength = document.querySelector('#findByLength')
const findBySubstr = document.querySelector('#findBySubstr')
const input        = document.querySelector('#input')
const checkbox     = document.querySelector('#checkbox')
const ol           = document.querySelector('ol')
const hidedPopUp   = document.querySelector('#pop-up-hided') 



const togglePopUp = (isShowed) => {
    if(isShowed){
        popup.style.display = "block"
        ol.classList = ['blurred']
        hidedPopUp.style.display = "none"
    } else {
        popup.style.display = "none"
        ol.classList = ['']
        hidedPopUp.style.display = "block"
    }
}

hidedPopUp.addEventListener('click', () => {
    togglePopUp(true)
})
findByLength.addEventListener('click', () => {
    ol.innerHTML = digit(input.value)
})

findBySubstr.addEventListener('click', () => {
    ol.innerHTML = substr(input.value, checkbox.checked)
})

const digit = (number) => {
    const result = []
    array.forEach(word => {
        if(word.length > number){
            result.push(`<li>${word}</li>`)
        }
    })
    togglePopUp(false)
    return result.join('')
}

const substr = (substr, checked) => {
    const result = []
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

const httpGetRequest = ((url = "https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json") => {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            array = res.data
        })
})()