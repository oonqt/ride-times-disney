import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";

import logo from "../../img/logo.png";

const Nav = () => {
    return (
        <Navbar
            color="light"
            light
            sticky="top"
            style={{
                height: 55,
                opacity: 0.95
            }}
        >
            <NavbarBrand className="m-auto">
                <img src={logo} alt="Logo" width="35" />
                <h3 className="ml-3 mr-3 mt-1" style={{ display: "inline-block" }}>Disney Wait Times</h3>
                <img src={logo} alt="Logo" width="35" />
            </NavbarBrand>
        </Navbar>
    )
}

export default Nav;