export default function DadosPessoais() {
  return (
    <>
      <h2>Dados Pessoais</h2>
      <hr />
      <form action="">
        <div className="form-group col-6">
          <label htmlFor="">Nome Completo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome completo"
          />
        </div>
        <div className="conteiner">
          {/* <div className="row">
            <div className="form-group col-6">
              <label htmlFor="">Endereço</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o endereço"
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="">Número</label>
              <input
                type="text"
                className="form-control"
                placeholder="Número"
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="">Complemento</label>
              <input
                type="text"
                className="form-control"
                placeholder="Complemento"
              />
            </div>
          </div> */}
          <div className="row">
            {/* <div className="form-group col-3">
              <label htmlFor="">CEP</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o CEP"
              />
            </div>
            <div className="form-group col-4">
              <label htmlFor="">Bairro</label>
              <input
                type="text"
                className="form-control"
                placeholder="Bairro"
              />
            </div> */}
            <div className="form-group col-5">
              <label htmlFor="">Cidade</label>
              <input
                type="text"
                className="form-control"
                placeholder="Cidade"
              />
            </div>
            <div className="form-group col-1">
              <label htmlFor="">UF</label>
              <select name="UF" id="" className="form-control">
                <option value="PR">PR</option>
                <option value="SP">SP</option>
              </select>
            </div>
          </div>
          <div className="row">
            {/* <div className="form-group col-3">
              <label htmlFor="">Telefone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Telefone Residencial"
              />
            </div> */}
            <div className="form-group col-3">
              <label htmlFor="">Celular</label>
              <input
                type="text"
                className="form-control"
                placeholder="Telefone Celular"
              />
            </div>
            {/* <div className="form-group col-6">
              <label htmlFor="">E-Mail</label>
              <input
                type="text"
                className="form-control"
                placeholder="E-Mail para contato"
              />
            </div> */}
          </div>
        </div>
      </form>
    </>
  );
}
