import React, { useEffect, useRef } from 'react';
import "../style/LogoScroll.css"
import Image1 from "../assets/img/carousel-image-1.png"
import Image2 from "../assets/img/carousel-image-2.png"
import Image3 from "../assets/img/carousel-image-3.png"
import Image4 from "../assets/img/carousel-image-4.png"
import Image5 from "../assets/img/carousel-image-5.png"
import Image6 from "../assets/img/carousel-image-6.png"
import Image7 from "../assets/img/carousel-image-7.png"
import Image8 from "../assets/img/carousel-image-8.png"

// Lista de logotipos
const logos = [
  { id: 1, src: Image1, alt: 'Logo 1' },
  { id: 2, src: Image2, alt: 'Logo 2' },
  { id: 3, src: Image3, alt: 'Logo 3' },
  { id: 4, src: Image4, alt: 'Logo 4' },
  { id: 5, src: Image5, alt: 'Logo 5' },
  { id: 6, src: Image6, alt: 'Logo 6' },
  { id: 7, src: Image7, alt: 'Logo 7' },
  { id: 8, src: Image8, alt: 'Logo 8' },
];

const LogoScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        // Desplazamos el contenedor
        scrollRef.current.scrollBy({
          left: 1, // Cuánto mover a la vez
          behavior: 'smooth', // Desplazamiento suave
        });
      }
    }, 20); // Cambia la velocidad del scroll ajustando el intervalo

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="h-20 flex items-center streaming-list overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-8 animate-marquee"
      >
        {logos.concat(logos).map((logo) => ( // Concatenamos la lista de logos para que se repitan
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            className="h-9 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroll;