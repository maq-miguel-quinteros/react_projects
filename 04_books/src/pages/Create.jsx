import {useState} from 'react';

import { useAppContext } from '../store/Store';

/** permite generar un hipervínculo para poder navegar entre las rutas */
import {Link} from 'react-router-dom';
import { Layout } from '../components/organisms/Layout';

export const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [intro, setIntro] = useState('');
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState('');

    const store = useAppContext();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'author':
                setAuthor(value);
                break
            case 'intro':
                setIntro(value);
                break;
            case 'completed':
                setCompleted(event.target.checked);
                break;
            case 'review':
                setReview(value);
                break;
            default:
                break;
        }
    }

    const handleChangeFile = (event) => {
        const element = event.target;
        const file = element.files[0];
        // utilizamos la api FileReader que permite manipular archivos desde el navegador
        const reader = new FileReader();

        // traemos el archivo que cargamos con el input hacia la api de reader
        reader.readAsDataURL(file);

        // llamamos al evento onloadend de esa api, el evento se ejecuta al terminar de leer el archivo que estamos subiendo con el input, es decir, cuando ser termine la carga del archivo, cuando eso suceda se ejecuta la función flecha
        reader.onloadend = () => {
            setCover(reader.result.toString());
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            // podemos escribir title: title pero si solo dejamos title la propiedad se va a llamar como el nombre de la variable y su valor va a ser el contenido de esa variable
            title: title,
            author,
            cover,
            intro,
            completed,
            review
        }

        store.createItem(newBook)
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>Title</div>
                    <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={title} />
                </div>
                <div>
                    <div>Author</div>
                    <input
                    type='text'
                    name='author'
                    onChange={handleChange}
                    value={author} />
                </div>
                <div>
                    <div>Cover</div>
                    <input
                    type='file'
                    name='cover'
                    onChange={handleChangeFile} />
                    <div>
                        {cover && <img src={cover} width={'300px'} />}
                    </div>
                </div>
                <div>
                    {title}
                </div>
                <div>
                    <div>Introduction</div>
                    <input
                    type='text'
                    name='intro'
                    onChange={handleChange}
                    value={intro} />
                </div>
                <div>
                    <div>Completed</div>
                    <input
                    type='checkbox'
                    name='completed'
                    onChange={handleChange}
                    value={completed} />
                </div>
                <div>
                    <div>Review</div>
                    <input
                    type='text'
                    name='review'
                    onChange={handleChange}
                    value={review} />
                </div>
                <input
                    type='submit'                  
                    value='Register book' />
            </form>
        </Layout>
    );
}