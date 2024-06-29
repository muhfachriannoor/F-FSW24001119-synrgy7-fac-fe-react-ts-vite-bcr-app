import service from "@/assets/images/img_service.svg";

export default function Services() {
  return (
    <section id="services" className="section-services">
      <div className="container">
        <div className="row">
          <div className="services__banner col-lg-6 d-flex align-items-center justify-content-center">
            <img src={service} className="img-fluid services__img" />
          </div>
          <div className="services__content col-lg-6 ps-lg-5 d-flex flex-column">
            <h2 className="services__title mb-4">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p className="services__sub-title">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="services__list p-0">
              <li>
                <span className="fa-solid fa-check services__icon bg--dark-blue-01"></span>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li>
                <span className="fa-solid fa-check services__icon bg--dark-blue-01"></span>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li>
                <span className="fa-solid fa-check services__icon bg--dark-blue-01"></span>
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li>
                <span className="fa-solid fa-check services__icon bg--dark-blue-01"></span>
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li>
                <span className="fa-solid fa-check services__icon bg--dark-blue-01"></span>
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
