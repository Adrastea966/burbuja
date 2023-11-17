import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [navbarColor, setNavbarColor] = useState('#D7BDE2');
  const [clientesCount, setClientesCount] = useState(0);
  const [puntosVentaCount, setPuntosVentaCount] = useState(0);
  const [alumnosCount, setAlumnosCount] = useState(0);
  const puntosSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

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
        <div className="logo"><a href='#'>Burbuja</a></div>
        <div className="nav-items">
          <ul>
            <li>Acerca de
              <span></span>
            </li>
            <li>Productos
              <span></span>
            </li>
            <li>Locales
              <span></span>
            </li>
            <li>Cursos
              <span></span>
            </li>
            <li>Contacto
              <span></span>
            </li>
          </ul>
        </div>
      </nav>

      {/* main section */}
      <section className="main-section">
        <div className="top-section">
          <div className="content">
            <h1 data-aos="fade-up">Naturaleza en Cada Baño, Belleza en Cada Burbuja.</h1>
            <div className="description">
              <h3 data-aos="fade-up" data-aos-delay='100' >Seguí nuestro blog para estar al día con nuestra empresa</h3>
              <button className='btn-1' data-aos="fade-up" data-aos-delay='150' ><span>Ver Blog <AiOutlineArrowRight /> </span></button>
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
          <AiOutlineUsergroupAdd style={{ fontSize: '3em' }} />
          <div className='clientes-texto'>
            <h4>+{clientesCount} clientes satisfechos</h4>
            <p>Nuestros clientes son importantes para nosotros!</p>
          </div>
        </div>
        <div className="puntos-de-venta">
          <AiOutlineEnvironment style={{ fontSize: '3em' }} />
          <div className='puntos-texto'>
            <h4>+{puntosVentaCount} puntos de venta</h4>
            <p>Contamos con 20 puntos de venta en toda Argentina</p>
          </div>
        </div>
        <div className="alumnos">
          <AiOutlineSchedule style={{ fontSize: '3em' }} />
          <div className='alumnos-texto'>
            <h4>+{alumnosCount} alumnos</h4>
            <p>Nuestros cursos cuentan con más de 30 alumnos!</p>
          </div>
        </div>
      </section>

      {/* Acerca de */}
      <section className="acerca-de">
        <div className="contenedor-foto-principal">
          <img data-aos="fade-up" src="../foto-principal.jpg" className='foto-principal' alt="Fundadora de Burbuja" />
          <img data-aos="fade-up" data-aos-delay='200' src="../dialogo.png" className='dialogo-deco' alt="Dialogo decorado con un emoji" />

          <div data-aos="fade-up" data-aos-delay='100' className="rectangulo-con-texto">
            <p>Conóceme a mí y mi equipo de trabajo. Somos Burbuja! ✨</p>
          </div>

        </div>
        <div className="descripcion-fotos">
          <div className='descripcion-empresa'>
            <h2 data-aos="fade-up" data-aos-delay='300'>Acerca de la empresa y del equipo</h2>
            <p data-aos="fade-up" data-aos-delay='400' >Bienvenidos a Burbuja, tu destino para productos de
              cuidado personal naturales y hechos a mano. Nos
              especializamos en la creación de jabones caseros y
              naturales, elaborados con ingredientes de alta calidad
              y amorosos procesos artesanales.</p>
          </div>
          <div className='foto-equipo-empresa'>
            <img data-aos="fade-up" data-aos-delay='300' src="../equipo1.png" className='foto-equipo-1' alt="Integrante 1 del equipo" />
            <img data-aos="fade-up" data-aos-delay='400' src="../equipo2.png" className='foto-equipo-2' alt="Integrante 2 del equipo" />
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
            <img data-aos="flip-left" src="../producto1.jpg" alt="Imagen del producto 1" />
            <button className='btn-2'>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img data-aos="flip-left" data-aos-delay='100' src="../producto2.jpg" alt="Imagen del producto 2" />
            <button className='btn-2'>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img data-aos="flip-left" data-aos-delay='200' src="../producto3.jpg" alt="Imagen del producto 3" />
            <button className='btn-2'>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img data-aos="flip-left" data-aos-delay='300' src="../producto4.jpg" alt="Imagen del producto 4" />
            <button className='btn-2'>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img data-aos="flip-left" data-aos-delay='400' src="../producto5.png" alt="Imagen del producto 5" />
            <button className='btn-2'>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img data-aos="flip-left" data-aos-delay='500' src="../producto6.jpg" alt="Imagen del producto 6" />
            <button className='btn-2'>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img data-aos="flip-left" data-aos-delay='600' src="../producto7.png" alt="Imagen del producto 7" />
            <button className='btn-2'>Ver producto</button>
          </div>
          <div className='tarjeta'>
            <img data-aos="flip-left" data-aos-delay='700' src="../producto8.jpg" alt="Imagen del producto 8" />
            <button className='btn-2'>Ver producto</button>
          </div>
        </div>
        <div className='ver-productos-tienda'>
          <p>
            Ver más productos en
            nuestra tienda online
          </p>
          <button className='btn-1'><span>Ver más <AiOutlineArrowRight /></span></button>
        </div>
      </section>

      {/* Puntos de venta */}
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

      {/* Reseñas */}
      <section className="container-reseñas">
        <h2 data-aos="fade-up">¿Qué dicen nuestros clientes de nuestra empresa?</h2>
        <div className='reseñas'>
          <div className='reseña'>
            <h3>Marta G.</h3>
            <p>Burbuja hizo maravillas por mi piel.
              Sus jabones naturales son una delicia
              para los sentidos y mi piel nunca se
              ha sentido tan suave y fresca.
              ¡Gracias por crear productos tan
              increíbles!"</p>
          </div>
          <div className='reseña'>
            <h3>Javier D.</h3>
            <p>Los productos de Burbuja son
              simplemente asombrosos. La
              calidad es excepcional y mi piel está
              agradecida.</p>
          </div>
          <div className='reseña'>
            <h3>Ana S.</h3>
            <p>No puedo dejar de elogiar los
              productos de BioBurbuja. La textura,
              el aroma y la suavidad que
              proporcionan son simplemente
              excepcionales.</p>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="container-cursos">
        <h2>Nuestros cursos</h2>
        <div className='cursos'>
          <div data-aos="fade-up" className='descripcion-curso'>
            <div className='texto-cursos'>
              <h3>Contamos con cursos gratuitos y pagos</h3>
              <p>En Burbuja, creemos en compartir nuestro conocimiento sobre el cuidado natural y
                consciente. Nuestros cursos están diseñados para ayudarte a descubrir los secretos de
                los productos naturales y aprender técnicas prácticas para el cuidado de la piel. Desde
                la fabricación de jabones caseros hasta la creación de tus propios productos de belleza,
                nuestros expertos te guiarán en un viaje educativo y creativo. Únete a nosotros y descubre
                el mundo del cuidado personal natural de la mano de los profesionales de Burbuja.</p>
            </div>
            <button className='btn-1'><span>Ver todos <AiOutlineArrowRight /></span></button>
          </div>
          <div className='tarjetas-cursos'>
            <div data-aos="fade-up" data-aos-delay='100' className='tarjeta-curso curso1'>
              <img src="../producto1.jpg" alt="Foto curso1" />
              <div className='tarjeta-curso-texto1'> <div className='btn-ver-curso-texto'>
                <p>Creá jabones naturales caseros. Aprendé con nuestra mejor
                  profe a fabricar tus propios jabones desde cero!</p> <button className='btn-1'><span>Ver curso <AiOutlineArrowRight /></span></button> </div></div>
            </div>
            <div data-aos="fade-up" data-aos-delay='200' className='tarjeta-curso curso2'>
              <img src="../producto2.jpg" alt="Foto curso2" />
              <div className='tarjeta-curso-texto2'> <div className='btn-ver-curso-texto2'> <p>Aprendé la importancia de
                usar productos naturales.</p>  <button className='btn-1'><span>Ver curso <AiOutlineArrowRight /></span></button> </div></div>
            </div>
            <div data-aos="fade-up" data-aos-delay='300' className='tarjeta-curso curso3'>
              <img src="../curso.jpg" alt="Foto curso3" />
              <div className='tarjeta-curso-texto3'> <div className='btn-ver-curso-texto'><p>¿Querés emprender? Te
                ayudamos con los primeros
                pasos.</p>  <button className='btn-1'><span>Ver curso <AiOutlineArrowRight /></span></button> </div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="blog">
        <div data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" className='container-blog'>
          <h2>Últimas publicaciones de nuestro blog</h2>
          <div className='container-blog-2'>
            <div className='blog1'>
              <img src="../foto-blog-1.png" alt="Foto blog 1" />
              <div>
                <h4>Fecha 2/11/23</h4>
                <p>¿Sabes la importancia de utilizar
                  productos naturales?, te contamos porque elegimos usarlos.</p>
                <button className='btn-1'><span>Leer artículo <AiOutlineArrowRight /></span></button>
              </div>
            </div>
            <div className='blog2'>
              <img src="../foto-blog-3.png" alt="Foto blog 2" />
              <div>
                <h4>Fecha 2/11/23</h4>
                <p>¿Sabes la importancia de utilizar
                  productos naturales?, te contamos porque elegimos usarlos.</p>
                <button className='btn-1'><span>Leer artículo <AiOutlineArrowRight /></span></button>
              </div>
            </div>
            <div className='blog3'>
              <img src="../foto-blog-2.png" alt="Foto blog 3" />
              <div>
                <h4>Fecha 2/11/23</h4>
                <p>¿Sabes la importancia de utilizar
                  productos naturales?, te contamos porque elegimos usarlos.</p>
                <button className='btn-1'><span>Leer artículo <AiOutlineArrowRight /></span></button>
              </div>
            </div>
            <div className='blog4'>
              <img src="../foto-blog-4.png" alt="Foto blog 4" />
              <div>
                <h4>Fecha 2/11/23</h4>
                <p>¿Sabes la importancia de utilizar
                  productos naturales?, te contamos porque elegimos usarlos.</p>
                <button className='btn-1'><span>Leer artículo <AiOutlineArrowRight /></span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <div className='datos-footer'>
          <div className='des-footer'>
            <h3>Burbuja</h3>
            <p>Burbuja, tu destino para productos de
              cuidado personal naturales y
              hechos a mano.</p>
          </div>
          <div className='nav-footer'>
            <h3>Navegación</h3>
            <ul>
              <li>Acerca de </li>
              <li>Productos </li>
              <li>Locales </li>
              <li>Cursos </li>
              <li>Contacto </li>
            </ul>
          </div>
          <div className='redes-footer'>
            <h3>Redes</h3>
            <p>Encontranos en nuestras
              redes sociales</p>
            <div className='redes'>
              <div><AiOutlineInstagram /></div>
              <div><AiOutlineWhatsApp /></div>
            </div>
          </div>
        </div>
        <div className='copy'>copyright Burbuja 2023 | Sitio desarrollado por Liu</div>
      </footer>

    </div>
  );
}

export default App;