import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand to={'/'}>Instituto BioCreArte</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to={'/category/Peli'}>Peliculas</Nav.Link>
                            <Nav.Link to={'/category/Doc'}>Documentales</Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
