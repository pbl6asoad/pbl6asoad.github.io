let parametres = window.location.href.substr(window.location.href.indexOf('#') + 1, 200)
parametres = parametres.split('&')
let params = parametres.map((element) => {
   return element = element.split('=')
})
console.log(params);

// console.log(getParameterByName('access_token'));
// localStorage.setItem('access_token', )