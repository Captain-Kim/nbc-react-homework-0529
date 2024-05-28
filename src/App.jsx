import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DataProvider } from './DataContext';
import Home from './pages/Home';
import Detail from './pages/Detail';

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
