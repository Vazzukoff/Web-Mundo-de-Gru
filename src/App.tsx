import React from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Root from "./routes/root"
import Servicios from "./routes/servicios"
import Contacto from "./routes/contacto"
import Layout from "./components/layout"
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Root />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
