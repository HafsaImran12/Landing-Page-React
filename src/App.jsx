import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import img1 from "../src/assets/serum_dropper.png";
import img2 from "../src/assets/radiance_serum.png";
import img3 from "../src/assets/lip_nectar.png";
import img4 from "../src/assets/botanic_cleansing_gel.png";
import SaleSection from "./components/SaleSection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      {/* HEADER */}

      {/* <div id="header"> */}
        <Navbar />
        <Hero />
      {/* </div> */}

      {/* CARDS */}

      <div className="container mb-5 py-5">
        <h2 className="text-center pb-5 fs-1" id="cardHeading">
          Our Bestseller
        </h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <Card img={img1} title="Radiance Renewal Serum" description="Brightness, Repairs, Renews" />
          <Card img={img2} title="Hydrating Moisturizer" description="Deep Hydrations, Soft Skin" />
          <Card img={img3} title="Velvety Lip Nectar" description="Hydrates, Add Shine" />
          <Card img={img4} title="Botanic Cleansing Gel" description="Purifies, Refreshes" />
        </div>
      </div>

      {/* SALE SECTION */}

      <SaleSection/>

      {/* TESTIMONIAL SECTION */}
      <Testimonial/>
    </>
  );
}

export default App;
