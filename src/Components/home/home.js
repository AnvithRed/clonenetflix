import React from 'react'
import './home.css'
import NavBar from '../NavBar';
import Homepage from '../homepage/Homepage';


import List from '../list/List'
const home = () => {
  return (
    <div className="home">
    <NavBar />
    <Homepage type="series"/>
    <List title="Continue Watch" />
    <List  title="Suspense"/>
    <List  title="Animated"/>
    <List  title="Comedy"/>

       
     </div>
  );
}
export default home;