import React, {Component} from 'react';
import {Fieldset, Field, createValue} from 'react-forms';
import $ from 'jquery';
import NavBar from '../navbar/NavBar.jsx';
import cookie from 'react-cookie'

var autocomplete;

const Map_form = React.createClass({


	componentDidMount : function() {

	},

	handleMapTitle: function(event) {

		this.setState({title: event.target.value});

	},

	handleMapLocationLatLongAndPrivacy: function(event) {

		
		var privacy;


		if(document.getElementById('selectBox').value == 'Yes'){
			privacy = true;
		} else {
			privacy = false;
		}

		//this.props.centreMapLocation(event.target.value)

		
		
		

		//autocomplete = new google.maps.places.Autocomplete(
		//	(document.getElementById('create-autocomplete')), {types: ['(regions)']}, bounds)

		// autocomplete.addListener('place_changed', () => {
		// 	console.log(autocomplete.getPlace())
		// 	if(autocomplete.getPlace()){
		// 		var place = autocomplete.getPlace();
		// 		console.log(place.geometry.location.lat(), place.geometry.location.lng() )

		// 		this.props.centreMapLocation(place.geometry.location)	
		// 	}
				
		// })


		this.setState({location: event.target.value,
					   latitude: -74.0059,
					   longitude: 40.7128,
					   privacy: privacy,
					   published: false });

		/*
		autocomplete = new google.maps.places.Autocomplete((document.getElementById('create-autocomplete')), {types: ['(regions)']});

		
	    setInterval(() => {
	        var place = autocomplete.getPlace();
	        while(place !== undefined){
	        	console.log(place)
	        	this.props.centreMapLocation(place.geometry.location)
	        	break;
	        	place == undefined
	        }



	    }, 5000);

	    console.log(this.state.location)

	   
	    */

	    


	},



	submitMap: function(event) {
		event.preventDefault()

		this.setState({location})

		if(this.state.title !== "" && this.state.location !== ""){
			this.props.map_info(this.state)	
		}

		
	},

	render: function() {
		return (
			<div>

			<div id="map-create-form">
				<form className="create">
					<label> What would you like to name this map? <input type="text" name="title"  onChange={this.handleMapTitle} />
					</label>
					<br/>
					{/* id of input field below must not be changed */}
					<label> Where would you like this map to be located: <input type="text" name="location" id="create-autocomplete" onChange={this.handleMapLocationLatLongAndPrivacy} />
					</label>
					<br/>
					<label> Would you like this map to be private? <select id='selectBox'><option value="Yes">Yes</option>
  																		   <option value="no">no</option> 
  																		   
  																    </select>
  					</label>
					<br/>
					<button className='btn-submit' onClick={this.submitMap}>Register</button>
				</form>
			</div>

			</div>



    	);
	}

})

export default Map_form;