import './App.css';
import { Home } from './Pages/Home';
import { AboutUs } from './Pages/AboutUs';
import { Services } from './Pages/Services';
import { Support } from './Pages/Support';
import { ContactUs } from './Pages/ContactUs';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { CustomerDash } from './Pages/CustomerDash';
import { AgentDash } from './Pages/AgentDash';
import { BrowserRouter as Router, Navigate, useRoutes, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useAuth,AuthProvider } from './Hooks/Auth/AuthenticationContext';
import { useEffect } from 'react';
import { trackReferralClick } from './Api/agent/agentsApi'; // We'll create this function

const queryClient = new QueryClient();

const AppWrapper = () => {
  const auth = useAuth();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const referralCode = searchParams.get('referralCode');

    if (referralCode) {
      trackReferralClick(referralCode);
    }
  }, [location]);

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aboutUs", element: <AboutUs /> },
    { path: "/services", element: <Services /> },
    { path: "/support", element: <Support /> },
    { path: "/contactUs", element: <ContactUs /> },
    { path: "/login", element: <Login /> },
    { path: "/signUp", element: <SignUp /> },
    { 
      path: "/customerDash/*", 
      element: auth.isAuthenticated ? <CustomerDash /> : <Navigate to="/login" /> 
    },
    { 
      path: "/agentDash/*", 
      element: auth.isAuthenticated ? <AgentDash /> : <Navigate to="/login" /> 
    },
  ]);

  return routes;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <AuthProvider>
        <Router>
          <div className='App'>
            <AppWrapper />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}
export default App;
