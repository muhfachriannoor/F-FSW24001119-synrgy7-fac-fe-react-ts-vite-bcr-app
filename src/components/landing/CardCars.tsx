import { useContext, useEffect } from "react";
import { CarsContext } from "@/context/CarsContext";
import { formatRupiah } from "@/lib/utils";

export default function CardCars() {
  const { data, getCars } = useContext(CarsContext);

  useEffect(() => {
    getCars();
  }, []);

  return (
    <section id="content-car" className="section-content-car">
      <div className="container">
        <div className="row mt-5" id="cars-container">
          {data?.map((show) => (
            <div className="col-4" key={show.id}>
              <div className="card filter-car-content">
                <img
                  src={show.image}
                  className="card-img-top car-img"
                  alt="Manufacture"
                />
                <div className="card-body">
                  <h6 className="card-text">
                    {show.manufacture} / {show.type}
                  </h6>
                  <h5 className="card-title">Rp. {formatRupiah(show.rentPerDay)} / hari</h5>
                  <p className="card-text">{show.description} </p>
                  <p className="card-text">
                    <span className="fa-solid fa-users"></span> {show.capacity}{" "}
                    Orang
                  </p>
                  <p className="card-text">
                    <span className="fa-solid fa-gear"></span>{" "}
                    {show.transmission}
                  </p>
                  <p className="card-text">
                    <span className="fa-regular fa-calendar"></span> Tahun{" "}
                    {show.year}
                  </p>
                  <div className="button d-flex align-items-end">
                    <a
                      href="#"
                      className="btn filter-car-btn bg--lime-green-04"
                    >
                      Pilih Mobil
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
