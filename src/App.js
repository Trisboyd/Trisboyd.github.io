import { useState } from 'react';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import How from './components/how/how';
import ProjPopup from './components/projPopup/projPopup';
import What from './components/what/what';
import Who from './components/who/who';

function App() {
  // _________________________________________POPUPS

  const [open, setOpen] = useState(false);

  // ____________determine which project should be featured in popup
  const [project, setProject] = useState({});

  const openProjPopup = () => {
    setOpen(true);
  }

  const closePopups = () => {
    setOpen(false);
  }

  const handlePopupClick = (data) => {
    setProject(data);
    openProjPopup();
  }

  const handleClosePopup = () => {
    setProject({});
    closePopups();
  }

  return (
    <>
      <Hero />
      <Who />
      <What handlePopupClick={handlePopupClick} />
      <How />
      <Contact />
      <Footer />
      {project &&
        <ProjPopup
          project={project}
          open={open}
          close={handleClosePopup} />}

    </>
  )
}

export default App;
