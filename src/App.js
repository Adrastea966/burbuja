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
      threshold: 1.0, // Detect when the entire "puntos" section is visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the intervals only when the entire section is in view
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

    </div>
  );
}

export default App;