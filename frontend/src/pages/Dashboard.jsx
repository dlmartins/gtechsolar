import Main from "../components/template/Main";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout
      icon="user-plus"
      title="Cadastro Cliente"
      subtitle="Cadastro inicial de clientes"
    >
      <Main>
        <div className="col-md-9 col-lg-10 p-0">
          <div className="header">
            <h1>Dashboard</h1>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total de Usuários</h5>
                    <p className="card-text">150</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total de Clientes</h5>
                    <p className="card-text">80</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Propostas Enviadas</h5>
                    <p className="card-text">45</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Gráfico de Desempenho</h5>
                    <p className="card-text">
                      [Aqui vai o gráfico de desempenho]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
}
