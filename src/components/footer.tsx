import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer () {

  return (
    <footer className="bg-cyan-400 py-4 mt-5 font-bold">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:pl-10 md:pr-10">

        {/* Redes sociales */}
        <div className="text-center md:text-left text-white order-1 mb-6 md:mb-0">
          <h2 className="font-title text-xl underline sm:no-underline">Redes sociales</h2>
          <ul className="font-body leading-relaxed mt-2 space-y-2">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaSquareInstagram />
              <a
                href="https://www.facebook.com/nidoelmundodegru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaFacebook />
              <a
                href="https://www.facebook.com/nidoelmundodegru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaTiktok />
              <a
                href="https://www.tiktok.com/@nidoelmundodegru_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
  
        {/* El mundo de Gru */}
        <div className="order-2 mb-6 md:mb-0">
          <nav className="font-subtitle md:ml-14 text-center md:text-left">
            <h2>
              <Link to="/" className="text-white font-title text-xl mb-5 underline sm:no-underline sm:hover:underline">
                El mundo de Gru
              </Link>
            </h2>
            <ul className="mt-2 leading-relaxed space-y-2 text-center">
              <li>
                <Link to="/" className="text-white text-base hover:underline">Inicio</Link>
              </li>
              <li>
                <Link to="/servicios" className="text-white text-base hover:underline">Servicios</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-white text-base hover:underline">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
  
        {/* Contáctanos */}
        <div className="text-center md:text-left order-3 md:justify-end">
          <Link to="/contacto" className="font-title text-xl text-white underline sm:no-underline sm:hover:underline md:justify-end">
            Contáctanos
          </Link>
          <ul className="font-body space-y-2 mt-4 leading-relaxed md:justify-end">
            <li className="flex items-center gap-2 justify-center md:justify-end">
              <FaPhoneAlt className="text-white" />
              <a
                href="http://wa.me/51968275363"
                className="text-white transition-colors text-body hover:underline"
              >
                +51 968 275 363
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-end">
              <FaLocationDot className="text-white" />
              <a
                href="https://www.google.com/maps/place/Nido+El+Mundo+de+GRU/@-12.0953743,-77.0624951,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c9c112bbd7fd:0x691aad9376ccb075!8m2!3d-12.0953743!4d-77.0624951!16s%2Fg%2F11rqrm6krr?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Jirón Trujillo 370, Magdalena del Mar
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-end">
              <MdOutlineMailOutline className="text-white" />
              <span className="text-white">nidoelmundodegru@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );        
}