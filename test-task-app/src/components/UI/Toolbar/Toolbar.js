import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";

const Toolbar = () => {
    return (
        <Navbar dark color="primary" light expand="md">
            <Container>
                <NavbarBrand href="/">Films</NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Toolbar;