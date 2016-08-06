import React, {Component} from 'react';
import {Fieldset, Field, createValue} from 'react-forms'
import $ from 'jquery';

const Login = React.createClass({

	getInitialState: function() {

		var formValue = createValue({
			
			username: "", 
			password: "" 			
		})

		return formValue;
	},

	componentDidMount : function() {

	},


	handleUsernameChange : function(event) {
		this.setState({username: event.target.value});
	},

	handlePasswordChange : function(event) {
		this.setState({password: event.target.value});
	},

	submitLogin: function(event) {
		event.preventDefault()
		console.log('registered!:', this.state)

		$(() => {
		  $.ajax({
		    method: "POST",
		    data: { username: this.state.username,
		    		password: this.state.password},
		    url: "http://localhost:8080/login"
		  }).done((results) => {
		  	console.log(results)
		    console.log("user is logged in!")
		  });;
		});


	},

	render: function() {
		return (
			<div>
				<nav className="nav-bar">

				</nav>

			<div id="login-form">
				<form className="login">
					<label> Username: <input type="text" name="username" onChange={this.handleUsernameChange} /> </label>
					<br/>
					<label> Password: <input type="text" name="password" onChange={this.handlePasswordChange} /> </label>
					<br/>
					<button className='btn-submit' onClick={this.submitLogin}>Login</button>
				</form>
			</div>

			</div>



    	);
	}

})

export default Login;