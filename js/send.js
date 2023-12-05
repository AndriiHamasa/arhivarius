const nickname = "arhivarius";

const sendRequest = async (body) => {
  // const url = "http://localhost:3035/send-message"
  // const url = "https://hasaserver.onrender.com";
  // const url = "https://vitalbarbatelegserver.onrender.com";
  const url = "https://arhivariusserrver.onrender.com"

  const jsonData = JSON.stringify(body);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${url}/send-message`, requestOptions);

    if (!response.ok) {
      throw new Error("Помилка мережі: " + response.status);
    }
  } catch (error) {
    console.error("Помилка:", error);
  }
};

const form1 = document.querySelector(".order_form_custom1");
const form2 = document.querySelector(".order_form_custom2");

form1.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name1 = form1.querySelector('input[name="nameCustom1"]').value;
  const phone1 = form1.querySelector('input[name="phoneCustom1"]').value;

  // console.log('name', name)
  // console.log('phone', phone)

  const formData = {
    nickname,
    message: "Новий клієнт",
    name: name1,
    phone: phone1,
  };

  console.log('formData', formData)

  form1.querySelector('input[name="nameCustom1"]').value = "";
  form1.querySelector('input[name="phoneCustom1"]').value = "";

  await sendRequest(formData);

  // console.log('formData', formData)

  // if (nickname === "" || name === "" || phone === "") {
  //   Swal.fire({
  //     title: "перевірте дані",
  //     icon: "error",
  //     timer: 3000,
  //     showConfirmButton: true,
  //   });
  // } else {
  //   console.log("formData", formData);

  //   Swal.fire({
  //     title: "Замовлення успішне",
  //     icon: "success",
  //     timer: 3000,
  //     showConfirmButton: true,
  //   });

  //   // alert("Данные отправлено")

  //   form.querySelector('input[name="nameCustom"]').value = "";
  //   form.querySelector('input[name="phoneCustom"]').value = "";

  //   await sendRequest(formData);
  // }
});

form2.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name2 = form2.querySelector('input[name="nameCustom2"]').value;
  const phone2 = form2.querySelector('input[name="phoneCustom2"]').value;

  // console.log('name', name)
  // console.log('phone', phone)

  const formData = {
    nickname,
    message: "Новий клієнт",
    name: name2,
    phone: phone2,
  };

  // console.log('formData', formData)

  form.querySelector('input[name="nameCustom2"]').value = "";
  form.querySelector('input[name="phoneCustom2"]').value = "";

  await sendRequest(formData);

  // if (nickname === "" || name === "" || phone === "") {
  //   Swal.fire({
  //     title: "перевірте дані",
  //     icon: "error",
  //     timer: 3000,
  //     showConfirmButton: true,
  //   });
  // } else {
  //   console.log("formData", formData);

  //   Swal.fire({
  //     title: "Замовлення успішне",
  //     icon: "success",
  //     timer: 3000,
  //     showConfirmButton: true,
  //   });

  //   // alert("Данные отправлено")

  //   form.querySelector('input[name="nameCustom"]').value = "";
  //   form.querySelector('input[name="phoneCustom"]').value = "";

  //   await sendRequest(formData);
  // }
});
