import { useNavigate } from 'react-router-dom';

import Button from "@mui/material/Button";

export const Apple = () => {
  const navigate = useNavigate();
  const onHomePageButtonClick = () => {
    navigate("/");
};

  return (
    <div><br></br>
      <div style={{ marginLeft: "30px" }}>Apple Page 🍎</div><br></br>
      <Button variant="contained" onClick={onHomePageButtonClick} className="" style={{ marginLeft: "10px" }}>
          Button ➡️ 🏠
      </Button>
    </div>
  );
};