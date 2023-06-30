import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useState, useRef} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../Layout/Navbar';

export default function LogIn() {

    const navTitle = {
        height:'100vh',
        backgroundColor: 'black',
        color: "rgb(0, 255, 0)",
        padding: '5%'
    }

    const Alert = () =>{
        Swal.fire("Incorrect Password!")
    }

    const Succ = () =>{
        Swal.fire("Log In Success!")
        email = "";
        password = "";
    }

    const FillAlert = () =>{
        Swal.fire("Please fill all the information!")
    }
    
    let navegate = useNavigate();
    
    const [user,setUser]=useState({
        email:"",
        password:"",
    });
    
    let {email,password}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value });
       
    };
    
    //Log In Process
     const onSubmit= async (e)=>{
        e.preventDefault(); 
        //Log In Null Info
        if(email==="" ||  password===""){
            FillAlert();
        }
        //Complete Info Condition
        else if(email!=="" || password!==""){
            try{
                //Post Log In Info
                await axios.post("http://localhost:8080/api/v1/auth/authenticate",user)
                //Confirmation Success Routing
                navegate("/Account");
                Succ();
            }
            //Somthing Error
            catch(err){
                Alert();
            }
        }
    }


        const checkbox = useRef();
        const showPassword = () => {
            if (checkbox.current.checked) {
                document.getElementById('Pass').type = 'text'
            } else {
                document.getElementById('Pass').type = 'password'
            }
          }
  return (
    <div> <Navbar />
    <div style={navTitle}>
        <div className='container' >
            <div className='row'>  
                <div className='col-md-6 offset-md-3 border p-4 mt-2 shadow'>
                    <h2 className='text-center m4'>Log In</h2>
                    
                    <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb3'>
                    <label htmlFor='Username' className='form-labe'>
                        E-mail
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter e-mail'
                    name='email'
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb3'>
                    <label htmlFor='Password' className='form-labe'>
                        Password
                    </label>
                    <input
                    type={"password"}
                    className='form-control'
                    placeholder='Enter password'
                    name='password'
                    id='Pass'
                    value={password}
                    onChange={(e)=>onInputChange(e)}
                    />
                    <input
                    type='checkbox'
                    name='checkBox'
                    ref={checkbox} 
                    id="showPassword"
                    onClick={showPassword}
                    />

                    <label htmlFor='Vissable Password' className='ShowPass'>
                         Show Password
                    </label>
                </div>
                <br></br>
                <div>
                <button type="submit" className='btn btn-outline-light bg-primary'>Submit</button>
                {"         "}
                <Link className='btn btn-outline-light bg-danger' to={"/"}>Cancel</Link>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
