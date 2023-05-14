import { useNavigate } from "react-router";

export default function SplashPage() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to The Comic Stand Club</h1>
      <button onClick={() => navigate("/home")}>Enter</button>
    </div>
  );
}
