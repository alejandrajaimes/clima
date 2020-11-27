import React from 'react';
import '../estilos/home.css'
import { Link } from 'react-router-dom';


const Home = () => {
    return ( 
        <div className="contenido_home">
            <div className="contenidosHome">
                
            <h1 className="title-home">
                MY WEATHER
            </h1>
            <h3>El tiempo en tu web</h3>

             <Link to="/Climas" >
             <div className="input-field col s12">
                <input  
                    type="submit"
                    value="Empecemos"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        
        </Link>
            </div>


        </div>
       
     );
}

 
export default Home;