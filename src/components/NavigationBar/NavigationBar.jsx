import styles from "../NavigationBar/NavigationBar.module.css"
import logo from "../../assets/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavigationBar = ()=>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home"><span id={`${styles.vector}`}><img src={logo} alt="not found" height="13px"/></span><span id={styles.logoName}>Medifty</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><button className="btn btn-light">Find Doctores</button></Nav.Link>
            <Nav.Link href="#link"><button className="btn btn-light">Hospitals</button></Nav.Link>
            <Nav.Link href="#link"><button className="btn btn-light">Medicines</button></Nav.Link>
            <Nav.Link href="#link"><button className="btn btn-light">Surgeries</button></Nav.Link>
            <Nav.Link href="#link"><button className="btn btn-light">Software for Provider</button></Nav.Link>
            <Nav.Link href="#link"><button className="btn btn-light">Facilities</button></Nav.Link>
            <Nav.Link href="#link"><button className="btn btn-info">My Bookings</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    )
}
export default NavigationBar;
