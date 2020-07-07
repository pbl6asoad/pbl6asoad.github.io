let parametres = window.location.href.substr(window.location.href.indexOf('#') + 1, 200)
parametres = parametres.split('&')
parametres.forEach((element) => {
   return element = element.split('=')
   
})
console.log(parametres);

// console.log(getParameterByName('access_token'));
// localStorage.setItem('access_token', )