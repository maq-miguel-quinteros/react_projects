import { TodoItem } from "./TodoItem"

export const TodoList = ({todos, setTodos}) => {

    const handleUpdate = (id, value) => {
        const temp = [...todos];
        const item = temp.find((item) => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    const handleDelete = (id) => {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }

    return (
        <>
            <div className='todosContainer'>
                    {todos && todos.map((todo) => {
                        return (
                                <TodoItem
                                className='todo' 
                                key={todo.id}
                                item={todo}
                                onUpdate={handleUpdate} 
                                onDelete={handleDelete}/>
                        )
                    })}
                
                </div>
        </>
    )
}