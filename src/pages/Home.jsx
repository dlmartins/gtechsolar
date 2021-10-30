import Main from "../components/template/Main"
import App from "./App"

export default function Home(props) {
    return (
        <App>
        <Main icon="home" title="GTECH Solar"
            subtitle="A energia do futuro">
            <div className='display-4'>Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para controle, cadastro de
                clientes e elaboração de orçamentos</p>
        </Main>
        </App>
    )
}