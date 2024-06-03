import './assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Service from './components/Service';
import Form from './components/Form'
import Users from './components/Users';
import Home from './components/Home';
import Billing from './components/Billing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/service' element={<Service/>} />
          <Route path='/account' element={<Form/>} />
          <Route path='/users' element={<Users/>} />  
          <Route path='/billing-details' element={<Billing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
