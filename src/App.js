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
import Policylist from './components/policies/Policylist';
import Policy from './components/policies/Policy';

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

  //policy function code
  const policiesdata = [
    {
      id: 1,
      name: "John Doe",
      mobileNumber: "+1234567890",
      vehicleNumber: "ABC123",
      company: "Acme Inc.",
      policyNumber: "1234567890",
      fromDate: "01/01/2024",
      toDate: "01/06/2024",
      amount: "$100.00",
    },
    {
      id: 2,
      name: "Jane Smith",
      mobileNumber: "+9876543210",
      vehicleNumber: "DEF456",
      company: "XYZ Corp.",
      policyNumber: "9876543210",
      fromDate: "02/01/2024",
      toDate: "02/06/2024",
      amount: "$200.00",
    },
    {
      id: 3,
      name: "Mike Lee",
      mobileNumber: "+5678901234",
      vehicleNumber: "GHI789",
      company: "ABC Inc.",
      policyNumber: "5678901234",
      fromDate: "03/01/2024",
      toDate: "03/06/2024",
      amount: "$300.00",
    },
    {
      id: 4,
      name: "Sarah Jones",
      mobileNumber: "+1234567890",
      vehicleNumber: "JKL012",
      company: "XYZ Corp.",
      policyNumber: "1234567890",
      fromDate: "04/01/2024",
      toDate: "04/06/2024",
      amount: "$400.00",
    },
    {
      id: 5,
      name: "David Davis",
      mobileNumber: "+9876543210",
      vehicleNumber: "MNO345",
      company: "Acme Inc.",
      policyNumber: "9876543210",
      fromDate: "05/01/2024",
      toDate: "05/06/2024",
      amount: "$500.00",
    },
    {
      id: 6,
      name: "Emily Williams",
      mobileNumber: "+5678901234",
      vehicleNumber: "PQR678",
      company: "XYZ Corp.",
      policyNumber: "5678901234",
      fromDate: "06/01/2024",
      toDate: "06/06/2024",
      amount: "$600.00",
    },
  ];

  const[policyData,setPolicyData]=useState(policiesdata)
  const[policyForm,setPolicyForm]=useState({
    id: null, 
    name: "",
    mobileNumber: "",
    vehicleNumber: "",
    company: "",
    policyNumber: "",
    fromDate: "",
    toDate: "",
    amount: ""
  });
  const formChange = (e) => {
    const { name, value } = e.target;
    setPolicyForm({
      ...policyForm,
      [name]: value
    });
  };
    const formSubmit = (e) => {
      e.preventDefault();
      if (policyForm.id) {
        setPolicyData(policyData.map(policy => policy.id === policyForm.id ? policyForm : policy));
      } else {
        setPolicyData([...policyData, { ...policyForm, id: policyData.length + 1 }]);
      }

    setPolicyForm({ id: null,name: "",
    mobileNumber: "",
    vehicleNumber: "",
    company: "",
    policyNumber: "",
    fromDate: "",
    toDate: "",
    amount: ""});
  }

  const formEdit=(policy)=>{
    setPolicyForm(policy)
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
          <Route path='/policylist' element={ <Policylist formEdit={formEdit} policyData={policyData} setPolicyData={setPolicyData}/>} />
          <Route path='/policy' element={ <Policy policyForm={policyForm} formChange={formChange} formSubmit={formSubmit}/>} />
          <Route path='/account' element={<Form/>} />
          <Route path='/users' element={<Users/>} />  
          <Route path='/billing-details' element={<Billing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
