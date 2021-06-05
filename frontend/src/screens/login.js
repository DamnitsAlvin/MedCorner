import React , {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signin} from "../action/userAction";
import {Link} from "react-router-dom";
import MessageBox from "../components/MessageBox";
import Loading from "../components/Loading";


export default function Login(props){
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const userSignin = useSelector((state)=>state.userSignin); 
	const {userInfo, loading,error} = userSignin; 

	const redirect = props.location.search ? props.location.search.split("=")[1] : "/";

	console.log(error);
	const submitHandler = (e) =>{
		e.preventDefault();
		dispatch(signin(email, password))
	}
	useEffect(()=>{
		if(userInfo){
			props.history.push(redirect); 
		}
	}, [props.history, redirect, userInfo])


    return(
		<div className="login-page">
		 <div className="box">
			 <div className="left">
				 <h3>Create Account</h3>
					<Link to="/register">
						<button type="button" className="register-btn">Register</button>
					</Link>
			 </div>
			 
			 <div className="form">
				<form onSubmit={submitHandler}>
				
					<div className="login-form">
						<h3>LOGIN</h3>
						<div className="form-group">
							<input type="text" placeholder="Email Address" className="form-control" onChange={(e)=>setEmail(e.target.value)} required/>
						</div>
						<div className="form-group">
							<input type="password" placeholder="Password" className="form-control" onChange={(e)=>setPassword(e.target.value)} required/>
						</div>
						<button type="submit" className="submit-btn">Login</button>
					</div>
				</form>
				{loading && <Loading></Loading>}
				{error && <MessageBox>{error}</MessageBox>}
			 </div>
			 
		 </div>
	
	 </div>
    );
}