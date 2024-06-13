import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => navigate("/");

  return <button onClick={handleBackClick}>Назад</button>;
};
