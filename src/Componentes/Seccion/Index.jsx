import './Seccion.css';

const Seccion = (props) => {
    return (
        <section>
            <div className='contenedor__texto'>
                <h1 style={{backgroundColor: props.color}}>{props.seccion}</h1>
            </div>

            <div className='videos__contenedor'>
                {props.videoUrls.map((url, index) => (
                    <iframe style={{border: props.border}}
                        key={index}
                        width="460"
                        height="215"
                        src={url}
                        title={`YouTube video player ${index}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        
                    ></iframe>
                    
                ))}
               
            </div>
        </section>
    )
}

export default Seccion;
