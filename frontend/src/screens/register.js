import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {register} from "../action/userAction"; 
import Loading from "../components/Loading"; 
import MessageBox from "../components/MessageBox";


export default function Register(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); 
    const userReg = useSelector((x)=>x.userRegister);
    const {loading, userInfo, error} = userReg
    const redirect = props.location.search ? props.location.search : "/";
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(register(name, email, password))
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);


    return(
        <div className="login-page">
            <div className="box">

                <div className="right">
                        <h3>Welcome Back!</h3>	
                        <Link to="/login">		 
                            <button type="button" className="login-btn">Login</button>
                        </Link>	
                </div>

                <div className="form">
                    <form onSubmit={submitHandler}>
                    <div className="register-form ">
                        <h3>REGISTER</h3>
                        <div className="form-group">
                            <input type="text" placeholder="Full Name" className="form-control" onChange={(e)=>setName(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Email Address" className="form-control" onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" onChange={(e)=>setPassword(e.target.value)} required/>
                        </div> 	
                        <button type="submit" className="submit-btn">Register</button>	  
                    </div>
                    </form>
                    {loading && <Loading></Loading>}
                    {error && <MessageBox>error</MessageBox>}
                </div>

            </div>
        </div>
    );
}