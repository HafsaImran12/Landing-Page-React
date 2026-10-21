import "./Review.css";

const Review = () => {
  return (
    <>
      <div className="container-fluid p-5" id="review">
        <div className="row">
          <div class="col-6  mb-3">
            {" "}
            <h2 id="heading" className="display-5 fw-bold ">
              Loved by Thousands
            </h2>{" "}
            <ul class="fs-4 gap-2 list-unstyled d-flex mb-0">
              <li>
                <i class="fas fa-star fa-sm star"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm star"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm star"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm star"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm star"></i>
              </li>
                          <li>
                              <p>4.8/5 (2k+reviews)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
