import { useEffect } from 'react';
import SkipLink from './components/SkipLink.jsx';
import Loader from './components/Loader.jsx';
import Cursor from './components/Cursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Manifesto from './components/Manifesto.jsx';
import Programmes from './components/Programmes.jsx';
import Explorer from './components/Explorer.jsx';
import Beyond from './components/Beyond.jsx';
import Register from './components/Register.jsx';
import Rules from './components/Rules.jsx';
import Footer from './components/Footer.jsx';
import DetailOverlay from './components/DetailOverlay.jsx';
import PosterViewer from './components/PosterViewer.jsx';
import Toast from './components/Toast.jsx';
import { initExperience } from './lib/experience.js';

export default function App() {
  // All motion, cursor, filtering and registration behaviour is wired up once the markup is in the DOM.
  useEffect(() => { initExperience(); }, []);
  return (
    <>
      <SkipLink />
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Programmes />
        <Explorer />
        <Beyond />
        <Register />
        <Rules />
      </main>
      <Footer />
      <DetailOverlay />
      <PosterViewer />
      <Toast />
    </>
  );
}
