import { useState } from 'react';

import { TodoElement } from './TodoElement';
import { FormEdit } from './FormEdit';

export const TodoItem = ({ item, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false);    

    return (
        <div className='todo'>
            {isEdit
                ?
                <FormEdit
                    item={item}
                    onUpdate={onUpdate}
                    setIsEdit={setIsEdit} />
                :
                <TodoElement
                    item={item}
                    onClickUpdate={() => setIsEdit(true)} 
                    onClickDelete={onDelete}/>}
        </div>
    )
}