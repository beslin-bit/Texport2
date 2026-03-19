import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WhoWeAre from '@/pages/WhoWeAre';
import Manufacturing from '@/pages/Manufacturing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WhoWeAre />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;