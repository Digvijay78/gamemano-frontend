export const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    return !!localStorage.getItem("user"); // Returns true if user exists
  }
  return false;
};
