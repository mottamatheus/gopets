import React from 'react';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
// import SignUp from './pages/SignUp';
import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppProvider>
      <SignIn />
      {/* <Dashboard /> */}
    </AppProvider>
  </>
);

export default App;
