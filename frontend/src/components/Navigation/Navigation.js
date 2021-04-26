import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { MenuItems } from "./MenuItems";
import { Clock } from "react-bootstrap-icons";
import "./Navigation.css";

function Navigation() {
  const user = null;

  return (
    <>
      <Navbar collapseOnSelectfixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Clock className="h1" />
            lock In <Clock className="h1" />
            lock Out
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                  <NavDropdown.Item href="/shifts">Shifts</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
            <Container>
              <Nav className="justify-content-end ">
                <Nav.Link href="/login">
                  <Button variant="outline-success">Sign In</Button>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export { Navigation };

// state = { clicked: false };

// handleClick = () => {
//   this.setState({ clicked: !this.state.cliked });
// };

// <div className="menu-icon" onClick={this.handleClick}>
//           <List />
//         </div>
//         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <a className={item.cName} href={item.url}>
//                   {item.title}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
