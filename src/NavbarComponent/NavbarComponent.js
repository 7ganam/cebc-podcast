import React, { useState, useEffect } from 'react';
import { NavbarBrand, Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import { Link } from "react-router-dom";
import "./NavbarComponent.css"

import logo_white from './logo_white.png'
import logo_black from './logo_black.png'

import "./NavbarComponent.css"
const $ = require("jquery");



const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    let [Scrolled, setScrolled] = useState(false)


    useEffect(() => { //add scrolled class to elements that should behave diffrently when window is scrolled
        $(function () {
            $(document).scroll(function () {
                var $nav = $("#my_nav"); // change the Scrolled state when we scroll more than the navbar height
                if ($(this).scrollTop() > $nav.height()) {
                    if (!Scrolled) { setScrolled(true) }
                }
                else {
                    if (Scrolled) { setScrolled(false) }
                }


                var $navlink = $(".nav_link"); // add the scrolled class with jquery to all the nave links when scrolled
                $navlink.toggleClass('scrolled', $(this).scrollTop() > $navlink.height());

            });
        });
    })



    return (
        <React.Fragment>
            {/* <div className="d-flex justify-content-end ml-0 mr-0" style={{ height: "26px" }}>
                <div id="top_bar" className="header_font" >
                    <div style={{ paddingRight: "6px" }} >
                        log in
                    </div>
                </div>
            </div> */}
            <Container fluid id="nav_bar_container" >
                <div>
                    {/* // adding classes to navbar based on scrolled and path  */}
                    <Navbar
                        light
                        expand={`md`}
                        fixed="top"
                        //  style={{ top: "23px" }}
                        className={`
                        justify-content-between light  py-lg-0
                        ${Scrolled ? "scrolled" : ""} 
                        
                        ${!Scrolled && !(props.location.pathname === "/fsgsgdf" || props.location.pathname === "/srsrgs") ? "dark_bg" : ""}
                        `}
                        id="my_nav"
                    >

                        <NavbarBrand href="https://cebcmena.com/">
                            <img style={{ width: "auto", height: "70px" }} src={!Scrolled && $(window).width() > 768 ? logo_white : logo_black} id="c" alt="oval" />
                        </NavbarBrand>

                        <NavbarToggler onClick={toggle} className="ml-auto" />

                        <Collapse isOpen={isOpen} navbar className="justify-content-end" >
                            <Nav className="ml-auto d-flex nav_list" navbar style={{ minHeight: "80px" }}>
                                <NavItem className={props.location.pathname !== "/" ? '' : 'nav-link-selected'}>
                                    <Link className="nav_link" to="/">
                                        Podcasts
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>


                </div>

            </Container>


        </React.Fragment >

    );
}

export default withRouter(NavbarComponent);