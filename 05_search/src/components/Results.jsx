import { useEffect, useMemo, useState } from "react"
import { MarkedItem } from "./MarkedItem";


export const Results = ({items, onItemSelected, query, onResultsCalculated}) => {

    const [results, setResults] = useState([]);

    // cada vez que se actualiza la página, por el cambio de estado de algún componente, vuelve a crearse la variable filteredItems a la que se le asigna de nuevo la función o el return de esta
    // como la función hace un console.log este se realiza en cada actualización de estado - asignación de de variable filteredItems
    const filteredItems = useMemo(() => {
        // mediante useMemo indicamos que filteredItems es igual a la función o lo que devuelve la función findMatch
        return findMatch(items, query);
        // con el arreglo indicamos que la asignación de filteredItems (por ende la ejecución de la función que tiene asignada) se va a realizar cuando se actualicen los valores de items o query
    }, [items, query]);

    // mediante useMemo indicamos a react que guarde el valor de la función y su resultado, y que solo vuelva a ejecutar la misma cuando se realice el cambio puntual que indicamos en el segundo parámetro
    function findMatch(items, query){
        const res = items.filter(item => {
            return item.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
        });
        setResults(res);
        return res;
    }
    // hacemos algo similar con useEffect, pero mediante useMemo podemos trabajar con una variable en línea (filteredItems), mientras que con useEffect el renderizado condicionado se hace sobre lo que queda dentro de la función useEffect (dentro el alcance del useEffect)

    useEffect(() =>{
        onResultsCalculated(results);
    }, [results])

    return (
        <div>
            {query !== '' ?
                filteredItems.map(item => <MarkedItem 
                    key={item.id}
                    item={item}
                    query={query} 
                    onClick={onItemSelected}/>)
            : ''}
        </div>
    )
}
