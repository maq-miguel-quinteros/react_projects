import { Input } from "../atoms/Input";

export const TodoForm = ({handleSubmit, handleChange, title}) => {

    return (
        <>
            <form 
            className='todoCreateForm' onSubmit={handleSubmit}>
                    <Input
                        onChange={handleChange}
                        className='todoInput'
                        value={title} />
                    <Input 
                        onClick={handleSubmit}
                        className='buttonCreate'
                        type={'submit'}
                        value={'Create todo'} />
                </form>
        </>
    )
}