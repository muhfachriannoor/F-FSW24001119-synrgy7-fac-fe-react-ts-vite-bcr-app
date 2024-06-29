import { ReactElement, useRef, useState, useContext } from "react";
import { CarsContext } from "@/context/CarsContext";

export default function FormCarsFilter(): ReactElement {
  
  const typeDriverRef = useRef<HTMLSelectElement>(null);
  const dateCarRef = useRef<HTMLInputElement>(null);
  const pickTimeRef = useRef<HTMLInputElement>(null);
  const totalPassengerRef = useRef<HTMLInputElement>(null);

  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

  const checkInput = (): void => {
    if(typeDriverRef.current?.value != '' && dateCarRef.current?.value != '' && pickTimeRef.current?.value != '') {
      setDisabledBtn(false)
    }
  }

  const { getCars } = useContext(CarsContext);

  const onSubmit = (): void => {
    const dataFilters = {
        typeDriver: typeDriverRef.current?.value,
        dateCar: dateCarRef.current?.value,
        pickTime: pickTimeRef.current?.value,
        totalPassenger: totalPassengerRef.current?.value,
    };


    getCars(dataFilters);
  }

  return (
    <section id="filter-car" className="section-filter-car">
      <div className="position-relative">
        <div className="position-absolute start-50 translate-middle filter-box">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center flex-row mb-3 gap-3">
                <div>
                  <div className="form-group">
                    <label className="form-label">Tipe Driver</label>
                    <select name="typeDriver" defaultValue={""} className="form-select" ref={typeDriverRef} onChange={checkInput}>
                      <option value="" hidden>
                        Pilih Tipe Driver
                      </option>
                      <option value="With Driver">Dengan Sopir</option>
                      <option value="Without Driver">
                        Tanpa Sopir (Lepas Kunci)
                      </option>
                    </select>
                  </div>
                </div>
                <div style={{ width: "20%" }}>
                  <div className="form-group">
                    <label className="form-label">Tanggal</label>
                    <input name="dateCar" type="date" className="form-control" placeholder="Pilih Tanggal" ref={dateCarRef} onChange={checkInput}/>
                  </div>
                </div>
                <div style={{ width: "20%" }}>
                  <div className="form-group">
                    <label className="form-label">Waktu Jemput/Ambil</label>
                    <input name="pickTime" type="time" className="form-control" placeholder="Pilih Waktu" ref={pickTimeRef} onChange={checkInput}/>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label className="form-label">
                      Jumlah Penumpang Opsional
                    </label>
                    <input type="number" name="totalPassenger" className="form-control" placeholder="Jumlah Penumpang" ref={totalPassengerRef} onChange={checkInput} />
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <button className="btn bg--lime-green-04 font-white"
                    id="btn-search-car" disabled={disabledBtn} onClick={onSubmit}>
                    Cari Mobil
                  </button>
                  {/*<button className="btn bg--lime-green-04 font-white"
                    id="btn-search-car" disabled={disabledBtn}>
                    Cari Mobil
                  </button>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
