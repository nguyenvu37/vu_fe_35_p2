export function checkTokenLogin() {
  return localStorage.getItem("Token") ? true : false;
}

export function checkTokenLoginAdmin() {
  const admin = localStorage.getItem("TokenAdmin");
  return admin ? true : false;
}
