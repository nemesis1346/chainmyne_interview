import React from 'react';
import { Link } from 'react-router-dom';
//This is the proper way to use materialize css in react
import M from "materialize-css";
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import '../styles/navbar.css'

class NavBar extends React.Component {
    collapseRef = React.createRef()
    state = {
        "language": 'Language'
    }

    handleToggle = () => {
        // Call onToggle to notify App component about navbar state
        const { isNavbarOpen, onToggle, updateMarginTop } = this.props
        onToggle()

        //use a timeout to wait for the collapse animation to finish before calculating height
        setTimeout(() => {
            const height = isNavbarOpen ? 0 : this.collapseRef.current.offsetHeight
            updateMarginTop(height)
        }, 300) //Adjust the timeout duration as per the animation speed
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        let selects = document.querySelectorAll('select');
        M.FormSelect.init(selects, {});
    }
  
    render() {
        return (
            <Navbar expand='lg' className='blue darken-3' onToggle={this.handleToggle}>
                <Container className='navbar-container'>
                    <Navbar.Brand as={Link} to='/' className='navbar-brand'>CoinGecko App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav" ref={this.collapseRef} className={this.props.isNavbarOpen ? "show" : ""}>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        );
    }
}
//with Router is for givin the navbar the props input as a router
export default NavBar;