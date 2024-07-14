import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className>
            <div className='texto__header'>
                <h1>ALURAFLIX</h1>
            </div>
            <div className='botones__header'>
                <Link to="/"><button type='button'>HOME</button></Link>
                <Link to="/nuevo-video"><button type='button'>NUEVO VIDEO</button></Link>
            </div>

        </header>
    )
}

export default Header;