import styles from './WeatherMainInfo.module.css';

export const WeatherMainInfo = ({weather}) => {

    return (
        <div className={styles.mainInfo}>
            <div className={styles.city}>
                {weather?.location.name}</div>
            <div className={styles.country}>
                {weather?.location.country}</div>
            <div className={styles.row}>
                <div>
                    <img 
                        src={`http:${weather?.current.condition.icon}`}
                        alt={`http:${weather?.current.condition.text}`} 
                        width='128'/>
                </div>
                <div className={styles.weatherCondition}>
                    <div className={styles.condition}>
                        {weather?.current.condition.text}</div>
                    <div className={styles.current}>
                        {weather?.current.temp_c}°</div>
                </div>
            </div>
            <div>
            <iframe
                title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14240.971499135763!2d${weather?.location.lon}!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1708378308908!5m2!1ses-419!2sar`}
                width="100%" 
                height="450" 
                style={{border:0}} 
                
                loading="lazy" >
            </iframe>
            </div>
        </div>
    )
}