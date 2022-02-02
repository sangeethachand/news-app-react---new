import logo from '../../assests/logo-03.jpg';
import {Toolbar, Typography} from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";

import classes from './Header.module.css';
import { Route,Link } from 'react-router-dom';
import Business from '../Business/Business';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,Carousel, Card,FormControl
} from 'react-bootstrap';


function Header(){


return(<>

   
    {/* <header className={classes.header}>    
        <h3> The Public Mirror</h3>

         <ul class="navbar-nav ml-auto">
           
            <li class="nav-item">
                <form>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    
                  </form> 
                  </li>
                  <Typography>Sign-in</Typography>
         </ul>
         </header> */}
         <Container fluid className={classes.header}>
           <Nav className="d-flex">
    <Navbar.Brand href="#" className={classes.brand}>The Public Mirror</Navbar.Brand>
    <Nav className="navbar-nav ml-auto ">
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
      </Nav>
      </Nav>
  </Container>
    
    <div >
      <img src={logo} className={classes.logo} alt=""/>
    </div>
    
    {/* <!-- navbar 2 --> */}
    
    <Navbar className={classes.navbar} variant="light">
    <Container>
    <Navbar.Brand href="/"><h5>The Public Mirror</h5></Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link href="business"  className={classes.navlink}>Business</Nav.Link>
     
      <Nav.Link href="Entertainment" className={classes.navlink}>Entertainment</Nav.Link>
      <Nav.Link href="General" className={classes.navlink}>General</Nav.Link>
      <Nav.Link href="Health" className={classes.navlink}>Health</Nav.Link>
      <Nav.Link href="Science" className={classes.navlink}>Science</Nav.Link>
      <Nav.Link href="Sports" className={classes.navlink}>Sports</Nav.Link>
      <Nav.Link href="Technology" className={classes.navlink}>Technology</Nav.Link>
    </Nav>
    </Container>
     </Navbar>  
    

    
    
    </>);
}
export default Header;