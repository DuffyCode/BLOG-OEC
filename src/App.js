import {BrowserRouter, Routes, Route} from'react-router-dom'; 
import Imagens from './Img/Images';
import Home from './Sections/Home';
import UnidadI from './Sections/UnidadI';
import UnidadII from './Sections/UnidadII';
import UnidadIII from './Sections/UnidadIII';
import Usuario from './Sections/Usuario';
import Blog from './Sections/Blog';
import './App.css';

export function App() {
  return (
    <div>
      <header>
        <ul className="Banner">
            <h1 className="Banner-Title">OEC</h1>
            <img src={Imagens.img9} className="Banner-logo" alt="Logo" />
        </ul>
      </header>
      <section>
        <nav className="Menu">
          <a className="Links" href="/">Home</a>
          <a className="Links" href="/UnidadI">Unidad-I</a>
          <a className="Links" href="/UnidadII">Unidad-II</a>
          <a className="Links" href="/UnidadIII">Unidad-III</a>
          <a className="Links" href="/Usuarios">Usuarios</a>
          <a className="Links" href="/Blog">Blog</a>
        </nav>
      </section>
      <BrowserRouter><Routes><Route path="/" element={<Home/>}></Route></Routes></BrowserRouter>
      <BrowserRouter><Routes><Route path="/UnidadI" element={<UnidadI/>}></Route></Routes></BrowserRouter>
      <BrowserRouter><Routes><Route path="/UnidadII" element={<UnidadII/>}></Route></Routes></BrowserRouter>
      <BrowserRouter><Routes><Route path="/UnidadIII" element={<UnidadIII/>}></Route></Routes></BrowserRouter>
      <BrowserRouter><Routes><Route path="/Usuarios" element={<Usuario/>}></Route></Routes></BrowserRouter>
      <BrowserRouter><Routes><Route path="/Blog" element={<Blog/>}></Route></Routes></BrowserRouter>

      <footer className="Footer">
        <br/><br/>
        <li className="FooterText">2022 UDO. organización y estructura del computador (O.E.C) Proyecto Final - Pagina Web.
        <br/>Universidad de Oriente, Av. 31 de Julio Guatamare, Nueva Esparta, Venezuela.</li>
        <hr/>

        <li className="FooterText2">- Duberth Farias</li>
          <a className="SocialLink" rel="noreferrer" href="https://www.facebook.com/duffy.Disorder" target="_blank">
          <img src={Imagens.img7} className="Img" alt="Facebook"/></a>
          <a className="SocialLink" rel="noreferrer" href="https://www.instagram.com/duffy_disorder" target="_blank">
          <img src={Imagens.img8} className="Img" alt="Instagram"/></a>
          <a className="SocialLink" rel="noreferrer" href="https://twitter.com/Duffy_Disorder" target="_blank">
          <img src={Imagens.img10} className="Img" alt="Twitter"/></a>
        <hr/>

        <li className="FooterText2">- Adrian Mata</li>
          <a className="SocialLink" rel="noreferrer" href="https://www.facebook.com/OkamiNeonShiranui" target="_blank">
          <img src={Imagens.img7} className="Img" alt="Facebook"/></a>
        <hr/>
        <li className="FooterText2">- Jesus Carrera</li>
          <a className="SocialLink" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100009010199949" target="_blank">
          <img src={Imagens.img7} className="Img" alt="Facebook"/></a>
      </footer>
    </div>
  );
}