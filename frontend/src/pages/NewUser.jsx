import Image from "next/image";

export default function NewUser() {
  return (
    <div className="container min-vh-100 m-0 mt-5">
      <div className="row col-6 mx-auto justify-content-center">
        <Image
          src="/imgs/gtech-logo-final-04.png"
          alt="logo"
          width={285}
          height={65}
        ></Image>
        <label htmlFor="name" className="mt-5 p-0">
          Nome Completo:
        </label>
        <input type="text" className="mt-1 p-1" />
        <label htmlFor="user" className="mt-2 p-0">
          Usuário:
        </label>
        <input type="text" className="mt-1 p-1" />
        <label htmlFor="password" className="mt-2 p-0">
          Senha:
        </label>
        <input type="password" className="mt-1 p-1" />
        <label htmlFor="password" className="mt-2 p-0">
          Confirmar Senha:
        </label>
        <input type="password" className="mt-1 p-1" />
        <button className=" mt-4 p-3 btn btn-success col-4">SALVAR</button>
      </div>
    </div>
  );
}
