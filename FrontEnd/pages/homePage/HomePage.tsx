import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import DashboardLayout from './HomePageLayout';

const App = () => {
  return (
      <>
      <ResponsiveAppBar/>
      <DashboardLayout/>
          <h1>App</h1>
      </>
  );
};
export default App;