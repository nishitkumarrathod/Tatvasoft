// import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookStore } from './components/BookStore';
import { useEffect, useState } from 'react';
import { MainNavigation } from './components/MainNavigation';
const App = () => {
  // const [isLogin,setIsLogin] = useState(localStorage.getItem("isLogin"));
  const isLogin = localStorage.getItem("isLogin");
  useEffect(() => {
    // console.log(isLogin);
    localStorage.setItem("isLogin",false);
    console.log(localStorage.getItem("isLogin"));
  });
  return (
    
    <div>
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
          {/* <Link to="/register" style={{
            textDecoration:"none",
            fontSize:17,
            color:'rgb(255,89,92)'
            }}>Create an Account</Link> */}
          <Link to="/login" style={{
            textDecoration:"none",
            fontSize:17,
            color:'rgb(255,89,92)'
            }}>Login</Link>
          </div>
        <ToastContainer />
        <MainNavigation/>
        {/* <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/bookstore" element={isLogin? <BookStore/> : <Login/>}></Route>
        </Routes> */}
      </BrowserRouter>
      {/* <form action="http://localhost:8000/posts" method="post">
        <input type="text" name="name"></input>
              <button type="submit">Connected?</button>
      </form> */}
      </div>
  );
}

export default App;
