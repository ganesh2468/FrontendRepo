import "./App.css";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Language from "./components/Language";
import Experience from "./components/Experience";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Projects from "./components/Projects";


function App() {
  return (
    <>
      <div class="full">
        <div class="left">
          <div class="image">
          <img src={require('./logo.png')} alt="logo" />
        </div>
          <Contact />
          <Skills  />
          <Language />
          <Hobbies />
        </div>
        <div class="right">
          <div class="name">
            <h1>My Resume</h1>
          </div>
          <div class="title">
            <p>Software Developer</p>
          </div>
          <Summary />
          <Experience />
          <Education />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
