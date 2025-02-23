import React from 'react'; 
import Header from '../componentes/header';
import Footer from '../componentes/footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Sección de encabezado */}
      <section className="w-full bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-[#00D4FF] animate-pulse">
            ¡Estamos aquí para ayudarte!
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            ¿Tienes preguntas o quieres agendar una cita? Escríbenos y te responderemos lo antes posible.
          </p>
          <p className="text-lg text-gray-300 mt-2">
            Puedes contactarnos a través del formulario, WhatsApp o visitarnos en nuestra oficina.
          </p>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-12">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700">Nombre y Apellidos *</label>
            <input type="text" className="w-full border rounded-md p-3 mt-1" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Teléfono *</label>
              <input type="tel" className="w-full border rounded-md p-3 mt-1" required />
            </div>
            <div>
              <label className="block text-gray-700">Email *</label>
              <input type="email" className="w-full border rounded-md p-3 mt-1" required />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Mensaje *</label>
            <textarea className="w-full border rounded-md p-3 mt-1 h-32" required></textarea>
          </div>
          <button className="w-full bg-[#00D4FF] hover:bg-[#008CBA] text-white p-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
            Enviar Mensaje
          </button>
        </form>
      </section>

      {/* Información de contacto */}
      <section className="max-w-3xl mx-auto text-gray-700 text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0F2027]">Nuestra Información</h2>
        <p className="mt-2">📍 Villa El Salvador, Universidad Tecnológica del Perú (UTP)</p>
        <p className="mt-1">📞 <a href="tel:+51986511562" className="text-[#00D4FF] font-medium hover:underline">51 986 511 562</a></p>
        <p className="mt-1">📧 <a href="mailto:baby@life.com" className="text-[#00D4FF] font-medium hover:underline">baby@life.com</a></p>
      </section>

      {/* Mapa de Google Maps */}
      <div className="max-w-4xl mx-auto my-12">
        <iframe
          className="w-full h-72 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8422347196783!2d-76.9754947!3d-12.1938815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9a26836ac01%3A0x4fd233c0d43ca479!2sUniversidad%20Tecnol%C3%B3gica%20del%20Per%C3%BA%20UTP!5e0!3m2!1ses-419!2spe!4v1708311223456!5m2!1ses-419!2spe"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Botón de WhatsApp */}
      <div className="flex justify-center my-8">
        <a
          href="https://wa.me/51986511562"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Contactar por WhatsApp
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default App;
