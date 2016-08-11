import React, {Component} from 'react';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import NavBar from './NavBar.jsx';
import Collection from '../collection/Collection.jsx';
import $ from 'jquery';

const ProfileNavBar = React.createClass({

  getInitialState: function(){
    console.log(this.props)
    return this.props;
  },

  componentDidMount: function() {

  },

  getCookie: function(){
    return document.cookie.substring(document.cookie.length - 1, document.cookie.length);
  },

  getCollection: function(event) {
    console.log("getCollection")

    const collectionURL = "http://localhost:8080/users/" + this.getCookie('user_id') + "/maps"

      $.ajax({
        method: "GET",
        url: collectionURL
      }).then((results) => {
        console.log("map is being generated", results)
      })
  },

  getFavorites: function(event) {
    console.log("getFavorites")

    const favoritesURL = "http://localhost:8080/users/" + this.getCookie('user_id') + "/favorites"

      window.ajax = $.ajax({
        method: "GET",
        url: favoritesURL
      }).then((results) => {
        console.log("favorites are being generated", results)
      })
  },

  onLogout: function() {
    cookie.remove('user_id', { path: 'http://localhost:8080/logout' });

  },

  render: function() {
    return (
      <div className="standard-nav-bar col-md-12 col-lg-12">
         <nav className="standard-nav-bar">
          <NavBar />
        </nav>
        <br/>
        <br/>
        <nav className="selection-nav-bar col-md-12 col-lg-12">

          <ul>
            <Link className="btn btn-danger  col-md-2 col-lg-2"
                  to={"/users/" + this.getCookie() + "/collection"} onClick={this.getCollection}>
              my collection
            </Link>

            <Link className="btn btn-danger  col-md-2 col-lg-2 col-md-offset-1" to={"/users/" + this.getCookie() + "/followers"}>
              followers
            </Link>

            <Link className="btn btn-danger  col-md-2 col-lg-2 col-md-offset-1" to={"/users/" + this.getCookie() + "/following"}>
              following
            </Link>

            <Link className="btn btn-danger  col-md-2 col-lg-2 col-md-offset-1" to={"/users/" + this.getCookie() + "/favorites"}
              onClick={this.getFavorites}>
              favorites
            </Link>
          </ul>

        </nav>
      </div>

    );
  }
});


export default ProfileNavBar;
