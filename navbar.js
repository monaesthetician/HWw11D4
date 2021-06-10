
// I created a new logo and put it on Landing page on the left corner
// I tried to use this logo on the tab bar instead of React logo but have not succeeded. will try tomorrow.




import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import cincy_favicon from "../img/footer-img/cincy_favicon.jpg";
import cincylogo from "../img/body-img/cincylogo.jpg";
import '../Components/navigation.css'


const Navbar = () => {
       // const handleClick = e => {
    //   e.preventDefault();
    //   document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
    //   document.getElementById('mainListDiv').classList.toggle('show_list');
    //   $('#mainListDiv').fadeIn();
    // }

   
    return (
        <header>
        <nav className="nav">
            <div className="container">
             
                {/* <a href="/">
                <img className="navbarlogo" alt='' src= { cincy-logo } /> 
                </a> */}
                <div id="mainListDiv" className="main_list">

                    <ul className="navlinks">
               
                    
                    <li><NavLink to="/Home"><img className="body-img" id="cincylogo" alt='' src= { cincylogo } /></NavLink></li>
                    <li><NavLink to="/Covid">Covid-19</NavLink></li>
                    <li><NavLink to="/Attractions">Attractions</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
             </div>
           </nav>
        </header>
    )
};

<Navbar fixed="top" />


export default withRouter(Navbar)