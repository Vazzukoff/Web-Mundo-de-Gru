import { MdOutlineToys } from "react-icons/md";
import { FaUtensils, FaUsers, FaHeart, FaAppleAlt, FaHome } from "react-icons/fa";

export default function Servicios() {
  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="w-full px-4 sm:px-6">

        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
            Nuestros Servicios
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Brindamos servicios integrales para el desarrollo y bienestar de tu pequeño
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                    <MdOutlineToys className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      Guardería
                    </h2>
                    <div className="w-16 h-0.5 bg-cyan-500 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium text-lg">
                  Nuestra guardería y nido de educación infantil ofrece cuidado de niños con atención personalizada, espacios seguros,
                  actividades lúdicas y desarrollo cognitivo. ¡Confía en expertos para el bienestar y crecimiento integral de tus hijos!
                </p>
                <div className="flex items-center gap-3 bg-cyan-50 p-4 rounded-lg">
                  <FaHeart className="text-cyan-500 text-xl" />
                  <span className="text-cyan-700 font-semibold">Atención personalizada y cariñosa</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl transform rotate-3 scale-105"></div>
                <img
                  src="/images/servicios/guarderia/guarderia.jpg"
                  alt="Guardería"
                  className="relative w-full h-80 lg:h-96 rounded-2xl shadow-lg object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl transform -rotate-3 scale-105"></div>
                <img
                  src="/images/servicios/comedor/comedor1.jpg"
                  alt="Comedor"
                  className="relative w-full h-80 lg:h-96 rounded-2xl shadow-lg object-cover transform rotate-1 hover:rotate-0 transition-transform duration-300"
                />
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                    <FaUtensils className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      Lonchera Nutritiva
                    </h2>
                    <div className="w-16 h-0.5 bg-amber-400 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium text-lg">
                  ¡Alimenta bien a tu hijo! Nuestro servicio de comedor infantil ofrece desayunos saludables y almuerzos nutritivos
                  con menús balanceados, ingredientes frescos y atención dietética personalizada. Comida casera para nidos, garantizando
                  nutrición infantil y bienestar.
                </p>
                <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg">
                  <FaHeart className="text-amber-500 text-xl" />
                  <span className="text-amber-700 font-semibold">Menús balanceados y nutritivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
              Talleres Especializados
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Formación continua para toda la familia educativa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Talleres para padres y abuelos
                    </h2>
                    <div className="w-16 h-0.5 bg-orange-400 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                  Ofrecemos talleres diseñados para acompañar a los padres en el desarrollo de habilidades de crianza,
                  técnicas de comunicación y estrategias de apoyo emocional.
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl transform rotate-1 scale-105"></div>
                  <img
                    src="/images/servicios/talleres/padres.jpg"
                    alt="Talleres para padres"
                    className="relative w-full h-48 rounded-xl shadow-md object-cover transform -rotate-0.5 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg mt-6">
                  <FaHeart className="text-orange-500 text-lg" />
                  <span className="text-orange-700 font-semibold text-sm">Fortalecemos vínculos familiares</span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Talleres para nanas
                    </h2>
                    <div className="w-16 h-0.5 bg-cyan-500 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                  Ofrecemos formación especializada para nanas y cuidadores, enfocada en primeros auxilios,
                  estímulo temprano y manejo de conductas.
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl transform -rotate-1 scale-105"></div>
                  <img
                    src="/images/servicios/talleres/nanas.jpg"
                    alt="Talleres para nanas"
                    className="relative w-full h-48 rounded-xl shadow-md object-cover transform rotate-0.5 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 bg-cyan-50 p-4 rounded-lg mt-6">
                  <FaHeart className="text-cyan-500 text-lg" />
                  <span className="text-cyan-700 font-semibold text-sm">Capacitación profesional certificada</span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaAppleAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Taller de Nutrición
                    </h2>
                    <div className="w-16 h-0.5 bg-amber-400 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                  Aprende sobre alimentación saludable infantil, preparación de loncheras nutritivas, 
                  manejo de alergias alimentarias y creación de hábitos alimentarios positivos.
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl transform rotate-1 scale-105"></div>
                  <img
                    src="/images/servicios/talleres/nutricion.jpg"
                    alt="Taller de Nutrición"
                    className="relative w-full h-48 rounded-xl shadow-md object-cover transform -rotate-0.5 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg mt-6">
                  <FaHeart className="text-amber-500 text-lg" />
                  <span className="text-amber-700 font-semibold text-sm">Alimentación consciente y saludable</span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaHome className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Taller Proyecto de Familia
                    </h2>
                    <div className="w-16 h-0.5 bg-orange-400 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                  Construye un plan familiar sólido enfocado en valores, tradiciones, comunicación efectiva 
                  y creación de un ambiente hogareño que favorezca el desarrollo integral de los niños.
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl transform -rotate-1 scale-105"></div>
                  <img
                    src="/images/servicios/talleres/taller de familia.jpg"
                    alt="Taller Proyecto de Familia"
                    className="relative w-full h-48 rounded-xl shadow-md object-cover transform rotate-0.5 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg mt-6">
                  <FaHeart className="text-orange-500 text-lg" />
                  <span className="text-orange-700 font-semibold text-sm">Unidos construimos hogares felices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}