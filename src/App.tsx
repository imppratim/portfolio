import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export interface AppProps {}

export default function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
