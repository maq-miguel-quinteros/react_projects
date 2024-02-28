// como convención se usa el nombre store para nombrar a los archivos que sirvan para el manejar el estado de la aplicación de forma global

import { createContext, useContext, useEffect, useState } from "react";

/** definición del contexto */
// definimos como va a estar integrado el estado que vamos a manejar, es decir, cual es la estructura de ese estado. Al estado lo llamamos AppContext. A la función createContext le podemos pasar valores simples como un string, pero para el ejemplo le vamos a pasar un objeto
const AppContext = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (id) => {
        return item;
    },
    updateItem: (item) => {}
});

/** definición de la implementación de los métodos */
export const Store = ({children}) => {

    const [items, setItems] = useState([]);

    const createItem = (item) => {
        const temp = [...items];
        temp.push(item);
        setItems(temp);
    }

    const getItem = (id) => {
        const item = items.find((item) => item.id === id);
        return item;
    }

    const updateItem = (item) => {
        const index = items.findIndex((i) => i.id === item.id);
        const temp = [...items];
        temp[index] = {...item};      
    }

    return (
        <>
            {/** llamamos al componente que tiene la estructura de nuestro estado y mediante Provider indicamos que todo lo que esté dentro de este componente va a poder utilizar dicha estructura  */}

            {/** en el elemento con provider tenemos un prop llamado value donde indicamos cuales son los atributos y métodos (funciones) que van a estar disponibles */}
            <AppContext.Provider value={{
                items,
                createItem,
                getItem,
                updateItem
            }}>
                {/** todo lo que pongamos dentro del componente Store, es decir, los children, quedan dentro del componente AppContext con Provider, es decir, que tienen acceso a ese contexto */}
                {children}
            </AppContext.Provider>
        </>
    );

}

/** exportamos el hook */
/** declaramos la función useAppContext, que es la que vamos a utilizar en otros componentes como un hook */
export const useAppContext = () => {
    /** mediante useContext indicamos que AppContext se va a usar como contexto */
    return useContext(AppContext);
}