import Cookies from "js-cookie";

export const isAuthenticated = () => {
  return Cookies.get("isLoggedIn") === "true";
};

export const setAuthCookie = () => {
  Cookies.set("isLoggedIn", "true", { expires: 1 }); // 1-day expiry
};

export const removeAuthCookie = () => {
  Cookies.remove("isLoggedIn");
};
