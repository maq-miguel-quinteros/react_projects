import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useState } from "react";

export const FormEdit = ({item, onUpdate, setIsEdit}) => {

    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        setNewValue(event.target.value);
    }

    const handleClickUpdate = () => {
        onUpdate(item.id, newValue);
        setIsEdit(false)
    }

    return (
        <form 
        className='todoUpdateForm'
        onSubmit={handleSubmit}>
            <Input
                onChange={handleChange}
                type={'text'}
                value={newValue} />
            <Button
                className={'button'}
                onClick={handleClickUpdate}
                text={'Update'} />
        </form>
    )
}