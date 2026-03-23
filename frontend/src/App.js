import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WhoWeAre from '@/pages/WhoWeAre';
import Manufacturing from '@/pages/Manufacturing';
import WeCare from '@/pages/WeCare';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WhoWeAre />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/we-care" element={<WeCare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;