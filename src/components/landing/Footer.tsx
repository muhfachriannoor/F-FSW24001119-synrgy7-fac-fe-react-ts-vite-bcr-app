export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <p className="mb-4">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p className="mb-4">binarcarrental@gmail.com</p>
            <p className="mb-4">081-233-334-808</p>
          </div>
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-3 ms-lg-5">
              <a href="#services" className="footer__link">
                Our Services
              </a>
              <a href="#why-us" className="footer__link">
                Why Us
              </a>
              <a href="#testimonial" className="footer__link">
                Testimonial
              </a>
              <a href="#faq" className="footer__link">
                FAQ
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <p className="mb-4">Connect with us</p>
            <div className="d-flex align-items-center gap-3">
              <a href="#" className="footer__social-icon bg--dark-blue-04">
                <span className="fab fa-facebook text-white"></span>
              </a>
              <a href="#" className="footer__social-icon bg--dark-blue-04">
                <span className="fab fa-instagram text-white"></span>
              </a>
              <a href="#" className="footer__social-icon bg--dark-blue-04">
                <span className="fab fa-twitter text-white"></span>
              </a>
              <a href="#" className="footer__social-icon bg--dark-blue-04">
                <span className="fas fa-envelope text-white"></span>
              </a>
              <a href="#" className="footer__social-icon bg--dark-blue-04">
                <span className="fab fa-twitch text-white"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <p className="mb-4">Copyright Binar 2022</p>
            <div className="footer__logo bg--dark-blue-04"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
