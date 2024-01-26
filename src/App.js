
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Services } from './Pages/Services';
import { Support } from './Pages/Support';
import { ContactUs } from './Pages/ContactUs';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { CustomerDash } from './Pages/CustomerDash';
import { AgentDash } from './Pages/AgentDash';



function App() {
 
  return (
    <Router>
    <div className='App'>

  
    
      <Routes>
        <Route path="/" exact element={<Home/>} />
       
        <Route path="/services" element={<Services/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/customerDash/*" element={<CustomerDash/>} />
        <Route path="/agentDash/*" element={<AgentDash/>} />
      </Routes>
   
    </div>
    </Router>

      
  );
}

export default App;
