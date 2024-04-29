import "./App.css";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import MenuContents from "./components/menu/MenuContents";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      {/* <MenuContents /> */}
      {/* <Testimonial /> */}
    </div>
  );
}

export default App;
