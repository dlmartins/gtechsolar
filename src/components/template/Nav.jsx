import style from "./Nav.module.css";
import Link from "next/link";

export default function Nav(props) {
  return (
    <aside className={style.area}>
      <nav className={style.menu}>
        <Link href="/Home">
          <a className="fa fa-home "> Início</a>
        </Link>

        <Link href="/Cadastro">
          <a className="fa fa-user-plus "> Cadastro</a>
        </Link>
        <Link href="/Orcamento">
          <a className="fa fa-money "> Orçamento</a>
        </Link>
        <Link href="/Consulta">
          <a className="fa fa-search "> Consulta</a>
        </Link>
      </nav>
    </aside>
  );
}
