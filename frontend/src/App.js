import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WhoWeAre from '@/pages/WhoWeAre';
import OurCapabilities from '@/pages/OurCapabilities';
import Manufacturing from '@/pages/Manufacturing';
import WeCare from '@/pages/WeCare';
import DesignInnovation from '@/pages/DesignInnovation';
import Quality from '@/pages/Quality';
import Technology from '@/pages/Technology';
import Certifications from '@/pages/Certifications';
import Contact from '@/pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WhoWeAre />} />
          <Route path="/our-capabilities" element={<OurCapabilities />} />
          <Route path="/design-innovation" element={<DesignInnovation />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/we-care" element={<WeCare />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;