import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";

const Nav = () => {
    return (
        <Navbar
            color="light"
            light
            style={{ height: 55 }}
        >
            <NavbarBrand className="m-auto">
                Disney Wait Times
            </NavbarBrand>
        </Navbar>
    )
}

export default Nav;