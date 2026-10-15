import "./Card.css";

const Card = ({img,title,description}) => {
  return (
    <>
      <div className="card border-0 text-center">
        <img src={img} className="card-img-top rounded-5 pt-2" id="cardImg" alt="images" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}</p>
          <a href="#" className="btn text-white w-100 rounded-3" id="btn">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
