let parametres = window.location.href.substr(window.location.href.indexOf('#') + 1, window.location.href.length + 1)
parametres = parametres.split('&')
let params = parametres.map((element) => {
   return element = element.split('=')
})
params.forEach((element) => {
    localStorage.setItem(element[0], element[1])
})

window.location.href = 'https://pbl6asoad.github.io/models/index'
// console.log(params);

// console.log(getParameterByName('access_token'));
// localStorage.setItem('access_token', )