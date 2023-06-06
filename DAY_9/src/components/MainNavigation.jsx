import { RoutePaths } from "../utils/enum"
import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./Login/Login"
import { Register } from "./Register"
import { Home } from "./Home"
import { BookListing } from "./BookListing/BookListing"
import { useAuthContext } from "../context/auth.context"
import { BookStore } from "../components/BookStore"
export const MainNavigation = () => {
    const authContext = useAuthContext();
    const Redirect = <Navigate to={RoutePaths.Login}/>
    return(
        <Routes>
            <Route exact path={RoutePaths.Login} element={<Login/>}/>
            <Route exact path={RoutePaths.Register} element={!authContext.user.id ? <Register/> : Redirect}/>
            <Route exact path={RoutePaths.Home} element={<Home/>}/>
            <Route exact path={RoutePaths.UpdateProfile} element={<Home/>}/>
            <Route exact path={RoutePaths.BookDetails} element={<BookStore/>}/>
            <Route exact path={RoutePaths.BookListing} element={authContext.user.id ? <BookListing/> : Redirect}/>
            {/* <Route exact path={RoutePaths.BookListing} element={true ? <BookListing/> : Redirect}/> */}

        </Routes>
    )
}