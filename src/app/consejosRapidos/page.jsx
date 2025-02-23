import React from 'react';
import Footer from '../componentes/footer';
import Image from 'next/image';
import Header from '../componentes/header';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
                  {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 py-12 md:py-20 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#00D4FF]">
              Descubre <span className="text-[#FFD700]">Consejos</span> Rápidos<br />
              para Padres <span className="text-[#FFD700]">Primerizos</span>
            </h1>

            <p className="text-lg md:text-xl opacity-90 leading-relaxed text-gray-300">
              Accede a información clave en segundos para mejorar la crianza de tu bebé con tecnología y ciencia.
            </p>

            <button className="bg-[#00D4FF] hover:bg-[#008CBA] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explorar Consejos
            </button>
          </div>

          {/* Imagen Mejorada */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/inicio/limpio.jpg"
                alt="Familia con bebé"
                width={600}
                height={350} 
                className="object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,212,255,0.3)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vínculo Emocional */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#424242] text-center mb-12">
            Vínculo Emocional con tu Bebé
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg italic text-center">
            Crea una conexión única desde el primer día con pequeños gestos diarios.
          </p>
        </div>
      </section>

      {/* Sección Innovadora - Aprendizaje Interactivo */}
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#424242] text-center mb-12">
            Microaprendizaje en Acción
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Videos Cortos", "Infografías Rápidas", "Desafíos Diarios"].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#D16BA5]">{item}</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Aprende en pocos minutos con contenido práctico y directo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Consejos Destacados - MODIFICADO PARA USAR IMÁGENES REDONDAS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#424242] mb-10">
            Consejos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              image: '/inicio/Lactancia.jpg',
              title: 'Alimentación',
              text: 'Consejos sobre lactancia, biberón y alimentación segura.'
            },
            {
              image: '/inicio/sueno.jpg',
              title: 'Sueño',
              text: 'Cómo establecer rutinas de sueño efectivas para tu bebé.'
            },
            {
              image: '/inicio/cuidado.png',
              title: 'Salud y Cuidados',
              text: 'Cuidados básicos y señales de alerta en la salud del bebé.'
            },
            {
              image: '/inicio/desarrollo.jpg',
              title: 'Desarrollo',
              text: 'Hitos del crecimiento y estimulación temprana.'
            },
            {
              image: '/inicio/1.png',
              title: 'Seguridad',
              text: 'Consejos para mantener un ambiente seguro en casa.'
            },
            {
              image: '/inicio/emocionall.jpg',
              title: 'Vínculo Emocional',
              text: 'Estrategias para fortalecer el apego con tu bebé.'
            }].map((consejo, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-36 h-36 mb-4 overflow-hidden rounded-full bg-[#FFE6EE]">
                  <Image
                    src={consejo.image}
                    alt={consejo.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#424242]">
                  {consejo.title}
                </h4>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  {consejo.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Sección Adicional - Inspiración */}
            <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#424242] mb-6">
            Más que consejos, una comunidad
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Únete a nuestra comunidad de padres primerizos y comparte experiencias,
            consejos y momentos especiales con otros que están en el mismo viaje.
          </p>
          <button className="mt-6 bg-[#FF85B3] hover:bg-[#D96B9D] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Únete Ahora
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
