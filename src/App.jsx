import { useState } from 'react'
import { Navbar, Container, Button } from "react-bootstrap";
import './App.css'
import ExpenseTable from './components/ExpenseTable/ExpenseTable.jsx'
import CategoryInput from './components/CategoryInput/CategoryInput.jsx'
import ExpenseRegister from './components/ExpenseRegister/ExpenseRegister.jsx'
import ExpensesDatePicker from './components/ExpensesDatePicker/ExpensesDatePicker.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar fijo / offcanvas */}
        <div className="col-md-2 p-0">
          <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
        </div>

        {/* Contenido principal */}
        <div className="col-md-10">
          {/* Navbar con botón para abrir sidebar en móviles */}
          <Navbar bg="light" className="d-md-none">
            <Container fluid>
              <Button variant="outline-primary" onClick={() => setShowSidebar(true)}>
                ☰ Menú
              </Button>
              <Navbar.Brand>Dashboard</Navbar.Brand>
            </Container>
          </Navbar>

          <div className="container text-center mt-3">
            <div className="row align-items-start">
              <div className="col">
                <div className="row">
                  <CategoryInput />
                </div>
                <div className="row">
                  <ExpenseRegister />
                </div>
              </div>
              <div className="col">
                <ExpensesDatePicker />
                <ExpenseTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
