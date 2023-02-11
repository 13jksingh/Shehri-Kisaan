import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Shehri Kisaan
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/community">Ask Ques</Nav.Link>
            <Nav.Link href="/donation">Donation</Nav.Link>
            {props.isLogin ?<Nav.Link href="http://localhost:5000/logout">Logout</Nav.Link>: <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;