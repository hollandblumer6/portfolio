import Header from './components/header/Header';
import About from './components/main/about/About'
import Wellness from './components/main/wellness/Wellness'
import Projects from './components/main/projects/Projects'
import Footer from './components/footer/Footer'
import './App.css';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <header className="app-header">
       <Header />
      </header> 
      <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
