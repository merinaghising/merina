/* File name: App.js, Student Name: Merina Ghising, StudentID:301303828, Date:2024-06-12 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles.css'; 
function App() {
    return (
        <Router>
            <div className="Container">
                <Navbar />
                <Routes>
                    <Route path="/marina" element={<Home />} />
                    <Route path="/marina/about" element={<About />} />
                    <Route path="/marina/projects" element={<Projects />} />
                    <Route path="/marina/services" element={<Services />} />
                    <Route path="/marina/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;




