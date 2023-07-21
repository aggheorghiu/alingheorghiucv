import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import ProjectDisplay from './Components/ProjectDisplay';
import Skills from './Components/Skills';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path='/project/:id' element={<ProjectDisplay />} />
                <Route path='/skills' element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
