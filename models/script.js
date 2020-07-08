let vkAuth = document.querySelector("#vkAuth");
let getFriends = document.querySelector("#getFriends");
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
  fetch(`https://api.vk.com/method/users.get?
        access_token=${localStorage.getItem(
          "access_token"
        )}
        &user_ids=${localStorage.getItem(
          "user_id"
        )}&fields=photo_50,city,verified&name_case=Nom&v=5.120`)
        .then(res => res.json())
        .then(res => console.log(res))
}
