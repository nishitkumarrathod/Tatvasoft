import { useEffect } from "react";
export const Home = () =>{
    useEffect(() => {
        localStorage.setItem("isLogin",false);
    });
    return (<h1></h1>) 
}