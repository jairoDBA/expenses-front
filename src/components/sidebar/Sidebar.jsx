import { Offcanvas, Nav, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar({ show, handleClose }) {
  const content = (
    <>
      <h4>Mi App</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/" className="text-white">
          Inicio
        </Nav.Link>

        <Accordion alwaysOpen>
          {/* Categorias */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Categorias</Accordion.Header>
            <Accordion.Body>
              <Nav className="flex-column ms-3">
                <Nav.Link as={Link} to="/categorias">
                  Categorias
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>

          {/* Gastos */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Gastos</Accordion.Header>
            <Accordion.Body>
              <Nav className="flex-column ms-3">
                <Nav.Link as={Link} to="/gastos">
                  Gastos
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Nav>
    </>
  );

  return (
    <>
      {/* Desktop fixed sidebar */}
      <div
        className="d-none d-md-block bg-dark text-white vh-100 p-3"
        style={{ width: "220px" }}
      >
        {content}
      </div>

      {/* Mobile Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} className="bg-dark text-white d-md-none">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="text-white">Mi App</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-dark">
            {/* Use the same content but adjust link colors for mobile */}
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" onClick={handleClose}>
                Inicio
              </Nav.Link>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Categorias</Accordion.Header>
                  <Accordion.Body>
                    <Nav className="flex-column ms-3">
                      <Nav.Link as={Link} to="/categorias" onClick={handleClose}>
                        Categorias
                      </Nav.Link>
                    </Nav>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Gastos</Accordion.Header>
                  <Accordion.Body>
                    <Nav className="flex-column ms-3">
                      <Nav.Link as={Link} to="/gastos" onClick={handleClose}>
                        Gastos
                      </Nav.Link>
                    </Nav>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

