import { MdOutlineToys } from "react-icons/md";

export default function Servicios () {
        
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl text-red-500 font-bold text-center font-title">
                Servicios
            </h1>
            <img 
                src="/assets/linea.jpg"
                alt="Línea punteada decorativa"
                className="w-1/2 mx-auto block mb-10"
            />

            {/* Bloque "Guardería" con estilo minimalista */}
            <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
  {/* Texto */}
            <div className="md:w-1/2 md:pr-8 z-10">
                <h2 className="text-3xl font-semibold mb-4 text-blue-800 font-subtitle">
                    Guardería
                </h2>
                <p className="text-gray-700 leading-relaxed font-body mb-5">
                    Nuestra guardería y nido de educación infantil ofrece cuidado de niños con atención personalizada, espacios seguros,
                    actividades lúdicas y desarrollo cognitivo. ¡Confía en expertos para el bienestar y crecimiento integral de tus hijos!
                 </p>
                 <MdOutlineToys className="mr-auto text-8xl text-red-500 transform -rotate-12" />
            </div>

  {/* Imagen con fondo decorativo */}
            <div className="md:w-1/2 mt-6 md:mt-0 relative z-10">
                <div className="absolute inset-0 -left-4 -top-4 w-full h-full bg-red-400 rounded-lg -z-10 transform rotate-1"></div>
                <img
                    src="/images/servicios/guarderia/guarderia.jpg"
                    alt="Guardería"
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>
        </div>


        <div className="flex flex-col md:flex-row-reverse items-center mb-12 bg-white p-6 rounded-xl shadow-sm">
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                <h2 className="text-3xl font-semibold mb-4 text-blue-800 font-subtitle">
                    Lonchera nutritiva
                </h2>
                <p className="text-gray-600 leading-relaxed font-body mb-5">
                    ¡Alimenta bien a tu hijo! Nuestro servicio de comedor infantil ofrece desayunos saludables y almuerzos nutritivos
                    con menús balanceados, ingredientes frescos y atención dietética personalizada. Comida casera para nidos, garantizando
                    nutrición infantil y bienestar.
                </p>
                    <img
                        src="/assets/cloud.jpg"
                        alt="Cloud"
                        className="w-26 h-16 block ml-auto mr-15"
                    />
            </div>
        {/* Imagen */}
                    <div className="md:w-1/2">
                        
                        <img
                        src="/images/servicios/comedor/comedor1.jpg"
                        alt="Comedor"
                        className="w-full h-auto rounded-lg shadow-md object-cover transition-transform duration-300"
                        />
                    </div>
        </div>

            {/* Título */}
                <h1 className="text-5xl font-bold text-red-500 text-center font-title">
                Talleres
                </h1>
                <img 
                    src="/assets/linea.jpg"
                    alt="Línea punteada decorativa"
                    className="w-1/2 mx-auto block mb-10"
                />
              




                {/* Columnas de talleres */}
                <div className="flex flex-col md:flex-row gap-8">
                {/* Talleres para padres */}
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-4 font-subtitle">
                    Talleres para padres y abuelos
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6 font-cuerpo">
                    Ofrecemos talleres diseñados para acompañar a los padres en el desarrollo de habilidades de crianza,
                    técnicas de comunicación y estrategias de apoyo emocional.
                    </p>
                    <img
                    src="/images/servicios/talleres/padres.jpg"
                    alt="Talleres para padres"
                    className="w-full h-auto rounded-lg shadow-md object-cover transition-transform duration-300"
                    />
                </div>

  {/* Talleres para nanas */}
  <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
    <h2 className="text-3xl font-semibold text-blue-800 mb-4 font-subtitle">
      Talleres para nanas
    </h2>
    <p className="text-gray-600 leading-relaxed mb-6 font-body">
      Ofrecemos formación especializada para nanas y cuidadores, enfocada en primeros auxilios,
      estímulo temprano y manejo de conductas.
    </p>
    <img
      src="/images/servicios/talleres/nanas.jpg"
      alt="Talleres para nanas"
      className="w-full h-auto rounded-lg shadow-md object-cover transition-transform duration-300"
    />
  </div>
</div>

        </div>
    );
}