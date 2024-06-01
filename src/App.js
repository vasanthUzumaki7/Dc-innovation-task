import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Nav from './Nav';
import About from './About';
import Service from './Service';
import Form from './Form'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service/>} />
          <Route path='/account' element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
