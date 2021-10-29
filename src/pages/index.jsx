import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import Footer from '../components/template/Footer'
import Header from '../components/template/Header'
import Logo from '../components/template/Logo'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'


export default function home() {
  return (
    <div className="app" >
      <Header></Header>
      <Nav></Nav>
      <Logo></Logo>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}