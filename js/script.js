// gestion des cookies
const tokenCookieName = "accestoken";
const signoutBtn = document.getElementById("signout-btn");
const RoleCookieName = "role";
const apiUrl = "https://127.0.0.1:8000/api/";

signoutBtn.addEventListener("click", signout);

function getRole() {
  const roleCookie = getCookie(RoleCookieName); // récupère ROLE_ADMIN ou ROLE_USER
  if (!roleCookie) return null;

  // transformation en valeur simplifiée
  switch (roleCookie) {
    case "ROLE_ADMIN":
      return "admin";
    case "ROLE_USER":
      return "client";
    default:
      return null;
  }
}

function signout() {
  eraseCookie(tokenCookieName);
  eraseCookie(RoleCookieName);
  window.location.reload();
}

function setToken(token) {
  setCookie(tokenCookieName, token, 7);
}

function getToken() {
  return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (const element of ca) {
    let c = element;
    while (c.indexOf(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}

// Affichage/masquage des éléments en fonction du rôle
function showAndHideElementsForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show]");

  allElementsToEdit.forEach((element) => {
    switch (element.dataset.show) {
      case "disconnected":
        if (userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "connected":
        if (!userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "admin":
        if (!userConnected || role != "admin") {
          element.classList.add("d-none");
        }
        break;
      case "client":
        if (!userConnected || role != "client") {
          element.classList.add("d-none");
        }
        break;
    }
  });
}
