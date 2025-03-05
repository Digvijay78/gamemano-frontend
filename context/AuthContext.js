"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  const login = (username, password) => {
    console.log("COMING EMAIL N PASS", username, password);
    
    const storedUser = localStorage.getItem("username");
    const storedUserPsswd = localStorage.getItem("password");

    console.log("LOCAL ", storedUser, storedUserPsswd);
    
    if (storedUser === username && storedUserPsswd === password) {
      localStorage.setItem("isLoggedIn", "true");
      setIsAuthenticated(true);

      // Redirect to the previous page or home
      const redirectTo = localStorage.getItem("from") || "/";
      localStorage.removeItem("from"); // Clean up
      router.push(redirectTo);
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
