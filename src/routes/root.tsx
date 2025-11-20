import { MdFamilyRestroom } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaHome, FaChild, FaPaintBrush, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import Carousel from "../utils/carousel";
import type { CarouselItem } from "../utils/carousel";

export default function Root() {
  
  // Datos personalizados para el carousel de la galería
  const galleryItems: CarouselItem[] = [
    {
      title: "Arenero de Juegos",
      description: "Espacio dedicado al juego libre y la exploración sensorial donde los niños desarrollan su creatividad.",
      id: 1,
      icon: <FaChild className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/arenero.JPG',
    },
    {
      title: "Aulas Educativas",
      description: "Área de desarrollo psicomotriz donde fortalecemos habilidades físicas y coordinación.",
      id: 2,
      icon: <FaBookOpen className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/salon-de-juegos.JPG',
    },
    {
      title: "Nuestros Docentes",
      description: "Profesionales especializados comprometidos con la educación integral de cada niño y niña.",
      id: 4,
      icon: <FaChalkboardTeacher className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/docente2.JPG',
    },
    {
      title: "Promovemos buenos valores",
      description: "Capturando los momentos más especiales del crecimiento y desarrollo de nuestros pequeños.",
      id: 3,
      icon: <FaPaintBrush className="h-[16px] w-[16px] text-white" />,
      image: '/images/carrusel/lavamanos.JPG',
    },
  ];
  
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full">
        <img 
          src="/images/portada.png" 
          alt="Portada" 
          className="w-full h-auto block object-cover shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="bg-gray-50 py-16 px-4">
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
      
      {/* ¿Quiénes somos? Section */}
      {/* Sección Nuestras Instalaciones */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
              Nuestras Instalaciones
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Espacios diseñados especialmente para el desarrollo integral de tu pequeño
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Instalación 1 */}
            <div className="group">
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent z-10"></div>
                  <img
                    src="/images/instalaciones/aula.JPG"
                    alt="Aulas Educativas"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                    <p className="font-bold text-sm">Aulas Educativas</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-cyan-500 pb-2 inline-block">
                    Aulas Educativas
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    Nuestras aulas son amplias, luminosas y organizadas por contextos de aprendizaje. Cada espacio 
                    está cuidadosamente preparado para invitar a la exploración, el juego y el descubrimiento.
                  </p>
                </div>
              </div>
            </div>

            {/* Instalación 2 */}
            <div className="group">
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent z-10"></div>
                  <img
                    src="/images/instalaciones/gimnasio.JPG"
                    alt="Área de Juegos"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-400 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                    <p className="font-bold text-sm">Gimnasio</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-amber-400 pb-2 inline-block">
                    Gimnasio
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    Espacio seguro y amplio equipado con colchonetas, rampas, túneles, bloques y materiales suaves que invitan a trepar, saltar y explorar sus capacidades motoras.
                  </p>
                </div>
              </div>
            </div>

            {/* Instalación 3 */}
            <div className="group">
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent z-10"></div>
                  <img
                    src="/images/instalaciones/comedor.JPG"
                    alt="Comedor"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-400 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                    <p className="font-bold text-sm">Comedor</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-orange-400 pb-2 inline-block">
                    Comedor
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    Nuestro comedor es un espacio acogedor y cuidadosamente diseñado en donde los niños disfrutan alimentos 
                    nutritivos a la vez que experimentan autonomía y convivencia.
                  </p>
                </div>
              </div>
            </div>

            {/* Instalación 4 */}
            <div className="group">
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent z-10"></div>
                  <img
                    src="/images/instalaciones/sala-psicomotriz.jpg"
                    alt="Sala Psicomotriz"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                    <p className="font-bold text-sm">Sala Psicomotriz</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-cyan-500 pb-2 inline-block">
                    Sala Psicomotriz
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    Amplio espacio seguro y cuidadosamente diseñado para favorecer el movimiento libre y el desarrollo corporal de los niños. Cuenta con colchonetas, rampas, túneles, bloques 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ¿Por qué somos únicos? Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
              ¿Por qué somos únicos?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Cyan */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-cyan-500 hover:-translate-y-2">
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

            {/* Card 2 - Amber */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-amber-400 hover:-translate-y-2">
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

            {/* Card 3 - Orange */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full border-2 border-orange-400 hover:-translate-y-2">
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

      {/* Galería Section */}
      {/* Sección Nuestra Directora */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
              Nuestra Directora
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Imagen de la directora */}
              <div className="relative order-1 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-amber-100 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative">
                  <img
                    src="/images/portada1.JPG"
                    alt="Directora del Nido"
                    className="relative w-full h-96 lg:h-[500px] rounded-2xl shadow-lg object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                  />
                  {/* Badge decorativo */}
                  <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg transform rotate-3">
                    <p className="font-bold text-lg">Directora Fundadora</p>
                  </div>
                </div>
              </div>

              {/* Información de la directora */}
              <div className="space-y-6 order-2 lg:order-2">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Miss Gru
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-400 mb-4 rounded-full"></div>
                </div>

                <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
                  <p className="text-lg">
                    Hola, soy [Nombre] y tengo el privilegio de dirigir El Mundo de Gru. Con más de 
                    <strong className="text-cyan-600"> XX años dedicados a la educación inicial</strong>, cada día me 
                    levanto emocionada por acompañar a los más pequeños en sus primeros pasos educativos.
                  </p>
                  <p className="text-lg">
                    Mi pasión es crear un espacio donde <strong className="text-amber-500">cada niño se sienta amado, 
                    escuchado y motivado a explorar</strong>. Creo firmemente que el juego y el afecto son las 
                    herramientas más poderosas para el aprendizaje.
                  </p>
                  <p className="text-lg">
                    Para mí, trabajar con familias es fundamental. No solo educos a sus hijos, construyo 
                    <strong className="text-orange-500"> una comunidad donde todos somos parte del crecimiento 
                    de cada pequeño</strong>. Los invito a conocernos y ser parte de nuestra gran familia.
                  </p>
                </div>

                {/* Credenciales destacadas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-sm text-cyan-700 font-semibold">Mi Formación</p>
                    <p className="text-xs text-gray-600 mt-1">Especialización en Educación Inicial</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <p className="text-sm text-amber-700 font-semibold">Mi Experiencia</p>
                    <p className="text-xs text-gray-600 mt-1">Metodologías Innovadoras</p>
                  </div>
                </div>

                {/* Quote inspiracional */}
                <div className="bg-gradient-to-r from-orange-50 to-cyan-50 p-6 rounded-xl border-l-4 border-orange-400 mt-6">
                  <p className="text-gray-700 font-medium italic text-lg">
                    "Cada niño que llega a nuestro nido trae consigo un mundo único por descubrir. Mi 
                    compromiso es acompañarlos con amor, respetando sus tiempos y celebrando cada uno de 
                    sus logros como si fueran míos."
                  </p>
                </div>
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
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 w-full max-w-5xl">
              <Carousel 
                items={galleryItems}
                baseWidth={1000}
                baseHeight={600}
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