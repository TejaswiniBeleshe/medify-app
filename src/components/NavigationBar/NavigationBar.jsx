import styles from "../NavigationBar/NavigationBar.module.css"
import logo from "../../assets/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
const NavigationBar = ()=>{
    return(
        <Navbar expand="lg" className={`w-100 d-flex  align-items-center ${styles.navDiv}`} >
        {/* <Container className="w-100 d-flex justify-content-between" style={{border:"1px solid yellow"}}> */}
        {/* <Container className={styles.container} >
        <Navbar.Brand href="#home" className="px-4"><span id={`${styles.vector}`}><img src={logo} alt="not found" height="5px"/></span><span id={styles.logoName}>Medifty</span></Navbar.Brand>
        </Container> */}
        <Navbar.Toggle style={{marginRight:".5rem"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/find'>Find Doctores</NavLink>
            {/* <Nav.Link href="#link">Hospitals</Nav.Link>
            <Nav.Link href="#link">Medicines</Nav.Link>
            <Nav.Link href="#link">Surgeries</Nav.Link>
            <Nav.Link href="#link">Software for Provider</Nav.Link>
            <Nav.Link href="#link">Facilities</Nav.Link> */}
            <NavLink to='/bookings'><button className="btn btn-info">My Bookings</button></NavLink>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar> 
    )
}
export default NavigationBar;
