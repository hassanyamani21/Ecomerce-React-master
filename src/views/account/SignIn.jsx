import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Cookies from 'universal-cookie';


const SignInForm = lazy(() => import("../../components/account/SignInForm"));


class SignInView extends Component {
  onSubmit = async (values) => { 
    console.log(values)
    axios.post('https://reactjsproject.pythonanywhere.com/api-signin?mobileNo=' + values['mobileNo'] + "&password=" + values['password'], JSON.stringify(values))
    .then(response => {
      console.log(response);
      if(response.data['status'] == "success"){
        const cookies = new Cookies();
        cookies.set('loggedin', 'true', { path: '/' });
        cookies.set('user', response.data['user'], { path: '/' });
    
       window.location.href = '/'
      }else{
        alert("Userename or password is incorrect")
      }
    
    }
      
        )
    .catch(error => {
       
        console.error('There was an error!', error);
    });
    
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row border">
       
          <div className="col-md-8 mx-auto p-3">
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInView;
