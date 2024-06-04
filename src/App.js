import './assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Service from './components/services/Service';
import Form from './components/Form'
import Users from './components/Users';
import Home from './components/Home';
import Billing from './components/Billing';
import Servicelist from './components/services/Servicelist'
import React, { useState} from 'react'

function App() {

  const initialServiceData = [
    { id: 1, serviceName: "Health Checkup", amount: 200, governmentAmount: 150 },
    { id: 2, serviceName: "Education Grant", amount: 5000, governmentAmount: 4500 },
    { id: 3, serviceName: "Subsidized Housing", amount: 15000, governmentAmount: 12000 },
    { id: 4, serviceName: "Agricultural Subsidy", amount: 3000, governmentAmount: 2500 },
    { id: 5, serviceName: "Transport Allowance", amount: 100, governmentAmount: 80 }
  ];
  
  const [services, setServices] = useState(initialServiceData);
  const [formData, setFormData] = useState({ id: null, serviceName: '', amount: '', governmentAmount: '' });

  const handleEdit = (service) => {
    setFormData(service);
  };


  const handleDelete = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const handleChange=(e)=>{
    const{name,value}=e.target
    setFormData({ ...formData, [name]: value });
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (formData.id) {
      setServices(services.map(service => service.id === formData.id ? formData : service));
    } else {
      setServices([...services, { ...formData, id: services.length + 1 }]);
    }
    setFormData({ id: null, serviceName: '', amount: '', governmentAmount: '' });

  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/servicelist' element={<Servicelist services={services} setServices={setServices} handleDelete={handleDelete} handleEdit={handleEdit}/>} />
          <Route path='/service-edit' element={<Service formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} handleChange={handleChange}/>} />
          <Route path='/account' element={<Form/>} />
          <Route path='/users' element={<Users/>} />  
          <Route path='/billing-details' element={<Billing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
