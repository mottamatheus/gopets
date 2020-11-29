import React from 'react';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (

  <>
    <GlobalStyles />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
  </>
);

export default App;
