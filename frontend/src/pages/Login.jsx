import style from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Login(props) {
  return (
    <div className="container min-vh-100 m-0">
      <div className={style.aside}>
        <aside className="col-4 my-auto p-5 m-0">
          <div className="row">
            <Image
              src="/imgs/gtech-logo-final-04.png"
              alt="logo"
              width={285}
              height={65}
            ></Image>
            <label htmlFor="user" className="pt-5">
              Usuário
            </label>
            <input type="email" />
            <label htmlFor="password" className="pt-3">
              Senha
            </label>
            <input type="password" />
            <Link href="/EsqueciSenha">
              <a className="pt-2"> Esqueci minha senha</a>
            </Link>
            <Link href="/NewUser">
              <a className="pt-2"> Cadastro</a>
            </Link>
            <button className='btn btn-success p-2 mt-3'>Entrar</button>
          </div>
        </aside>
        <div className="col-8 my-auto ps-1">
          {/* <h1>GTECH SOLAR</h1> */}
          <Image
            src="/imgs/Login.jpeg"
            alt="Login"
            width={1920}
            height={1080}
            //   layout="fill"
          ></Image>
        </div>
      </div>
    </div>
  );
}
