import { TodoList } from "../molecules/TodoList";
import { TodoForm } from "../molecules/TodoForm";

export const TodoSection = ({handleChange, handleSubmit, title, todos, setTodos}) => {

    return (
        <>
            <section className='todoContainer'>
                <TodoForm 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    title={title} />
                <TodoList 
                    todos={todos}
                    setTodos={setTodos} />
            </section>
        </>
    )
}