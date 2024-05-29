import React from 'react';
import { DataProvider } from './DataContext';


function App() {
  return (
    <>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </>
  );
}

export default App;
