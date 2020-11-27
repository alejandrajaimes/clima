import React from 'react';
import '../estilos/mapas.css'
import Header from '../components/Header';
import Colombia from "../img/colombia.jpg";
import Estados from "../img/estados.jpg";
import Mapass from "../img/mapass.jpg";
import Mapasmundo from "../img/mapasmundo.jpg";


const Mapas = () => {
    return ( 
        <>
        <Header 
          titulo='Mapas Mundiales'
        />
        <div class="container_mapas">
        <div class="row justify-content-around">
          <div class="col">
          <img className="imgmapas" src={Colombia} alt="" />
          <p>Mapa Meteorologico Colombia</p>
          </div>
          <div class="col">
          <img className="imgmapas" src={Estados} alt="" />
          <p>Mapa Meteorologico USA</p>
          </div>
          
        </div>
        <div class="row justify-content-around">
          <div class="col">
          <img className="imgmapas" src={Mapass} alt="" />
          <p>Mapa Meteorologico Mexico</p>
          </div>
          <div class="col">
          <img className="imgmapas" src={Mapasmundo} alt="" />
          <p>Mapa Meteorologico USA</p>
          </div>
          
        </div>
      </div>
      </>
     );
}



 
export default Mapas;