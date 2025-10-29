import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ContactFormSchema } from '../schemas/schemas';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok, FaFacebook } from "react-icons/fa";
import GoogleMapsComponent from '../utils/google-maps';

const contactoSchema = ContactFormSchema;

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
      const response = await fetch('/api/send-email', {
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
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="w-full px-4 sm:px-6">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6">
            Contáctanos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Estamos aquí para resolver todas tus dudas y acompañarte en el proceso educativo de tu pequeño
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lado izquierdo: Información y mapa */}
          <div className="space-y-8">
            {/* Información de contacto */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-cyan-500 inline-block">
                Información de contacto
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaLocationDot className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                    <a
                      href="https://www.google.com/maps/place/Nido+El+Mundo+de+GRU/@-12.0953743,-77.0624951,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c9c112bbd7fd:0x691aad9376ccb075!8m2!3d-12.0953743!4d-77.0624951!16s%2Fg%2F11rqrm6krr?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-cyan-500 transition-colors font-medium"
                    >
                      Jirón Trujillo 370, Magdalena del Mar
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-white text-lg"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <a
                      href="http://wa.me/51968275363"
                      className="text-gray-600 hover:text-amber-500 transition-colors font-medium"
                    >
                      +51 968 275 363
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdOutlineMailOutline className="text-white text-lg"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <span className="text-gray-600 font-medium">nidoelmundodegru@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-cyan-500 inline-block">
                Encuéntranos
              </h2>
              <div className="rounded-xl overflow-hidden shadow-md">
                <GoogleMapsComponent/>
              </div>
            </div>
            
            {/* Redes sociales */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-amber-400 inline-block">
                Nuestras redes sociales
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.instagram.com/nidoelmundodegru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 hover:text-cyan-500 transition-colors group"
                  >
                    <FaSquareInstagram className="text-2xl group-hover:scale-110 transition-transform"/>
                    <span className="font-medium">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/nidoelmundodegru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 hover:text-cyan-500 transition-colors group"
                  >
                    <FaFacebook className="text-2xl group-hover:scale-110 transition-transform"/>
                    <span className="font-medium">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@nidoelmundodegru_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 hover:text-cyan-500 transition-colors group"
                  >
                    <FaTiktok className="text-2xl group-hover:scale-110 transition-transform"/>
                    <span className="font-medium">TikTok</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
              {/* Elemento decorativo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-100 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  ¡Ven a conocernos!
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-amber-400 mb-4 rounded-full"></div>
                <p className="mb-8 text-gray-600 font-medium leading-relaxed">
                  Agenda tu visita guiada y descubre nuestro nido lleno de juegos, colores y aprendizajes
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                      Nombre del adulto
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="¿Cómo te llamas?"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                                focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all 
                                shadow-sm hover:shadow-md font-medium"
                      required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1 font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nombre@email.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                                focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all 
                                shadow-sm hover:shadow-md font-medium"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                      Mensaje o consulta
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="¿Hay algo que quieras preguntarnos?"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg h-32 resize-none 
                                focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent 
                                transition-all shadow-sm hover:shadow-md font-medium"
                      required
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1 font-medium">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-amber-400 hover:from-cyan-600 
                              hover:to-amber-500 text-white font-bold py-4 px-6 rounded-lg transition-all 
                              duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Enviar mensaje
                  </button>

                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 font-medium">
                      ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 font-medium">
                      Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}