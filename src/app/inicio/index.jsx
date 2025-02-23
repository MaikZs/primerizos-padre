// Testimonial.jsx
import React from "react";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: "/inicio/nina.png",
      name: "Andrea",
      role: "Mamá de Valentina",
      testimonial:
        "Antes de ser mamá, tenía muchas dudas sobre la lactancia. Gracias a esta plataforma, aprendí técnicas clave y ahora me siento mucho más segura al alimentar a mi bebé",
    },
    {
      id: 2,
      image: "/inicio/nina.png",
      name: "Carlos",
      role: "Papá de Mateo",
      testimonial:
        "Siempre pensé que los cuidados del bebé eran solo tarea de la mamá, pero este curso me enseñó lo importante que es mi rol. Ahora me involucro más en el baño, el sueño y los momentos de juego con mi hijo",
    },
    {
      id: 3,
      image: "/inicio/nina.png",
      name: "Elena",
      role: "Mamá de Emma",
      testimonial:
        "El módulo de sueño fue una salvación. No sabía cómo ayudar a mi bebé a dormir mejor, pero después de seguir las recomendaciones, logramos establecer una rutina efectiva. ¡Ahora descansamos todos!",
    },
    {
      id: 4,
      image: "/inicio/nina.png",
      name: "Javier",
      role: "Papá de Nicolás",
      testimonial:
        "Me preocupaba mucho el vínculo con mi bebé porque trabajo muchas horas. Aprendí que pequeños momentos de calidad hacen la diferencia. Ahora disfruto más el tiempo con mi hijo sin sentirme culpable.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#424242] text-center mb-16">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#424242]">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;