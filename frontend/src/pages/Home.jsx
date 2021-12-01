import Main from "../components/template/Main";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout icon="home" title="GTECH Solar" subtitle="A energia do futuro">
      <Main>
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">
          Sistema para controle, cadastro de clientes e elaboração de orçamentos
        </p>
      </Main>
    </Layout>
  );
}
