import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Stack from "./components/Stack";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/utils/Modal";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const [theme, setTheme] = useState(null);
  const [modalOpen, setModalOpen] = useState(0);
  const [project, setProject] = useState(null);

  const handleCloseModal = () => {
    setModalOpen(0);
  };
  const handleOpenModal = () => {
    setModalOpen(1);
  };

  useEffect(() => {
    console.log(modalOpen);
  }, [modalOpen]);

  const OpenProject = (sProject) => {
    setProject(sProject);
    handleOpenModal();
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [modalOpen]);

  return (
    <>
      <div className="relative bg-white dark:bg-background text-stone-900 dark:text-stone-300 min-h-screen">
        <div>
          <Header />
          <main className="max-2-5xl">
            <Intro />
            <Stack />
            <Portfolio
              onClickProject={(project) => {
                OpenProject(project);
              }}
            />
            <Timeline />
            <Contact />
            <Footer />
          </main>
        </div>
        <AnimatePresence>
          {modalOpen == 1 && (
            <Modal project={project} handleClose={handleCloseModal} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
