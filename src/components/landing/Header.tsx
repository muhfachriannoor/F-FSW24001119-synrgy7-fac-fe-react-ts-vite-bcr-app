import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Navbar expand="lg" className="top-0 start-0 end-0 py-5 bg--gray">
        <Container>
          <div className="navbar__header-logo bg--dark-blue-04"></div>
          <Button
            className="navbar-toggler border border-0"
            onClick={handleShow}>
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Offcanvas show={show} scroll={true} placement="end" onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <h5 className="offcanvas-title">BCR</h5>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav defaultActiveKey="/home" as="ul" className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item as="li">
                  <Nav.Link href="#services">
                    Our Service
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#why-us">
                    Why Us
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#testimonial">
                    Testimonial
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#faq">
                    FAQ
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Link to="/register" className="btn bg--lime-green-04">
                Register
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}