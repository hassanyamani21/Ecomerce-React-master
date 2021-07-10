import React, { Component, lazy } from "react";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data";
const CardFeaturedProduct = lazy(() =>
  import("../../components/card/CardFeaturedProduct")
);
const CardServices = lazy(() => import("../../components/card/CardServices"));
const Details = lazy(() => import("../../components/others/Details"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart"));
class ProductDetailView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col-md-5 text-center">
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/140121331/in-feature-focus-more-with-one-ui-core-463785836"
                  className="img-fluid mb-3"
                  alt=""
                />
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/140121331/in-feature-focus-more-with-one-ui-core-463785836"
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/140121331/in-feature-focus-more-with-one-ui-core-463785836"
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/140121331/in-feature-focus-more-with-one-ui-core-463785836"
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <h1 className="h5 d-inline mr-2">
                  Great product name goes here
                </h1>
           
            
                <dl className="row small mb-3">
                  <dt className="col-sm-3">Availability</dt>
                  <dd className="col-sm-9">In stock</dd>
                 
                 
                  <dt className="col-sm-3">Color</dt>
                  <dd className="col-sm-9">
                    <button className="btn btn-sm btn-primary p-2 mr-2"></button>
                    <button className="btn btn-sm btn-secondary p-2 mr-2"></button>
                    <button className="btn btn-sm btn-dark p-2 mr-2"></button>
                  </dd>
                </dl>

                <div className="mb-3">
                  <span className="font-weight-bold h5 mr-2">$1900</span>
                 
                </div>
               
             
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-link active"
                      id="nav-details-tab"
                      data-toggle="tab"
                      href="#nav-details"
                      role="tab"
                      aria-controls="nav-details"
                      aria-selected="true"
                    >
                      Details
                    </a>
               
                  </div>
                </nav>
                <div className="tab-content p-3 small" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-details"
                    role="tabpanel"
                    aria-labelledby="nav-details-tab"
                  >
                    <Details />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-randr"
                    role="tabpanel"
                    aria-labelledby="nav-randr-tab"
                  >
                    {Array.from({ length: 5 }, (_, key) => (
                      <RatingsReviews key={key} />
                    ))}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-faq"
                    role="tabpanel"
                    aria-labelledby="nav-faq-tab"
                  >
                    <dl>
                      {Array.from({ length: 5 }, (_, key) => (
                        <QuestionAnswer key={key} />
                      ))}
                    </dl>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-ship-returns"
                    role="tabpanel"
                    aria-labelledby="nav-ship-returns-tab"
                  >
                    <ShippingReturns />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-size-chart"
                    role="tabpanel"
                    aria-labelledby="nav-size-chart-tab"
                  >
                    <SizeChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}

export default ProductDetailView;
