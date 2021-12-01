import DadosFatura from "../components/DadosFatura";
import DadosPessoais from "../components/DadosPessoais";
import Main from "../components/template/Main";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout
      icon="user-plus"
      title="Cadastro Cliente"
      subtitle="Cadastro inicial de clientes"
    >
      <Main>
        <DadosPessoais></DadosPessoais>
        <h2 className="mt-4">Dados Fatura</h2>
        <hr />
        <DadosFatura></DadosFatura>
        <div className="mt-3">
          <button type="button" class="btn btn-primary ">
            Nova Fatura
          </button>
          <button type="button" class="btn btn-success m-3">
            Salvar
          </button>
        </div>
      </Main>
    </Layout>
  );
}
