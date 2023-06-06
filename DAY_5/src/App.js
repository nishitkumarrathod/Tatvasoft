// import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home';
import { Register } from './components/Register';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const App = () => {
  return (
    <BrowserRouter>
        <div style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          marginTop:30,
          marginBottom:20
        }}>
          <Link to="/" style={{
            marginLeft:5,
            textDecoration:"none",
            fontSize:17,
            color:'#2E2E2E'
            }}>Home</Link>
          <ArrowForwardIosIcon style={{
            fontSize:17,
            color:"#2E2E2E",
            textAlign:"center"

          }}/>
          <Link to="/register" style={{
            textDecoration:"none",
            fontSize:17,
            color:'rgb(255,89,92)'
            }}>Create an Account</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
