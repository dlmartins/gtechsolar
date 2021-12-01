import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Style from "../styles/App.module.css";

import Footer from "../components/template/Footer";
import Header from "../components/template/Header";
import Logo from "../components/template/Logo";
import Main from "../components/template/Main";
import Nav from "../components/template/Nav";

export default function Layout(props) {
  return (
    <div className={Style.app}>
      <Logo className={Style.logo}></Logo>
      <Header className={Style.header} {...props}></Header>
      <Nav className={Style.nav}></Nav>
      <Main className={Style.content} {...props}></Main>
      <Footer className={Style.footer}></Footer>
    </div>
  );
}
