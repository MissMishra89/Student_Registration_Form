console.log("Hello I am Connected");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  const studentDetails = Object.fromEntries(formData);

  console.log(studentDetails);

  fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
      console.log(res);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      res
        .json()
        .then((data) => {
          console.log(data);

          const tableEl = document.querySelector("table");

          tableEl.innerHTML = `<tr>
        <th>SN</th>
        <th>Student Name</th>
        <th>Class</th>
        <th>Gender</th>
        <th>Mobile Number</th>
      </tr>`;

          if (!data.length) {
            tableEl.innerHTML =
              tableEl.innerHTML +
              `<tr>
        <td colspan="5">No Student Found</td>
      </tr>`;

            return;
          }

          for (let i = 0; i < data.length; i++) {
            tableEl.innerHTML =
              tableEl.innerHTML +
              `<tr>
        <td>${i + 1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].class}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].mobileNumber}</td>
      </tr>`;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
