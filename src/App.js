import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Artist from './components/artist/Artist';
import NoPage from './components/NoPage/NoPage';
import About from './components/about/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="artist" element={<Artist />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
