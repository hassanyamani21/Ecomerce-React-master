import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";

import firebase from "firebase/app";
import axios from 'axios';



const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

class SignUpView extends Component {


  onSubmit = async (values) => {

    console.log(values)
    alert("Submitting")

    axios.post('https://reactjsproject.pythonanywhere.com/api-signup?firstName=' + values['firstName'] + "&lastName=" + values['lastName'] + "&mobileNo=" + values['mobileNo'] + "&password=" + values['password'], JSON.stringify(values))
    .then(response => {
      console.log(response);
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
            <h4 className="text-center">Sign Up</h4>
            <SingUpForm data={this.state}  onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
