import Main from "../components/template/Main";
import Layout from "./Layout";

export default function Consulta() {
  return (
    <Layout icon="search" title="Consulta Cadastro" subtitle="Consulta de cadastro do cliente">
      <Main>
        <div className="display-4">Consulta Cadastro!</div>
        <hr />
        <p className="mb-0">
          Digite o nome do cliente para consulta
        </p>
      </Main>
    </Layout>
  );
}
