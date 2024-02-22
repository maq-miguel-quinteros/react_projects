import { useState, useEffect } from "react";

// para trabajar con styles de como module creamos una hoja de estilos con extensión .module.css. Después la importamos como si fuera una variable y accedemos a ella con notación de objetos (objeto.propiedad)
import styles from './Weather.module.css';

import { WeatherForm } from "../molecules/WeatherForm";
import { WeatherMainInfo } from "../molecules/WeatherMainInfo";
import Loading from '../molecules/Loading';

export const Weather = () => {

    const [weather, setWeather] = useState(null);
    
    useEffect(()=> {
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])

    function loadInfo(city = 'london') {
        fetch(`${import.meta.env.VITE_URL}&key=${import.meta.env.VITE_KEY}&q=${city}`)
            .then((response) => response.json())
            .then((data) => setWeather(data))
    }

    const handleChangeCity = (city = 'london') => {
        setWeather(null);
        loadInfo(city);
    }

    return (
        // traemos los estilos de la clase weatherContainer mediante el objeto styles que importamos
        <div className={styles.weatherContainer}>
            <WeatherForm 
                onChangeCity={handleChangeCity}/>
            {weather? <WeatherMainInfo 
            weather={weather}/> : <Loading />}
            
                
        </div>
    )
}