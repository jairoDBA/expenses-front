import { Offcanvas, Nav, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar({ show, handleClose }) {
  return (
    <>
      {/* Sidebar fijo en escritorio */}
      <div
        className="d-none d-md-block bg-dark text-white vh-100 p-3"
        style={{ width: "220px" }}
      >
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
      </div>

      {/* Sidebar móvil con Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="md"
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Mi App</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

