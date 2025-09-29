import { MdFamilyRestroom } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaHome, FaChild, FaPaintBrush, FaBookOpen, FaHeart } from "react-icons/fa";
import Carousel from "../utils/carousel";
import type { CarouselItem } from "../utils/carousel";

export default function Root() {
  
  const galleryItems: CarouselItem[] = [
    {
      title: "Arenero de Juegos",
      description: "Espacio dedicado al juego libre y la exploración sensorial donde los niños desarrollan su creatividad.",
      id: 1,
      icon: <FaChild className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/arenero.JPG',
    },
    {
      title: "Gimnasio Infantil",
      description: "Área de desarrollo psicomotriz donde fortalecemos habilidades físicas y coordinación.",
      id: 2,
      icon: <FaHeart className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/Gym.jpeg',
    },
    {
      title: "Comedor",
      description: "Capturando los momentos más especiales del crecimiento y desarrollo de nuestros pequeños.",
      id: 3,
      icon: <FaPaintBrush className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/Comedor.jpeg',
    },
    {
      title: "Nuestros Docentes",
      description: "Profesionales especializados comprometidos con la educación integral de cada niño y niña.",
      id: 4,
      icon: <FaBookOpen className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/docente.jpg',
    }
  ];
  
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="relative w-full">
        <img 
          src="/images/portada.png" 
          alt="Portada" 
          className="w-full h-auto block object-cover shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
              ¿Quiénes somos?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="space-y-6 text-center font-medium text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-cyan-600 font-bold">El mundo de Gru</strong> es un centro de educación inicial conformado por profesionales apasionados y especializados en el desarrollo 
                integral de niños y niñas de hasta 5 años.
              </p>
              <p className="text-lg">
                Nuestro propósito es brindar un <strong className="text-amber-400">espacio seguro, alegre y lleno de aprendizaje</strong>, 
                donde los valores y el juego se convierten en las principales herramientas para formar grandes personas.
              </p>
              <p className="text-lg">
                Creemos en la importancia de <strong className="text-orange-400">construir una relación cercana no solo con los pequeños, sino también con sus familias</strong>, integrándolas activamente 
                en el proceso educativo para crear una verdadera comunidad comprometida con el bienestar y crecimiento de cada niño.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
              ¿Por qué somos únicos?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border border-gray-100 hover:-translate-y-2">
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MdFamilyRestroom className="text-4xl text-white"/>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-500 pb-2 inline-block">
                  Nos enfocamos en la familia
                </h2>
                <p className="text-gray-600 font-medium leading-7">
                  En el mundo de Gru aspiramos a forjar una estrecha relación con las familias para contribuir con la formación integral de los pequeños.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border border-gray-100 hover:-translate-y-2">
                <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LuBrain className="text-4xl text-white"/>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2 inline-block">
                  Nuestra metodología de enseñanza
                </h2>
                <p className="text-gray-600 font-medium leading-7">
                  En nuestro nido, aplicamos una metodología basada en proyectos que estimula la curiosidad natural de los niños. A través del juego, 
                  la exploración y la reflexión, desarrollan pensamiento crítico, creatividad y autonomía.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border border-gray-100 hover:-translate-y-2">
                <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHome className="text-4xl text-white"/>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-400 pb-2 inline-block">
                  Un entorno que inspira al desarrollo
                </h2>
                <p className="text-gray-600 font-medium leading-7">
                  Creemos que el ambiente es un educador más. Por eso, en nuestro nido, diseñamos espacios seguros, acogedores y estimulantes, donde cada rincón 
                  invita a descubrir, crear y compartir.
                </p>
              </div>
            </div>
          </div>
        </div>      
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
              Galería
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <Carousel 
                items={galleryItems}
                baseWidth={800} 
                baseHeight={500} 
                autoplay={true}
                autoplayDelay={5000}
                pauseOnHover={true}
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}