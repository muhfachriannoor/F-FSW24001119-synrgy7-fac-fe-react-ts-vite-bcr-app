import Accordion from "react-bootstrap/Accordion";

export default function Faq() {
  return (
    <section id="faq" className="section-faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h1 className="faq__title mb-3">Frequently Asked Question</h1>
            <p className="faq__sub-title mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="col-lg-7">
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Apa saja syarat yang dibutuhkan?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  iure iusto eum consectetur laborum, animi rem doloribus
                  doloremque ab fuga vitae soluta sapiente eligendi a nisi eos
                  eaque libero obcaecati!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  iure iusto eum consectetur laborum, animi rem doloribus
                  doloremque ab fuga vitae soluta sapiente eligendi a nisi eos
                  eaque libero obcaecati!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  iure iusto eum consectetur laborum, animi rem doloribus
                  doloremque ab fuga vitae soluta sapiente eligendi a nisi eos
                  eaque libero obcaecati!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Apa Ada biaya antar-jemput?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  iure iusto eum consectetur laborum, animi rem doloribus
                  doloremque ab fuga vitae soluta sapiente eligendi a nisi eos
                  eaque libero obcaecati!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Bagaimana jika terjadi kecelakaan?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  iure iusto eum consectetur laborum, animi rem doloribus
                  doloremque ab fuga vitae soluta sapiente eligendi a nisi eos
                  eaque libero obcaecati!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
