import { useState } from "react";
import { Offcanvas, Nav, Accordion } from "react-bootstrap";

export default function Sidebar({ show, handleClose }) {
  return (
    <>
      {/* Sidebar fijo solo en pantallas grandes */}
      <div className="d-none d-md-block bg-dark text-white vh-100 p-3" style={{ width: "220px" }}>
        <h4>Gastos de mi casa</h4>
        <Nav className="flex-column">
          <Nav.Link className="text-white" href="#home">Inicio</Nav.Link>
          <Nav.Link className="text-white" href="#perfil">Perfil</Nav.Link>

          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Configuración</Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column ms-3">
                  <Nav.Link href="#cuenta">Categorias</Nav.Link>
                  <Nav.Link href="#seguridad">Gastos</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Reportes</Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column ms-3">
                  <Nav.Link href="#mensual">Mensual</Nav.Link>
                  <Nav.Link href="#anual">Anual</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Nav>
      </div>

      {/* Sidebar en móviles como Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} responsive="md" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Mi App</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className="text-white" href="#home">Inicio</Nav.Link>
            <Nav.Link className="text-white" href="#perfil">Perfil</Nav.Link>

            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Configuración</Accordion.Header>
                <Accordion.Body>
                  <Nav className="flex-column ms-3">
                    <Nav.Link href="#cuenta">Cuenta</Nav.Link>
                    <Nav.Link href="#seguridad">Seguridad</Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Reportes</Accordion.Header>
                <Accordion.Body>
                  <Nav className="flex-column ms-3">
                    <Nav.Link href="#mensual">Mensual</Nav.Link>
                    <Nav.Link href="#anual">Anual</Nav.Link>
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
