// components/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Redes sociales con URLs y rutas de imágenes
  const redesSociales = [
    { 
      name: 'facebook', 
      url: 'https://facebook.com/tu-pagina',
      icon: '/incons/fb.svg' 
    },
    { 
      name: 'instagram', 
      url: 'https://instagram.com/tu-cuenta',
      icon: '/incons/ig.svg'  
    },
    { 
      name: 'twitter', 
      url: 'https://twitter.com/tu-usuario',
      icon: '/incons/x.svg'  
    },
    { 
      name: 'youtube', 
      url: 'https://youtube.com/tu-canal',
      icon: '/incons/yt.svg'  
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-[#824058] to-[#a46372] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#FF6FB0]">BabyCare</h3>
            <p className="text-sm opacity-90">
              Tu compañero esencial en la aventura de la paternidad. Ofrecemos recursos prácticos y cursos accesibles para padres primerizos.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FF6FB0]">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Modulos', 'Consejos Rapidos', 'Contacto', 'Libro de Reclamaciones'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-[#FF6FB0] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FF6FB0]">Contacto</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Image
                  src="/incons/email.svg"  // Ruta ajustada
                  alt="Email"
                  width={20}
                  height={20}
                />
                info@babycare.com
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/incons/telefono.svg"  // Ruta ajustada
                  alt="Teléfono"
                  width={20}
                  height={20}
                />
                +51 987 654 321 
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/incons/location.svg"  // Ruta ajustada
                  alt="Ubicación"
                  width={20}
                  height={20}
                />
                Distrito Miraflores, Lima-Perú
              </p>
            </div>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FF6FB0]">Síguenos</h4>
            <div className="flex space-x-4">
              {redesSociales.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#FF6FB0] hover:bg-[#e55a9d] transition-colors"
                >
                  <Image
                    src={social.icon}  // Usamos la ruta específica del objeto
                    alt={`Icono ${social.name}`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-[#FF6FB0]/30 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm opacity-75">
          <p>
            © {new Date().getFullYear()} BabyCare. Todos los derechos reservados. | 
            <Link href="#" className="hover:text-[#FF6FB0] ml-2">Política de Privacidad</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;