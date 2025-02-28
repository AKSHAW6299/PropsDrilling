import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Parent from './views/Parent/Parent';
import Child from './views/Child/Child';
import GrandChild from './views/GrandChild/GrandChild';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/child" element={<Child />} />
        <Route path="/grand-child" element={<GrandChild />} />
      </Routes>
    </Router>
  )
}

export default App