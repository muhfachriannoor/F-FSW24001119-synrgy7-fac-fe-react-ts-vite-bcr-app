export default function WhyUs() {
  return (
    <section id="why-us" className="section-why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="why-us__title mb-3">Why Us ?</h1>
            <p className="why-us__sub-title mb-3">
              Mengapa harus pilih Binar Car Rental?
            </p>
          </div>
        </div>
        <div className="row g-4 mt-1">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card py-2 px-3 h-100">
              <div className="card-body">
                <span className="fa-regular fa-thumbs-up fs-5 mb-4 text-white why-us__icon bg-warning"></span>
                <h5 className="card-title fw-semibold mb-3">Mobil Lengkap</h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card py-2 px-3 h-100">
              <div className="card-body">
                <span className="fa-solid fa-tag fs-5 mb-4 text-white why-us__icon bg-danger"></span>
                <h5 className="card-title fw-semibold mb-3">Harga Murah</h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card py-2 px-3 h-100">
              <div className="card-body">
                <span className="fa-regular fa-clock fs-5 mb-4 text-white why-us__icon bg--dark-blue-04"></span>
                <h5 className="card-title fw-semibold mb-3">Layanan 24 Jam</h5>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card py-2 px-3 h-100">
              <div className="card-body">
                <span className="fa-solid fa-medal fs-5 mb-4 text-white why-us__icon bg--lime-green-04"></span>
                <h5 className="card-title fw-semibold mb-3">
                  Sopir Profesional
                </h5>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
