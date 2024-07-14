import './Portada.css';
import imagen from '../../assets/img/1.jpg';

const Portada = () => {
  return (
    <div className="fondo" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imagen})` }}>
      <div className='contenedor__contenido'>
        <div className='contenido_portada'>
          <button className='boton__portada' type='button'>FRONT END</button>
          <div className='texto__portada'>
            <h2>Alura Flix</h2>
            <p>Plataforma donde podras ver tus videos favoritos y compartirlos con otros.</p>
          </div>
        </div>
        <div>
          <iframe
              className="video__portada"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0udk1vXmwkc?si=qjSe-ihjgt_CiNXb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>

            </iframe>

        </div>
      </div>
    </div>
  );
};

export default Portada;
