import React, { useEffect, useRef } from 'react';
import Image1 from "../assets/img/disc-1.jpg"
import Image2 from "../assets/img/disc-2.jpg"
import Image3 from "../assets/img/disc-3.jpg"
import Image4 from "../assets/img/disc-4.jpg"
import Image5 from "../assets/img/disc-5.jpg"
import Image6 from "../assets/img/disc-6.jpg"

// Lista de logotipos
const albums = [
  { id: 1, src: Image1, alt: 'Album 1' },
  { id: 2, src: Image2, alt: 'Album 2' },
  { id: 3, src: Image3, alt: 'Album 3' },
  { id: 4, src: Image4, alt: 'Album 4' },
  { id: 5, src: Image5, alt: 'Album 5' },
  { id: 6, src: Image6, alt: 'Album 6' },
];

const AlbumScroll = () => {
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
    <div className="h-[318px] flex w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex animate-marquee"
      >
        {albums.concat(albums).map((album) => ( // Concatenamos la lista de albums para que se repitan
          <img
            key={album.id}
            src={album.src}
            alt={album.alt}
            className="h-[318px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumScroll;