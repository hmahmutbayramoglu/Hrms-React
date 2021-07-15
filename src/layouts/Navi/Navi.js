import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Employer from "../../pages/Employer/Employer";
import Home from "../../pages/Home/Home";

import "./Navi.css";

export default function Navi() {
  return (
    <div>
  
   
          <Navbar className="navbar-top" variant="dark" fixed="top" expand="lg">
            <div className="container">
              <Navbar.Brand href="#" className="navbar-brand">
                WAPS<div id="logo"></div>{" "}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link className="navlink"  href="/" to="/">
                    ANASAYFA
                  </Nav.Link>
                  <Nav.Link className="navlink"  href="/employer"  to="/employer">
                    İŞ VERENLER
                  </Nav.Link>

                  <Nav.Link className="navlink" href="/candidate"  to="/candidate">
                    İŞ ARAYANLAR
                  </Nav.Link>
                  <Nav.Link className="navlink" href="/jobPostings" to="/jobPostings">
                    İŞ İLANLARI
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Form className="d-flex justify-content-end">
                <div className="login-btn">Login</div>
                <div className="register-btn">Register</div>
              </Form>
            </div>
          </Navbar>
  
    </div>
  );
}
