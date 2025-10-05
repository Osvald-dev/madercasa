import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo-t.png';

export default function Footer() {
  return (
    <footer className="bg-[#1e3448] text-white border-t border-[#af823c]/30">
      {/* Franja superior institucional */}
      <div className="bg-gradient-to-r from-[#8b6032] via-[#af823c] to-[#c49771] h-1 w-full" />

      {/* Contenido principal */}
      <div className="container-custom py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-10">
      <img src={logo} alt="" />
          
       
        {/* Navegación */}
        {/* <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
          <Link to="/" className="hover:text-[#af823c] transition-colors">Inicio</Link>
          <Link to="/modelos" className="hover:text-[#af823c] transition-colors">Modelos</Link>
          <Link to="/nosotros" className="hover:text-[#af823c] transition-colors">Nosotros</Link>
          <Link to="/contacto" className="hover:text-[#af823c] transition-colors">Contacto</Link>
        </div> */}

        {/* Redes sociales */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/madercasa.clt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Instagram className="w-6 h-6 text-[#af823c]" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61578989001264"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Facebook className="w-6 h-6 text-[#af823c]" />
          </a>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="bg-[#0f1b26] py-4 text-center text-xs text-gray-400 border-t border-[#af823c]/20">
        © {new Date().getFullYear()} Mader Casa. Todos los derechos reservados.
      </div>
    </footer>
  );
}