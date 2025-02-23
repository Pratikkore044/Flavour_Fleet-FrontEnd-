import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionTimeout = () => {
  const navigate = useNavigate();
  const SESSION_TIMEOUT = 3 * 60 * 1000; // 3 minutes (180,000ms)

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleLogout();
      }, SESSION_TIMEOUT);
    };

    const handleUserActivity = () => {
      resetTimer();
    };

    if (localStorage.getItem("authToken")) {
      resetTimer();
      window.addEventListener("mousemove", handleUserActivity);
      window.addEventListener("keydown", handleUserActivity);
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
    };
  }, []);

  const handleLogout = () => {
    alert("Session expired due to inactivity!");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/Loginpage");
  };

  return null;
};

export default SessionTimeout;
