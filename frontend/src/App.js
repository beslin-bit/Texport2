import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WhoWeAre from '@/pages/WhoWeAre';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WhoWeAre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;