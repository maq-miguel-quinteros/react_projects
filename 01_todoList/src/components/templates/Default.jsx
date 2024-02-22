import { TodoSection } from "../organism/TodoSection";

export const Default = ({handleChange, handleSubmit, title, todos, setTodos}) => {
    

    return (
        <>
            <TodoSection 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                title={title}
                todos={todos}
                setTodos={setTodos} />
        </>
    )
}