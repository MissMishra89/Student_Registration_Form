const Formele = document.querySelector("form");
Formele.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(Formele);
  const studentDetails = Object.fromEntries(formData.entries());
  console.log(studentDetails);
  fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(studentDetails),
  })
    .then((res) => {
      console.log(res);
      res
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

window.addEventListener("load", () => {
  fetch("http://localhost:3000/students")
    .then((res) => {
      res
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
