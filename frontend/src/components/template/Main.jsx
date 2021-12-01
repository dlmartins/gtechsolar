import Style from "./Main.module.css";

export default function Main(props) {
  return (
    <>
      <div className="content container-fluid">
        <div className={`p-3 mt-3 ${Style.main}`}>{props.children}</div>
      </div>
    </>
  );
}
