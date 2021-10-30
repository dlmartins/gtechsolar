import style from "./Nav.module.css";
import Link from 'next/link'

export default function Nav (props) {
  return (
  <aside className={style.area}>
    <nav className={style.menu}>

        <Link href="/Home">
          <a>Início</a>
        </Link>

        <Link href="/Cadastro">
          <a>Cadastro</a>
        </Link>
    </nav>
  </aside>
  )
}