import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{display: 'flex', flexDirection: 'row'}}>
          <Navbar.Brand href="/">React Practice Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/weather'>Weather</Nav.Link>
            <Nav.Link href='/todo'>To Do List</Nav.Link>
            <Nav.Link href='calculator'>Calculator</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MyNavbar;