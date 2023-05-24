import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    navigate("/apple");
  };

  return (
    <div ><br></br>
      <div style={{ marginLeft: "30px" }}>Home Page 🏠</div><br></br>
      <Link to="/apple">
        <Button variant="contained" onClick={onHomePageButtonClick} className="" style={{ marginLeft: "10px" }}>
          Button ➡️ 🍎
        </Button>
      </Link>
    </div>
  );
};
