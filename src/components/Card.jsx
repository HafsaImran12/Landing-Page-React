import img1 from "../assets/serum_dropper.png";
import img2 from "../assets/radiance_serum.png";
import img3 from "../assets/lip_nectar.png";
import img4 from "../assets/botanic_cleansing_gel.png";
import "./Card.css";

const Card = () => {
  return (
    <>
     <div className="card">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  );
};

export default Card;
