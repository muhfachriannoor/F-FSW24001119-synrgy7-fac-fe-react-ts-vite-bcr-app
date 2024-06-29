import { Link } from "react-router-dom";
import carBanner from "@/assets/images/img_car.svg";

export default function Hero() {
  return (
    <section id="hero" className="section-hero bg--gray overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between gap-5">
          <div className="hero__content col-lg-6">
            <h1 className="hero__title mb-4">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="hero__sub-title">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link to="/cars">
              <button className="btn bg--lime-green-04">
                Mulai Sewa Mobil
              </button>
            </Link>
          </div>
          <div className="hero__banner col-lg">
            <img src={carBanner} className="img-fluid hero__img" />
          </div>
        </div>
      </div>
    </section>
  );
}