// text alma
document.getElementById("text").addEventListener("click", textFunc);

//json alma
document.getElementById("json").addEventListener("click", jsonFunc);

//api alma
document.getElementById("api").addEventListener("click", apiFunc);

function textFunc() {
  fetch("index.txt")
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      }
    })
    .then((response) => {
      document.getElementById("output").innerHTML += response;
    })
    .catch((err) => {
      console.error(err);
    });
}

function jsonFunc() {
  fetch("index.json")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((response) => {
      let output = "<ul>";
      response.map((item) => {
        output += `
            <li>
            id: ${item.id}<br/>
                ${item.name}<br/>
                ${item.surname}<br/>
            </li>`;
      });
      output += "</ul>";
      document.getElementById("output").innerHTML += output;
    })
    .catch((err) => {
      console.log(err);
    });
}

function apiFunc() {
  fetch("https://api.github.com/users/ckymn")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
