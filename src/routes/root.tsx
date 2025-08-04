import ImageCarousel from '../utils/carrusel';
import { MdFamilyRestroom } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

const images = [
  '/images/carrusel/arenero.JPG',
  '/images/carrusel/gym.JPG',
  '/images/carrusel/niño.JPG',
  '/images/carrusel/docente.jpg',
];
export default function Root() {
  
    return (
    <div>
        <div>
            <img src="/images/portada.png" alt="Portada" className="h-22 w-full block mb-8"/>
        </div>
        <div>
          <h1 className="font-title text-center text-red-600">¿Quiénes somos?</h1>
          <img 
              src="/assets/linea.jpg"
              alt="Línea punteada decorativa"
              className="w-1/2 mx-auto mt-1 block mb-4"
          />
          <p className="text-center mx-auto my-auto font-body max-w-[900px] mb-10">
              El mundo de Gru es un centro de educación inicial conformado por profesionales especializados en el desarrollo de niños y niñas de hasta 5 años. 
              Nuestro propósito es ofrecer un espacio lleno de alegría y aprendizaje, donde se fomente una formación integral basada en valores. Buscamos construir 
              una relación cercana tanto con los niños como con sus familias, integrándolos activamente en el proceso educativo para crear una comunidad comprometida 
              con el crecimiento y bienestar de cada pequeño.
          </p>
        </div>
        <div>
          <h1 className="font-title text-center text-red-600">¿Por qué somos únicos?</h1>
              <img 
                src="/assets/linea.jpg"
                alt="Línea punteada decorativa"
                className="w-1/2 mx-auto mt-1 block"
              />
              <ul className="flex justify-between items-start w-full max-w-6xl mx-auto mt-10 gap-6 mb-10">
                <li className="w-1/3 bg-cyan-500 border-4 border-blue-200 p-6 rounded-xl shadow-sm text-center min-h-[400px] max-w-[300px] ">
                    <MdFamilyRestroom className="mx-auto text-6xl text-white mb-4"/>
                    <h2 className="text-xl font-bold text-white font-subtitle mb-2">
                      Nos enfocamos en la familia
                    </h2>
                    <p className="text-lg text-white font-body leading-7">
                    En el mundo de Gru aspiramos a forjar un una estrecha relación con las familias para contribuir con la formación integral de los pequeños.
                    </p>
                </li>

                <li className="w-1/3 bg-amber-400 border-4 border-yellow-200 p-6 rounded-xl shadow-sm text-center min-h-[400px] max-w-[300px]">
                  <LuBrain className="mx-auto text-6xl text-white mb-4"/>
                  <h2 className="text-xl font-bold text-white font-subtitle mb-2">
                    Nuestra metolodogía de enseñanza
                  </h2>
                  <p className="text-lg text-white font-subtitle leading-7">
                    En nuestro nido, aplicamos una metodología basada en proyectos que estimula la curiosidad natural de los niños. A través del juego, 
                    la exploración y la reflexión, desarrollan pensamiento crítico, creatividad y autonomía.
                  </p>
                </li>

                <li className="w-1/3 text-right bg-orange-400 border-4 border-orange-300 p-6 rounded-xl shadow-sm min-h-[400px] max-w-[300px]">
                  <FaHome className="mx-auto text-6xl text-white mb-4"/>
                  <h2 className="text-lg font-bold text-white font-subtitle mb-2 text-center">
                    Un entorno que inspira al desarrollo
                  </h2>
                  <p className="text-lg text-white font-body text-center leading-7">
                    Creemos que el ambiente es un educador más. Por eso, en nuestro nido, diseñamos espacios seguros, acogedores y estimulantes, donde cada rincón 
                    invita a descubrir, crear y compartir.
                  </p>
                </li>
              </ul>      
            </div>
      <div className="mb-7">
        <h1 className="font-title text-center text-red-600">Galería</h1>
        <img 
          src="/assets/linea.jpg"
          alt="Línea punteada decorativa"
          className="w-1/2 mx-auto mt-1 block mb-5"
        />
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}