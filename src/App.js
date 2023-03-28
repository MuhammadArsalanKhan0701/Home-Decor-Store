import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import FooterTop from './components/FooterTop/FooterTop';
import FooterBottom from './components/FooterBottom/FooterBottom';
import FixedSideButtons from './components/FixedSideButtons/FixedSideButtons';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainSection />
      <FooterTop />
      <FooterBottom />
      <FixedSideButtons />
    </>
  );
}

export default App;
