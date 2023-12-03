const nickname = "arhivarius";

const sendRequest = async (body) => {
  const url = "https://hasaserver.onrender.com";

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

const form = document.getElementById("order_form_custom");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.querySelector('input[name="nameCustom"]').value;
  const phone = form.querySelector('input[name="phoneCustom"]').value;

  // console.log('name', name)
  // console.log('phone', phone)

  const formData = {
    nickname,
    message: "Новий клієнт",
    name,
    phone,
  };

  // console.log('formData', formData)

  if (nickname === "" || name === "" || phone === "") {
    Swal.fire({
      title: "перевірте дані",
      icon: "error",
      timer: 3000,
      showConfirmButton: true,
    });
  } else {
    

    console.log("formData", formData);

    Swal.fire({
      title: "Замовлення успішне",
      icon: "success",
      timer: 3000,
      showConfirmButton: true,
    });

    // alert("Данные отправлено")

    form.querySelector('input[name="nameCustom"]').value = "";
    form.querySelector('input[name="phoneCustom"]').value = "";

    await sendRequest(formData);
  }
});
