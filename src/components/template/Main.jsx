import style from "./Main.module.css";
import Header from "./Header";

export default function Main(props) {
  return (
    <>
      <Header {...props} />
      <Main className="content container-fluid">
        <div className={style.main}>
          <div className="p-3 mt-3">{props.children}</div>
        </div>
      </Main>
    </>
  )
}