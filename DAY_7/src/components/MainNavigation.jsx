import { RoutePaths } from "../utils/enum"
import { Route, Routes } from "react-router-dom"
import { Login } from "./Login"
import { Register } from "./Register"
export const MainNavigation = () => {
    return(
        <Routes>
            <Route exact path={RoutePaths.Login} element={<Login/>}/>
            <Route exact path={RoutePaths.Register} element={<Register/>}/>
        </Routes>
    )
}