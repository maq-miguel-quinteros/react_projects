// como convención se usa el nombre store para nombrar a los archivos que sirvan para el manejar el estado de la aplicación de forma global

import { createContext, useContext, useEffect, useState } from "react";

// definimos como va a estar integrado el estado que vamos a manejar, es decir, cual es la estructura de ese estado. Al estado lo llamamos AppContext. A la función createContext le podemos pasar valores simples como un string, pero para el ejemplo le vamos a pasar un objeto
const AppContext = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (id) => {
        return item;
    },
    updateItem: (item) => {}
});

export const Store = ({children}) => {



    return (
        <>
            {/** llamamos al componente que tiene la estructura de nuestro estado y mediante Provider indicamos que todo lo que esté dentro de este componente va a poder utilizar dicha estructura  */}
            <AppContext.Provider>
                {/** todo lo que pongamos dentro del componente Store, es decir, los children, quedan dentro del componente AppContext con Provider, es decir, que tienen acceso a ese contexto */}
                {children}
            </AppContext.Provider>
        </>
    );
}