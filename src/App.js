import { useState } from 'react';
import Hero from './components/hero/hero';
import ProjPopup from './components/projPopup/projPopup';
import What from './components/what/what';
import Who from './components/who/who';

function App() {

  // _________________________________________POPUPS

  const [open, setOpen] = useState(false);

  const openProjPopup = () => {
    setOpen(true);
  }

  const closePopups = () => {
    setOpen(false);
  }

  return (
    <>
      <Hero />
      <Who />
      <What openPopup={openProjPopup} />
      <ProjPopup
        open={open}
        close={closePopups} />
    </>
  )
}

export default App;
