import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import MapaLeaflet from '../utils/mapa';
import { ContactFormSchema } from '../schemas/schemas';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok, FaFacebook } from "react-icons/fa";

const contactoSchema = ContactFormSchema

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validar con Zod
  const result = contactoSchema.safeParse(formData);
  if (!result.success) {
    // Mapear errores de Zod al estado
    const fieldErrors: { name?: string; email?: string; message?: string } = {};
    result.error.errors.forEach((err) => {
      if (err.path[0]) fieldErrors[err.path[0] as 'name' | 'email' | 'message'] = err.message;
    });
    setErrors(fieldErrors);
    setStatus('idle');
    return;
  }

  setErrors({});

    try {
      const response = await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 bg-white text-black">
      {/* Lado izquierdo: Información y mapa */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-cyan-500 font-title">
            Visítanos
          </h2>
          <ul className="space-y-3 text-sm font-body">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-cyan-400" />
              <a
                href="https://www.google.com/maps/place/Nido+El+Mundo+de+GRU/@-12.0953743,-77.0624951,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c9c112bbd7fd:0x691aad9376ccb075!8m2!3d-12.0953743!4d-77.0624951!16s%2Fg%2F11rqrm6krr?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Jirón Trujillo 370, Magdalena del Mar
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-400"/>
              <a
                href="http://wa.me/51968275363"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                +51 968 275 363
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMailOutline className="text-cyan-400"/>
              <span className="text-gray-700">nidoelmundodegru@gmail.com</span>
            </li>
          </ul>
          <div className="mt-6 rounded-md overflow-hidden shadow-sm">
            <MapaLeaflet/>
          </div>
        </div>
        
        <div>
          <h2 className="text-cyan-500 font-title font-semibold text-2xl">
            Nuestras redes
          </h2>
            <ul class="space-y-3 font-body">
              <li class="flex items-center gap-2">
              <FaSquareInstagram class="text-cyan-500"/>
              <a
                href="https://www.facebook.com/nidoelmundodegru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
              </li>
              <li class="flex items-center gap-2">
              <FaFacebook class="text-cyan-500"/>
              <a
                href="https://www.facebook.com/nidoelmundodegru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
              </li>
              <li class="flex items-center gap-2">
                <FaTiktok class="text-cyan-500"/>
                <a
                  href="https://www.tiktok.com/@nidoelmundodegru_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  TikTok
                </a>
              </li>
            </ul>
        </div>
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 bg-cyan-400 p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute -top-6 -right-6 opacity-20 w-40 h-40 bg-no-repeat bg-contain"></div>

        <h1 className="text-3xl font-title font-semibold mb-4 text-white underline">
          ¡Ven a conocernos!
        </h1>
        <p className="mb-6 text-base text-white font-body">
          Agenda tu visita guiada y descubre nuestro nido lleno de juegos, colores y aprendizajes
        </p>

        <form className="space-y-5 z-10 relative" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white mb-2" htmlFor="name">
              Nombre del adulto
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="¿Cómo te llamas?"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                        focus:ring-2 focus:ring-cyan-300 transition shadow-sm"
              required
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                        focus:ring-2 focus:ring-cyan-300 transition shadow-sm"
              required
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2" htmlFor="message">
              Mensaje o consulta
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="¿Hay algo que quieras preguntarnos?"
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none 
                        focus:outline-none focus:ring-2 focus:ring-cyan-300 transition shadow-sm"
              required
            ></textarea>
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>
          <button
            type="submit"
            className="bg-white hover:bg-white hover:font-bold w-[180px] text-cyan-500 px-6 
                      py-2 rounded-md transition-all shadow-md duration-300"
          >
            Enviar mensaje
          </button>
          {status === 'success' && (
            <p className="text-green-700 bg-green-100 rounded-md px-4 py-2 mt-2">
              ¡Mensaje enviado correctamente!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-700 bg-red-100 rounded-md px-4 py-2 mt-2">
              Hubo un error al enviar el mensaje. Intenta nuevamente.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}