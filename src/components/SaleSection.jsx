import "./SaleSection.css";

import image from "../assets/spring_citrus_serum.png";

const SaleSection = () => {
  return (
    <>
      <div id="saleSection" className="mt-5">
        <div className="container-fluid col-xxl-12">
          {" "}
          <div className="row flex-lg-row-reverse align-items-center px-4 g-4 justify-content-center">
            {" "}
            <div className="col-10 col-sm-8 col-lg-6 py-4 m-0">
              {" "}
              <div id="saleImage">
                <img
                  src={image}
                  className="img-fluid w-100"
                  alt="Image"
                  loading="lazy"
                />{" "}
              </div>
            </div>{" "}
            <div className="col-lg-6 text-center text-lg-start">
              {" "}
              <h1
                className="display-3 fw-bold text-body-emphasis lh-1 mb-3"
                id="heading"
              >
                Spring Beauty Sale <br /> Up to 40% OFF
              </h1>{" "}
              <p className="lead" id="paragraph">
                Fresh formulas. Soft hues. Skincare <br /> tha glows like spring
                mornings.
              </p>{" "}
              <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-lg-start">
                {" "}
                <button
                  type="button"
                  className="btn text-white rounded-5  btn-lg px-5 me-md-2"
                  id="btn"
                >
                  Shop Now
                </button>{" "}
              </div>{" "}
              <p className="pt-3">
                Limited time only. Pamper your skin with nature's best.
              </p>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default SaleSection;
