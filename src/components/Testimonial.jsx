import "./Testimonial.css";
import image from "../assets/pink_lotus.png";

const Testimonial = () => {
  return (
    <>
      <div className="container-fluid p-5" id="review">
        <div className="row g-5">
          <div className="col-lg-4 mb-3" id="testimonial-start">
            {" "}
            <h2 className="display-5 h2 fw-bold ">Loved by Thousands</h2>{" "}
            <div className="fs-4">
              <i className="fas fa-star fa-sm star"></i>
              <i className="fas fa-star fa-sm star"></i>
              <i className="fas fa-star fa-sm star"></i>
              <i className="fas fa-star fa-sm star"></i>
              <i className="fas fa-star fa-sm star"></i>
            </div>{" "}
            <p>4.8/5 (2k+reviews)</p>
            <p className="lead fw-normal">
              "My skin has never felt better. Clean, Effective and Honest!"
            </p>
            <p className="lead fw-normal">-Sarah M.</p>
            <div>
              <i className="fa-brands fa-facebook socialLinks p-2 me-2 "></i>
              <i className="fa-brands fa-instagram socialLinks p-2 me-2"></i>
              <i className="fa-brands fa-twitter socialLinks p-2 me-2"></i>
              <i className="fa-brands fa-tiktok socialLinks p-2 me-2"></i>
            </div>
          </div>
          <div className="col-lg-8 d-flex flex-column flex-lg-row">
            <div>
              {" "}
              <h2 className="display-5 h2 fw-bold  text-start lh-1 mb-3">
                Ready to Glow like never before?
              </h2>{" "}
              <p className="lead">
                Join thousands of happy costumers who <br /> trust Mskin for
                healthier, brighter,and <br /> happier skin. Explore our
                collection and <br /> find your new skincare favourite.
              </p>{" "}
            </div>{" "}
            <div className="lotus-container">
              <img
                src={image}
                className="lotus-image"
                alt="lotus image"
                loading="lazy"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
