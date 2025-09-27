const inputDate = document.getElementById("DateInput");
const btnValidation = document.getElementById("btn-validation-reservation");

inputDate.addEventListener("input", validateForm);

//Function permettant de valider tout le formulaire
function validateForm() {
  const dateOk = validateDate(inputDate);

  if (dateOk) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

function validateDate(input) {
  //Définir mon regex
  const dateRegex =
    /^(((\d{4})\/(0[13578]|1[02])\/(0[1-9]|[12]\d|3[01]))|((\d{4})\/(0[13456789]|1[012])\/(0[1-9]|[12]\d|30))|((\d{4})\/02\/(0[1-9]|1\d|2[0-8]))|(((\d{2}(0[48]|[2468][048]|[13579][26]))|(0[48]|[2468][048]|[13579][26])00)\/02\/29))||^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
  const date = input.value;
  if (date.match(dateRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}
