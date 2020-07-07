let vkAuth = document.querySelector('#vkAuth')
vkAuth.addEventListener('click', () => {
    window.location.href = "https://oauth.vk.com/authorize?client_id=7533124&redirect_uri=https://pbl6asoad.github.io/models/callback&scope=0&response_type=token&v=5.120";
})

if(localStorage.getItem('access_token')) {
    fetch(`https://api.vk.com/method/friends.get
          ?user_ids=${localStorage.getItem('user_id')}
          &fields=city,domain
          &access_token=${localStorage.getItem('access_token')}
          &name_case=ins
          &count=5
          &order=name
          &v=5.120`, 
          {
            method: 'GET',
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
          .then(res => res.json())
          .then(res => {
              let data = []
              console.log(res);
          })
    
}