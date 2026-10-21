import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="container-fluid py-5" id="header">
        <div className="px-4 my-5" id="hero">
          {" "}
          <h1 className="display-3 fw-bold" id="heading">
            Beauty that Begins <br /> with You
          </h1>{" "}
          <div className="col-lg-6">
            {" "}
            <p className="lead mb-4" id="paragraph">
              Premium skincare design to <br /> bring out your most luminious,{" "}
              <br /> self
            </p>{" "}
            <div className="d-grid gap-2 d-sm-flex">
              {" "}
              <button
                type="button"
                id="btn"
                className="btn text-white rounded-5 btn-lg gap-3"
              >
                Shop the Collection
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
