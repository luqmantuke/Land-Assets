// AuthContext.js
import React, { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken', 'userId', 'userName','phoneNumber','isAgent', 'agentId']);
    const user = {'userId': cookies.userId, 'userToken': cookies.userToken, 'username': cookies.userName,'email': cookies.email,'phoneNumber': cookies.phoneNumber,'isAgent': cookies.isAgent, 'agentId': cookies.agentId};
    console.log(user)
    const isAuthenticated = cookies.userId !== undefined;


    const login = (userData) => {
console.log(`userData`, userData)
      setCookie('userToken', userData.token, { path: '/' });
      setCookie('userId', userData.user_id, { path: '/' });
      setCookie('userName', userData.username, { path: '/' });
      setCookie('phoneNumber', userData.phone_number, { path: '/' });
      setCookie('isAgent', userData.is_agent, { path: '/' });
      setCookie('email', userData.email, { path: '/' });
      setCookie('agentId', userData.agent_id, { path: '/' });
    };
  
    const logout = () => {

      removeCookie('userToken', { path: '/' });
      removeCookie('userId', { path: '/' });
      removeCookie('userName', { path: '/' });
      removeCookie('phoneNumber', { path: '/' });
      removeCookie('isAgent', { path: '/' });
      removeCookie('agentId', { path: '/' });
    };


  
    return (
      <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };