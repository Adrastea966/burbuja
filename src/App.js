import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [navbarColor, setNavbarColor] = useState('#D7BDE2');
  const [clientesCount, setClientesCount] = useState(0);
  const [puntosVentaCount, setPuntosVentaCount] = useState(0);
  const [alumnosCount, setAlumnosCount] = useState(0);

  const puntosSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setNavbarColor('white');
      } else {
        setNavbarColor('#D7BDE2');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const clientesInterval = setInterval(() => {
            setClientesCount(prevCount => (prevCount < 50 ? prevCount + 1 : prevCount));
          }, 50);

          const puntosVentaInterval = setInterval(() => {
            setPuntosVentaCount(prevCount => (prevCount < 20 ? prevCount + 1 : prevCount));
          }, 75);

          const alumnosInterval = setInterval(() => {
            setAlumnosCount(prevCount => (prevCount < 30 ? prevCount + 1 : prevCount));
          }, 100);

          return () => {
            clearInterval(clientesInterval);
            clearInterval(puntosVentaInterval);
            clearInterval(alumnosInterval);
          };
        }
      });
    }, options);

    if (puntosSectionRef.current) {
      observer.observe(puntosSectionRef.current);
    }

    return () => {
      if (puntosSectionRef.current) {
        observer.unobserve(puntosSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="App">

      {/* navbar */}
      <nav className={`navbar ${navbarColor === '#D7BDE2' ? '' : 'white-bg'}`}>
        <div className="logo">Burbuja</div>
        <div className="nav-items">
          <ul>
            <li>Acerca de</li>
            <li>Productos</li>
            <li>Locales</li>
            <li>Cursos</li>
            <li>Contacto</li>
          </ul>
        </div>
      </nav>

      {/* main section */}
      <section className="main-section">
        <div className="top-section">
          <div className="content">
            <h1>Naturaleza en Cada Baño, Belleza en Cada Burbuja.</h1>
            <div className="description">
              <h3>Seguí nuestro blog para estar al día con nuestra empresa</h3>
              <button>Ver Blog</button>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          {/* imagen de fondo */}
        </div>
      </section>

      {/* Seccion puntos */}
      <section className="puntos" ref={puntosSectionRef}>
        <div className="clientes">
          <button></button>
          <div className='clientes-texto'>
            <h4>+{clientesCount} clientes satisfechos</h4>
            <p>Nuestros clientes son importantes para nosotros!</p>
          </div>
        </div>
        <div className="puntos-de-venta">
          <button></button>
          <div className='puntos-texto'>
            <h4>+{puntosVentaCount} puntos de venta</h4>
            <p>Contamos con 20 puntos de venta en toda Argentina</p>
          </div>
        </div>
        <div className="alumnos">
          <button></button>
          <div className='alumnos-texto'>
            <h4>+{alumnosCount} alumnos</h4>
            <p>Nuestros cursos cuentan con más de 30 alumnos!</p>
          </div>
        </div>
      </section>

      {/* Acerca de */}
      <section className="acerca-de">
        <div className="contenedor-foto-principal">
          <img src="../foto-principal.jpg" className='foto-principal' alt="Fundadora de Burbuja" />
          <img src="../dialogo.png" className='dialogo-deco' alt="Dialogo decorado con un emoji" />

          <div className="rectangulo-con-texto">
            <p>Conóceme a mí y mi equipo de trabajo. Somos Burbuja! ✨</p>
          </div>

        </div>
        <div className="descripcion-fotos">
          <div className='descripcion-empresa'>
            <h2>Acerca de la empresa y del equipo</h2>
            <p>Bienvenidos a Burbuja, tu destino para productos de
              cuidado personal naturales y hechos a mano. Nos
              especializamos en la creación de jabones caseros y
              naturales, elaborados con ingredientes de alta calidad
              y amorosos procesos artesanales.</p>
          </div>
          <div className='foto-equipo-empresa'>
            <img src="../equipo1.png" className='foto-equipo-1' alt="Integrante 1 del equipo" />
            <img src="../equipo2.png" className='foto-equipo-2' alt="Integrante 2 del equipo" />
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="productos">
        <div className='titulo-productos'>
          <h2>Nuestros productos</h2>
        </div>
        <div className='container-productos'>
          <div className='tarjeta'>
            <img src="../producto1.jpg" alt="Imagen del producto 1" />
            <button>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img src="../producto2.jpg" alt="Imagen del producto 2" />
            <button>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img src="../producto3.jpg" alt="Imagen del producto 3" />
            <button>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img src="../producto4.jpg" alt="Imagen del producto 4" />
            <button>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img src="../producto5.png" alt="Imagen del producto 5" />
            <button>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img src="../producto6.jpg" alt="Imagen del producto 6" />
            <button>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img src="../producto7.png" alt="Imagen del producto 7" />
            <button>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img src="../producto8.jpg" alt="Imagen del producto 8" />
            <button>Ver producto</button>
          </div>
        </div>
        <div className='ver-productos-tienda'>
          <p>
            Ver más productos en
            nuestra tienda online
          </p>
          <button>Ver más</button>
        </div>
      </section>

      <section className="puntos-venta">
        <div className='titulo-puntos-de-venta'>
          <h2>Puntos de venta</h2>
        </div>
        <div className='container-mapa-direcciones'>
          <div className='mapa-puntos-de-venta'>
            <img src="../mapa.jpg" alt="Foto del mapa" />
          </div>
          <div className='direcciones'>
            <h3>NOMBRE DE TIENDA | Nro de calle</h3>
            <h3>NOMBRE DE TIENDA | Nro de calle</h3>
            <h3>NOMBRE DE TIENDA | Nro de calle</h3>
            <h3>NOMBRE DE TIENDA | Nro de calle</h3>
            <h3>NOMBRE DE TIENDA | Nro de calle</h3>
          </div>
        </div>

      </section>


    </div>
  );
}

export default App;