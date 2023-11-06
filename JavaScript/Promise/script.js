let recPromise = function () {
  let exPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let rand = Math.random();

      if (rand > 0.99) {
        resolve("Success: " + rand);
      } else {
        reject("Failure: " + rand);
      }
    }, 1000);
  });

  exPromise
    .then((result) => {
      console.log(result);
      h4.textContent = result;
    })
    .catch((err) => {
      let newH4 = document.createElement("h4");

      console.log(err);
      newH4.textContent = err;
      document.querySelector("body").append(newH4);
      recPromise();
    });
};

recPromise();
