export default function DadosFatura() {
  return (
    <>
      <form action="">
        <div className="conteiner">
          <div className="row">
            <div className="form-group col-3">
              <label htmlFor="">Número da UC</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nº da UC"
              />
            </div>
            <div className="form-group col-9">
              <div>
                <label htmlFor="">Classe</label>
              </div>
              <div className="mt-2">
                <input type="radio" name="classe" />
                <label className="px-2">Série B</label>
                <input type="radio" name="classe" />
                <label className="px-2">Horosazonal</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-4">
              <label htmlFor="">Valor kWh</label>
              <input
                type="text"
                className="form-control"
                placeholder="R$ 0,82"
              />
            </div>
            <div className="form-group col-4">
              <label htmlFor="">Valor Iluminação Pública</label>
              <input
                type="text"
                className="form-control"
                placeholder="R$ 20,12"
              />
            </div>
          </div>
          <div className="row">
            <h5>Consumo mensal</h5>
            <div className="form-group col-2">
              <label htmlFor="">JAN</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">FEV</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">MAR</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">ABR</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">MAI</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">JUN</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">JUL</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">AGO</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">SET</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">OUT</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">NOV</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="">DEZ</label>
              <input type="number" className="form-control" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
