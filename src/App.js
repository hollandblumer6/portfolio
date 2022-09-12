import Header from './components/header/Header';
import About from './components/main/about/About'
import './App.css';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header> 
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
