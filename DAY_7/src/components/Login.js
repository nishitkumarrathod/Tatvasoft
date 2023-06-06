// import { Regis   ter } from "./Register"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { TextField } from "@mui/material"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import authService from "../services/auth.service"
import { useEffect } from "react"
export const Login = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     localStorage.setItem("isLogin",false);
    // })
    const initialValues = {
        email:"",
        password:""
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email format").required("Please fill Email"),
        password: Yup.string().min(5,"Password must contain atleast 5 character").required("Please enter password")
    });
    const redirectToRegister = () => {
        navigate("/register");
    }
    const onFormSubmitLogin = async (values) => {

        console.log(values);
        const requestData = {
            email: values.email,
            password: values.password,
        }
        await authService.login(values).then((res) => {
            // localStorage.setItem("isLogin",true);
            navigate("/bookstore");
            toast.success('Login Successfull', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            }
        )  
    }
    return(
        <div 
        style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            rowGap:10
        }}>
            <div style={{
                            fontSize:32,
                            fontWeight:"bolder",
                            color:"#2E2E2E",
                        }}>
                            Login or Create an Account
                        </div>
                        <div style={{
                            width:140,
                            height:0,
                            border:1,
                            borderStyle: "solid",
                            borderColor:"rgb(255,89,92)",
                            marginBottom:30
                        }}> </div>
            {/* <BrowserRouter> */}
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"row-reverse",
                columnGap:100
            }}>
            <Formik
                // initialValues={initialValues}
                // validationSchema={validationSchema}
                // onSubmit={onFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onFormSubmitLogin}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"column",
                            rowGap:20
                        }}>
                        <div>
                            <div>Email*</div>
                                <TextField 
                                variant="outlined" 
                                // label="Email" 
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                size="small"
                                style={{
                                    width:400
                                }}
                                ></TextField>
                                <div style={{
                                    color:"red",
                                    fontSize:13,
                                }}
                                >
                                    {touched.email && errors.email}
                                </div>
                            </div> 
                            <div>
                                <div>Password*</div>

                                <TextField 
                                variant="outlined" 
                                // label="Password" 
                                type="password" 
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                size="small"
                                style={{
                                    width:400
                                }}
                                ></TextField>
                                <div style={{
                                    color:"red",
                                    fontSize:13,
                                }}
                                >
                                    {touched.password && errors.password}
                                </div>
                            </div>
                            <Button variant="contained" type="submit"
                            style={{
                                backgroundColor:"rgb(255,89,92)",
                                borderRadius:3,
                                fontWeight:"bold"
                            }}>
                                Login
                            </Button>
                        </div>
                        
                    </form> 
                )}
            </Formik>               
                <Button variant="contained" onClick={redirectToRegister}
                style={{
                    backgroundColor:"rgb(255,89,92)",
                    borderRadius:3,
                    fontWeight:"bold"
                }}>
                    {/* <Link to="/register">Create an Account</Link> */}
                    Create an Account
                </Button>
            </div>
                {/* <Routes>
                    <Route path="/register" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter> */}
        </div>
    )
}