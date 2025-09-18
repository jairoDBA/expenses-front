import { useState } from 'react'
import { Navbar, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import CategoryInput from './components/CategoryInput/CategoryInput.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Expenses from './components/Expenses/Expenses.jsx'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 p-0">
            <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
          </div>

          {/* Contenido principal */}
          <div className="col-md-10"> 
            {/* Top Navbar for mobile to open sidebar */}
            <Navbar bg="light" className="d-md-none">
              <Container fluid>
                <Button variant="outline-primary" onClick={() => setShowSidebar(true)}>
                  ☰ Menu
                </Button>
              </Container>
            </Navbar>

            {/* Aquí renderizan los componentes según la ruta */}
            <div className="container mt-3">
              <Routes>
                <Route path="/" element={<h2>Bienvenido al Dashboard</h2>} />
                <Route path="/categorias" element={<CategoryInput />} />
                <Route path="/gastos" element={<Expenses />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
