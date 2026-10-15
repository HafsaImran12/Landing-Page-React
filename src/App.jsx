import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div id="header">
        <Navbar />
        <Hero />
      </div>
         <div className="container">
        <h2 className="text-center pb-5 fs-1" id="cardHeading">Our Bestseller</h2>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          
         <Card/>
        </div>
      </div>
    </>
  );
}

export default App;
