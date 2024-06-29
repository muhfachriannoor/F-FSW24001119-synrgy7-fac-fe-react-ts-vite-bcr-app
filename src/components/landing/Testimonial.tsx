import { ReactElement, useEffect } from "react";
import testi1 from "@/assets/images/testimonial-1.svg";
import testi2 from "@/assets/images/testimonial-2.svg";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial(): ReactElement {
  const owlNavPrev: string = '<div class="circle-icon btn bg--outline-green-04 mt-3 mx-2"><i class="fa-solid fa-chevron-left"></i></div>';
  const owlNavNext: string = '<div class="circle-icon btn bg--outline-green-04 mt-3 mx-2"><i class="fa-solid fa-chevron-right"></i></div>';

  useEffect(() => {
    ($(".owl-carousel") as any).owlCarousel({
      margin: 30,
      center: true,
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      navText: [`${owlNavPrev}`, `${owlNavNext}`],
      responsive: {
        600: {
          items: 2,
        },
      },
    });
  }, []);
  
  return (
    <section id="testimonial" className="section-testimonial">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="testimonial__title text-center mb-3">Testimonial</h1>
            <p className="testimonial__sub-title text-center mb-3">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
          <div className="owl-carousel owl-theme mt-3">
            <div className="item">
              <div className="testimonial__card card h-100 bg--gray">
                <div className="row">
                  <div className="col-lg-3 d-flex justify-content-center align-items-center">
                    <img src={testi1} className="img-fluid testimonial__img" />
                  </div>
                  <div className="col-lg-9">
                    <div className="card-body">
                      <div className="testimonial__ratings">
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                      </div>
                      <p className="card-text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <h5 className="card-title fw-normal">
                        John Dee 32, Bromo
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial__card card h-100 bg--gray">
                <div className="row">
                  <div className="col-lg-3 d-flex justify-content-center align-items-center">
                    <img src={testi2} className="img-fluid testimonial__img" />
                  </div>
                  <div className="col-lg-9">
                    <div className="card-body">
                      <div className="testimonial__ratings">
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                      </div>
                      <p className="card-text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <h5 className="card-title fw-normal">
                        John Dee 32, Bromo
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial__card card h-100 bg--gray">
                <div className="row">
                  <div className="col-lg-3 d-flex justify-content-center align-items-center">
                    <img src={testi1} className="img-fluid testimonial__img" />
                  </div>
                  <div className="col-lg-9">
                    <div className="card-body">
                      <div className="testimonial__ratings">
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                        <span className="fa-solid fa-star fs-5 mb-4 text-warning"></span>
                      </div>
                      <p className="card-text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <h5 className="card-title fw-normal">
                        John Dee 32, Bromo
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
