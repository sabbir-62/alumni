import { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Cookies from "js-cookie";
import './myAccount.css'

const MyAccount = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        role: ""
    })

    const navigate = useNavigate(); // Call useNavigate as a function

    const myAccountPage = async() => {
        const cookie = Cookies.get("myCookie");
        const url = "https://alumni-psok.onrender.com/api/v1/about";
        // post data using fetch api
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
               cookie
            }),
           
        })
       .then((response) => response.json())
       .then((data) => {
            if(!data.success){
                alert(data.message)
                navigate('/login');
            }
            else{
                setState({
                    name:data.user.name,
                    email: data.user.email,
                    phone: data.user.phone,
                    role: data.user.role
                })
            }
           
       })
       .catch((error) => {
            console.log(error)
            //alert("No user logged in")
            navigate('/login');
       })
      
      
    }

    const handleClick = () => {
        Cookies.remove("myCookie");
        navigate('/login');
        alert("Logout Success. Please Login")
    }


    useEffect(() => {
        myAccountPage();
    }, []); // Empty dependency array to run the effect once

    return (
        <div className="container about">
            <div className="row about-card">
                <div className="heading">
                    <h1>{state.name}</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ul>
                            <li>
                                Name :
                            </li>
                            <li>
                                Email :
                            </li>
                            <li>
                                Phone :
                            </li>
                            <li>
                                Role :
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>
                                {state.name}
                            </li>
                            <li>
                                {state.email}
                            </li>
                            <li>
                                {state.phone}
                            </li>
                            <li>
                                {state.role}
                            </li>
                        </ul>
                    </div>
                </div>
                <button className='btn btn-danger mt-3 ms-5' onClick={handleClick}>Logout</button>
            </div>    
        </div>
    );
};

export default MyAccount;