export const SendToTelegram = () => {
  let isSendTrue = false;

  const butt = document.querySelector("#sendRequest");
  butt.addEventListener("click", () => Start());

  function Start() {
    if (isSendTrue === false) {
      ValidName();
    } else {
      errorMessage("Ми вже прийняли Вашу заявку, очікуйте на дзвінок");
    }
  }

  function ValidName() {
    let name = document.getElementById("name").value;
    if (name.length < 2 || name === "") {
      errorMessage("Введіть Ім'я");
    } else {
      ValidPhone();
    }
  }

  function ValidPhone() {
    let phone = document.getElementById("phone").value;
    let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    let valid = re.test(phone);
    if (phone === "") {
      errorMessage("Введіть номер телефону");
    } else if (valid === false) {
      errorMessage("Номер телефону некоректний");
    } else {
      sendForm();
    }
  }
  function errorMessage(output) {
    document.getElementById("request-form__error-message").innerHTML = output;
  }

  function sendForm() {
    let form = document.getElementById("telegram-form"),
      submit = $(".submit", form),
      data = new FormData();

    $(".submit", form).val("Отправка...");
    $("input, textarea", form).attr("disabled", "");

    data.append("Имя", $('[name="name"]', form).val());
    data.append("Телефон", $('[name="phone"]', form).val());

    $.ajax({
      url: "../php/ajax.php",
      type: "POST",
      data: data,
      cache: false,
      dataType: "json",
      processData: false,
      contentType: false,
      xhr: function () {
        let myXhr = $.ajaxSettings.xhr();

        if (myXhr.upload) {
          myXhr.upload.addEventListener(
            "progress",
            function (e) {
              if (e.lengthComputable) {
                let percentage = (e.loaded / e.total) * 100;
                percentage = percentage.toFixed(0);
                $(".submit", form).html(percentage + "%");
              }
            },
            false
          );
        }

        return myXhr;
      },
      error: function (jqXHR, textStatus) {
        // alert("ERROR: Something went wrong.");
      },
      complete: function () {
        // Тут можем что-то делать ПОСЛЕ успешной отправки формы
        isSendTrue = true;
        errorMessage("Ваша заявка прийнята, дякуємо");
        // window.location += "/#purchase";
        // history.pushState(null, null, '/purchase');
        window.location.hash = "purchase";
        form.reset();
      },
    });
  }
};
