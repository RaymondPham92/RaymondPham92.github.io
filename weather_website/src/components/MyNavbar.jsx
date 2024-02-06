import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function MyNavbar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{display: 'flex', flexDirection: 'row'}}>
          <Navbar.Brand href="/">React Practice Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link to='/weather'>Weather App</Link></Nav.Link>
            <Nav.Link><Link to='/todo'>To Do List</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MyNavbar;