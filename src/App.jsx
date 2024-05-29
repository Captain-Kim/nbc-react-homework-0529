import React from 'react';
import { DataProvider } from './DataContext';
import Router from './Router/Router.jsx';

function App() {
  return (
    <>
      <DataProvider>
        <Router />
      </DataProvider>
    </>
  );
}

export default App;
