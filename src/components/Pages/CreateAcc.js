import React from 'react'
import {Route, Link, Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect, setState, useRef} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Backgound from './Background.jpg'
import Navbar from '../Layout/Navbar';

export default function CreateAcc() {
    const AccSuccess = () =>{
        Swal.fire("Creating Account Success!\nThank you "+firstname+"!")
    }

    const Alert = () =>{
        Swal.fire("Incorrect Password!")
    }

    const FillAlert = () =>{
        Swal.fire("Please fill all the information!")
    }
    
    let navegate = useNavigate();
    
    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        conpassword:""
    });
    

    const{firstname,lastname,email,password,conpassword}=user

    const CBValue = useState({
        checkBox:""
        
    })

    const{checkBox}=CBValue
    

    const onCheck=(e)=>{
        CBValue({...CBValue,[e.target.name]: e.target.value });
       
    };


    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value });
       
    };
    
     const onSubmit= async (e)=>{
        e.preventDefault(); 
        if(firstname=="" || lastname=="" || email=="" || password=="" || conpassword==""){
            FillAlert();
        }
        else if(password==conpassword){
         await axios.post("http://localhost:8080/api/v1/auth/register",user)
         AccSuccess();
        navegate("/")
        }
        else{
            Alert();
        }
        }
        const navTitle = {
            paddingTop: '2%',
            height:'100vh',
            backgroundColor: 'black',
            color: "rgb(0, 255, 0)",
            
        }
        
        const checkbox = useRef();
        const showPassword = () => {
            if (checkbox.current.checked) {
                document.getElementById('ConPass').type = 'text'
                document.getElementById('Pass').type = 'text'
            } else {
                document.getElementById('ConPass').type = 'password'
                document.getElementById('Pass').type = 'password'
            }
          }

  return (
    <div> <Navbar />
    <div style={navTitle}>
    <div className='container' >
        <div className='row'>
            <div className='col-md-6 offset-md-3 border p-4 mt-2 shadow'>
                <h2 className='text-center m4'>Register Account</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb3'>
                    <label htmlFor='Name' className='form-labe'>
                        First Name
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter Your First Name'
                    name='firstname'
                    value={firstname}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb3'>
                    <label htmlFor='Username' className='form-labe'>
                        Last Name
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter Your Last Name'
                    name='lastname'
                    value={lastname}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb3'>
                    <label htmlFor='E-mail' className='form-labe'>
                        E-mail
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter Your E-mail'
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
                    placeholder='Enter Your Password'
                    name='password'
                    value={password}
                    id='Pass'
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb3'>
                    <label htmlFor='Confirm Password' className='form-labe'>
                        Confirm Password
                    </label>
                    <input
                    type={"password"}
                    className='form-control'
                    placeholder='Enter Your Confirm Password'
                    name='conpassword'
                    id='ConPass'
                    value={conpassword} 
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

