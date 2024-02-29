import { Book } from "../components/organisms/Book";
import { Layout } from "../components/organisms/Layout";
import { useAppContext } from "../store/Store";

import {Link} from 'react-router-dom';

export const Home = () => {

    const store = useAppContext()

    return (
        <Layout>
            {store.items.map((item) => <div>
                <Book 
                    item={item}
                    key={item.id}/>
            </div>)}
        </Layout>
    );
}