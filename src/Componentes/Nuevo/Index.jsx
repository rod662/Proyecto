import './Nuevo.css';

const NuevoVideo = () => {
    

    return (
        <div>
            <div className='contenedor__texto'>
                <h1>NUEVO VIDEO</h1>
                <h2>Completa el formulario para crear un nuevo video</h2>
            </div>
            <form>
                <label for='titulo'>Titulo  </label>
                <input id='titulo' name='titulo' type='text' placeholder='Ingresa el titulo del video'></input>

                <label for='categoria'>Categoria  </label>
                <select id='categoria' name='categoria' >
                    <option className='option'>Front end</option>
                    <option className='option'>Back end</option>
                    <option className='option'>Inovacion y gestion</option>
                </select>

                <label for='imagen'>Imagen  </label>
                <input id='imagen' name='imagen' type='text' placeholder='Ingresa la URL de la miniatura'></input>

                <label for='video'>Video  </label>
                <input id='video' name='video' type='text' placeholder='Ingresa el enlace del video'></input>

                <label for='descripcion'>Descripcion  </label>
                <textarea id='descripcion' name='descripcion' type='text'></textarea>
                
                <div className='botones'>
                    <button type='submit' style={{color: 'white', border: 'solid 1px blue'}}>ENVIAR</button>
                    <button type='reset'style={{color: 'white', border: 'solid 1px blue'}}>LIMPIAR</button>
                </div>

            </form>
        </div>
    )
}

export default NuevoVideo;