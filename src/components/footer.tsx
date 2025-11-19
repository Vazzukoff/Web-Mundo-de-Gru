import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 shadow-lg mt-8">
      <div className="h-0.5 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400"></div>
      
      <div className="py-8 px-4 sm:px-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-lg text-gray-800 mb-4 pb-2 border-b-2 border-cyan-500 inline-block">
              Redes sociales
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/elmundodegru_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-cyan-500 transition-colors duration-300 justify-center md:justify-start group"
                >
                  <FaSquareInstagram className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/nidoelmundodegru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-cyan-500 transition-colors duration-300 justify-center md:justify-start group"
                >
                  <FaFacebook className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@nidoelmundodegru_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-cyan-500 transition-colors duration-300 justify-center md:justify-start group"
                >
                  <FaTiktok className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">TikTok</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-lg text-gray-800 mb-4 pb-2 border-b-2 border-amber-400 inline-block">
              <Link to="/" className="hover:text-amber-500 transition-colors duration-300">
                El mundo de Gru
              </Link>
            </h2>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-cyan-500 transition-colors duration-300 font-medium"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios" 
                  className="text-gray-600 hover:text-amber-500 transition-colors duration-300 font-medium"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-medium"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
  
          <div className="text-center md:text-right">
            <h2 className="font-bold text-lg text-gray-800 mb-4 pb-2 border-b-2 border-orange-400 inline-block">
              Contáctanos
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="http://wa.me/51968275363"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors duration-300 justify-center md:justify-end group"
                >
                  <FaPhoneAlt className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">+51 968 275 363</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Nido+El+Mundo+de+GRU/@-12.0953743,-77.0624951,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c9c112bbd7fd:0x691aad9376ccb075!8m2!3d-12.0953743!4d-77.0624951!16s%2Fg%2F11rqrm6krr?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors duration-300 justify-center md:justify-end group"
                >
                  <FaLocationDot className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Jirón Trujillo 370, Magdalena del Mar</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-600 justify-center md:justify-end">
                  <MdOutlineMailOutline className="text-lg" />
                  <span className="font-medium">nidoelmundodegru@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © 2025 El mundo de Gru. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}