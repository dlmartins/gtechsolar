import "./Main.module.css";
import Header from "./Header";

export default (props) => (
  <>
    <Header {...props} />
    <main className="content container-fluid">
      <div className="main p-3 mt-3">{props.children}</div>
    </main>
  </>
);
