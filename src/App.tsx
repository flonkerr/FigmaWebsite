import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout'
import Gallery from './pages/gallery/Gallery'
import Homepage from './pages/homePage/Homepage'
import N404 from './pages/Notfoundpg/N404'
import Certifications from './pages/certifications/Certifications'
import Projects from './pages/projects/Projects'
import ContactUs from './pages/contactUS/ContactUs'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Certifications" element={<Certifications />} />
            <Route path="ContactUs" element={<ContactUs />} />
          </Route>
          <Route path="/*" element={<N404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
