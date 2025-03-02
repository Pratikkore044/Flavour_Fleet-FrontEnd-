import { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SessionTimeout = () => {
  const navigate = useNavigate();
  const SESSION_TIMEOUT = 2 * 60 * 1000; // 2 minutes
  const timeoutRef = useRef(null);

  // Logout function
  const handleLogout = useCallback(() => {
    alert("Session expired due to inactivity!");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/Loginpage");
  }, [navigate]);

  // Reset session timer
  const resetTimer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleLogout, SESSION_TIMEOUT);
  }, [handleLogout]);

  useEffect(() => {
    // Attach event listeners
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    // If user is authenticated, start session timer
    if (localStorage.getItem("authToken")) {
      resetTimer();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, [resetTimer]);

  return null;
};

export default SessionTimeout;
