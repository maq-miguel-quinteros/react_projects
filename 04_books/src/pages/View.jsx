import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store/Store";
import { Layout } from "../components/organisms/Layout";

export const View = () => {
    const [item, setItem] = useState(null);
    /** useParams devuelve los parámetros que enviamos mediante la ruta */
    const params = useParams();
    const store = useAppContext();

    useEffect(()=>{
        /** bookId es el nombre del parámetro que le damos a crear la ruta en el componente App */
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);

    return (
        <>
            <Layout>                
                <h2>{item?.title}</h2>
                <div>{item?.cover?
                <img 
                src={item.cover}
                width={400}/>
                : ''}
                </div>
                <div>{item?.author}</div>
                <div>{item?.intro}</div>
                <div>{item?.completed? 'Leído':'No leído'}</div>
                <div>{item?.review}</div>
                
            </Layout>
        </>
    );
}