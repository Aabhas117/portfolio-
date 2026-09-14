import DigitalUniverse from "./three/DigitalUniverse";
import Navbar from "./components/Navbar";
import ProfileSidebar from "./components/ProfileSidebar";
import Summary from "./components/Summary";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      {/* 3D Background Canvas */}
      <DigitalUniverse />

      {/* Top Header Navbar */}
      <Navbar />

      {/* Main Centered Application Frame */}
      <div className="portfolio-app-frame">
        {/* Left Profile Sidebar Column */}
        <ProfileSidebar />

        {/* Right Main Content Area Column */}
        <main id="home" className="main-content-area">
          <Summary />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;