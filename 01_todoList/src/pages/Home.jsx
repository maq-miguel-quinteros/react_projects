import { useState } from "react"

import { Default } from "../components/templates/Default";

export const Home = () => {

    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([])

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        // mediante unshift agregamos el nuevo todo al comienzo del array
        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);

        setTitle('');

        // agrega al final de del array de todo
        //setTodos([...todos, newTodo]);
    }

    return(
    <>
        <Default
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            title={title}
            todos={todos}
            setTodos={setTodos} />
    </>
    )
}