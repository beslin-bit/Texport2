import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import WhoWeAre from '@/pages/WhoWeAre';
import OurCapabilities from '@/pages/OurCapabilities';
import Manufacturing from '@/pages/Manufacturing';
import WeCare from '@/pages/WeCare';
import DesignInnovation from '@/pages/DesignInnovation';
import Quality from '@/pages/Quality';
import Technology from '@/pages/Technology';
import Certifications from '@/pages/Certifications';
import Contact from '@/pages/Contact';
import MensShorts from '@/pages/MensShorts';
import MensOuterwear from '@/pages/products/MensOuterwear';
import MensShirts from '@/pages/products/MensShirts';
import MensTrousers from '@/pages/products/MensTrousers';
import WomensOuterwear from '@/pages/products/WomensOuterwear';
import WomensShirts from '@/pages/products/WomensShirts';
import WomensTrousers from '@/pages/products/WomensTrousers';
import WomensSkirts from '@/pages/products/WomensSkirts';
import WomensShorts from '@/pages/products/WomensShorts';
import WomensDress from '@/pages/products/WomensDress';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-capabilities" element={<OurCapabilities />} />
          <Route path="/design-innovation" element={<DesignInnovation />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/we-care" element={<WeCare />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/mens-outerwear" element={<MensOuterwear />} />
          <Route path="/products/mens-shorts" element={<MensShorts />} />
          <Route path="/products/mens-shirts" element={<MensShirts />} />
          <Route path="/products/mens-trousers" element={<MensTrousers />} />
          <Route path="/products/womens-outerwear" element={<WomensOuterwear />} />
          <Route path="/products/womens-shirts" element={<WomensShirts />} />
          <Route path="/products/women-trousers" element={<WomensTrousers />} />
          <Route path="/products/womens-skirt" element={<WomensSkirts />} />
          <Route path="/products/women-shorts" element={<WomensShorts />} />
          <Route path="/products/womens-dress" element={<WomensDress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;