let vkAuth = document.querySelector('#vkAuth')
vkAuth.addEventListener('click', () => {
    window.location.href = "https://oauth.vk.com/authorize?client_id=7533124&redirect_uri=https://pbl6asoad.github.io/models/callback&scope=0&response_type=token&v=5.120";
})

if(localStorage.getItem('access_token')) {
    fetch(`https://api.vk.com/method/friends.get?user_ids=${localStorage.getItem('user_id')}&fields=city,domain&access_token=${localStorage.getItem('access_token')}&name_case=ins&count=5&order=name&v=5.120`, 
          {
            method: 'GET',
            mode: 'no-cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer'
          })
          .then((response) => {
            return response.text()
          })
          .then(res => {
              let data = []
              console.log(res);
          })
    
}
