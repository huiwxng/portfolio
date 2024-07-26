import "./App.css";
import AppLayout from "./sections/AppLayout/AppLayout";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <AppLayout>
        <Hero />
        <Projects />
      </AppLayout>
      <Footer />
    </>
  );
}

export default App;
