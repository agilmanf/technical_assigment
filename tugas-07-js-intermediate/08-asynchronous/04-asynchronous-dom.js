const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const warnContainer = document.querySelector(".warn");

const getGitHubUser = (name) => {
  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/users?since=30349253")
      .then((response) => response.json())
      .then((result) => {
        result.forEach((data) => {
          if (data.login == name) resolve(data);
        });
        reject(false);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

elFormUsername.onsubmit = async (e) => {
  e.preventDefault();
  clearData();

  const name = elFormUsername.firstElementChild.value;

  if (name) {
    const data = await getGitHubUser(name).catch((e) => e);
    if(data) {
        showData(data)
    } else {
        warnContainer.classList.remove('d-none');
    }
  } else alert("Harap masukan username!");
};

function showData(data) {
  elCardImg.setAttribute("src", data.avatar_url);
  elCardImg.setAttribute("alt", data.login);
  elCardTitle.innerHTML = data.login;
  elCardBtn.setAttribute("href", data.html_url);

  elCard.classList.remove("d-none");
}

function clearData() {
  warnContainer.classList.add("d-none");
  elCard.classList.add("d-none");
}
