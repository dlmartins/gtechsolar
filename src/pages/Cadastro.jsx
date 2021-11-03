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
        <DadosFatura></DadosFatura>
        <div className="mt-3">
          <button type="button" class="btn btn-success">
            SALVAR
          </button>
        </div>
      </Main>
    </Layout>
  );
}
