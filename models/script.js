let vkAuth = document.querySelector("#vkAuth");
let getFriends = document.querySelector("#getFriends");
let getInfo = function(){
  if(localStorage.getItem('name')) {
    document.querySelector("#accountInfo").innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${localStorage.getItem('img')}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${localStorage.getItem('name')} ${localStorage.getItem('surname')}</h5>
      <p class="card-text">City: ${localStorage.getItem('city')}</p>
      <a href="vk.com/id${localStorage.getItem('user_id')}" class="btn btn-primary">Go to page</a>
    </div>
  </div>`;
  }
}
getInfo()
vkAuth.addEventListener("click", () => {
  window.location.href =
    "https://oauth.vk.com/authorize?client_id=7533124&redirect_uri=https://pbl6asoad.github.io/models/callback&scope=offline&response_type=token&v=5.120";
});
getFriends.addEventListener("click", () => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://api.vk.com/method/friends.get?user_ids=${localStorage.getItem(
      "user_id"
    )}&fields=city,domain&access_token=${localStorage.getItem(
      "access_token"
    )}&name_case=ins&count=5&order=name&v=5.120`
  )
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res.response.items);
      let data = [];
      data = res.response.items.map((element) => {
        return `
                <a href="vk.com/id${element.id}">
                  <p>${element.first_name} ${element.last_name}</p>
                </a>
               `;
      });
      document.querySelector("p").innerHTML = data.join("");
      console.log(data);
    });
});

if (localStorage.getItem("access_token")) {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://api.vk.com/method/users.get?access_token=${localStorage.getItem(
      "access_token"
    )}&user_ids=${localStorage.getItem(
      "user_id"
    )}&fields=photo_max,city,verified&name_case=Nom&v=5.120`
  )
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem('img', res.response[0].photo_max)
      localStorage.setItem('name', res.response[0].first_name)
      localStorage.setItem('surname', res.response[0].last_name)
      localStorage.setItem('city', res.response[0].city.title)
      getInfo()
    });
}
