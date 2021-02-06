let url = "https://api.github.com/users";

//then-cath
function setup() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      //   throw new Error("hatali islem", err);
      console.log(err);
    });
}

// setup();

// try-catch
const setup2 = async () => {
  try {
    // read out JSON
    let promise = await fetch(url);
    let data = await promise.json();
    console.log(data[0]);

    // show the avatar
    let img = document.createElement("img");
    img.src = data[0].avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    //wait 3 seconds
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });
    img.remove();
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });

    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

setup2();
