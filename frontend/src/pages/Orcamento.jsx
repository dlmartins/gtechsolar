import Main from "../components/template/Main";
import Layout from "./Layout";

export default function Orcamento() {
  return (
    <Layout icon="money " title="Orçamento" subtitle="Cálculo e elaboração do orçamento">
      <Main>
        <div className="display-4">Informações do Orçamento!</div>
        <hr />
        <p className="mb-0">
          Digite o nome do cliente para consulta
        </p>
      </Main>
    </Layout>
  );
}
