import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './sign-up.css'
import { URL } from '../../actions/baseurl'
import './sign-up.css'


export default function Signup() {
    const name = useRef(null)
    const lastname = useRef(null)
    const password = useRef(null)
    const email = useRef(null)
    const image = useRef(null)
      const [show, setShow] = useState(false);
    function senddata() {
        
        axios.post(URL + 'users', {
            "first_name": name.current.value,
            "last_name": lastname.current.value,
            "password": password.current.value,
            "email": email.current.value,
            "image": image.current.value
        })
            .then(response => {
                console.log(response)
                setShow(true)
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })

    }
    function senddatatoserver()
    {   if ( name.current.value !=='' && email.current.value !=='' && password.current.value !=='' && lastname.current.value !=='')
         { alert("all remplr")
          senddata()
             }
           else
           alert("fill all input")

    }
    return (
<div className='background'>
        <div className='background'>
        <div>
        

<div className='sign-in' >         
<form class="text-center border border-black p-2 text" action="#!">

    <p class="h4 mb-4">Sign-up</p>
    <div class="form-row mb-4">
    <div class="col">
<input ref={name } type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name"/>
</div>

<div class="col">
 <input ref={lastname } type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name"/>
</div>
</div>

    <input ref={ email} type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail"></input>
    
   
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"></input>
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

    <div class="d-flex justify-content-around">
        <div>
            
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"></input>
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
       
        <div>
          
            <a href="">Forgot password?</a>
        </div>
    </div>
<button class="btn btn-info btn-block my-4" type="submit" onClick={senddatatoserver}>Sign in</button>    

                   

<div class="ui floating message">
                    <p>you have acount !! <Link to="login"> you can connect from here </Link> </p>
                </div>


    <p>or sign in with:</p>

    <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>

</form>

        
</div> 




</div>


</div>
</div>

    )
}
