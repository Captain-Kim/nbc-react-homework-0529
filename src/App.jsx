import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail onItemUpdate={handleItemUpdate} onItemDelete={handleItemDelete} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
