import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainMenuBack = () => {
  const navigate = useNavigate();

  let mainMenuTimout: any = setTimeout(() => {
    navigate("/");
  }, 180000);

  const handleAnyClick = useCallback(() => {
    while (mainMenuTimout--) {
      window.clearTimeout(mainMenuTimout);
    }
    mainMenuTimout = setTimeout(() => {
      navigate("/");
    }, 180000);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleAnyClick);
  }, [handleAnyClick]);

  return null;
};
