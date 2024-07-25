import Style from "./Main.module.css";

export default function Main(props) {
  return (
    <div className={`container-fluid ${Style.containerFluid}`}>
      <div className={`p-3 mt-3 ${Style.main}`}>
        {props.children}
      </div>
    </div>
  );
}
