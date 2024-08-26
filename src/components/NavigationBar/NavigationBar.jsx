import styles from "../NavigationBar/NavigationBar.module.css"
import logo from "../../assets/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
const NavigationBar = ()=>{
    return(
        <Navbar expand="lg" className={`w-100 d-flex justify-content-between align-items-center ${styles.navDiv}`} >
        {/* <Container className="w-100 d-flex justify-content-between" style={{border:"1px solid yellow"}}> */}
        <Container className={styles.container} >
        <Navbar.Brand className="px-4"><NavLink className={`${styles.eachNav}`} to="/"><span id={`${styles.vector}`}><img src={logo} alt="not found" height="15px" width="12px" style={{paddingBottom:".2rem"}}/></span><span id={styles.logoName}>Medifty</span></NavLink></Navbar.Brand>
        </Container>
        <Navbar.Toggle style={{marginRight:".5rem"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="m-auto">
           <Nav.Link className={`my-2`}><NavLink className={`${styles.eachNav}`} to='/find'>Find Doctores</NavLink></Nav.Link>
           <Nav.Link className="my-2"><NavLink className={`${styles.eachNav}`}>Hospitals</NavLink></Nav.Link>
           <Nav.Link className="my-2"><NavLink className={`${styles.eachNav}`}>Medicines</NavLink></Nav.Link>
           <Nav.Link className="my-2"><NavLink className={`${styles.eachNav}`}>Surgeries</NavLink></Nav.Link>
           <Nav.Link className="my-2"><NavLink className={`${styles.eachNav}`}>Software for Provider</NavLink></Nav.Link>
           <Nav.Link className="my-2"><NavLink className={`${styles.eachNav}`}>Facilities</NavLink></Nav.Link>
           <Nav.Link className="my-1 "><NavLink to='/bookings'><button className="btn btn-info">My Bookings</button></NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar> 
    )
}
export default NavigationBar;
