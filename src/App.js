import Navbar from './components/Navbar/Navbar';
import FooterTop from './components/FooterTop/FooterTop';
import FooterBottom from './components/FooterBottom/FooterBottom';
import FixedSideButtons from './components/FixedSideButtons/FixedSideButtons';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Item1 from './components/Products/Item1';
import Item2 from './components/Products/Item2';
import Item3 from './components/Products/Item3';
import Item4 from './components/Products/Item4';
import Item5 from './components/Products/Item5';
import Item6 from './components/Products/Item6';
import Item7 from './components/Products/Item7';
import Item8 from './components/Products/Item8';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="item1" element={<Item1 />} />
            <Route path="item2" element={<Item2 />} />
            <Route path="item3" element={<Item3 />} />
            <Route path="item4" element={<Item4 />} />
            <Route path="item5" element={<Item5 />} />
            <Route path="item6" element={<Item6 />} />
            <Route path="item7" element={<Item7 />} />
            <Route path="item8" element={<Item8 />} />
          </Routes>
        <FooterTop />
        <FooterBottom />
        <FixedSideButtons />
      </BrowserRouter>
    </>
  );
}

export default App;
