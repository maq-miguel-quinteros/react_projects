import { useState } from "react";

import styles from './WeatherForm.module.css';

import {Input} from '../atoms/Input';

export const WeatherForm = ({onChangeCity}) => {

    const [city, setCity] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        if (value !== ''){
            setCity(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onChangeCity(city);
    }

    return (
        <>
            <form 
            className={styles.container}
            onSubmit={handleSubmit}>
                <Input
                    className={styles.input}
                    value={city} 
                    type={'text'}
                    onChange={handleChange} />
            </form>
        </>
    )
}