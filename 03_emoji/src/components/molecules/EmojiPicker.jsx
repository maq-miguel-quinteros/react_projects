import { forwardRef, useState } from "react"

import { EmojiPickerContainer } from "./EmojiPickerContainer";

export default const EmojiPicker = forwardRef( ( props, refInput) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div>
                <button onClick={handleClickOpen}>🤞</button>
                <div>
                    {isOpen ?
                        <EmojiPickerContainer ref={refInput} />
                        :
                        ''}
                </div>
            </div>
        </>
    )
})





// También podemos declarar la función forwardRef recibiendo los props y la referencia foránea, es decir, la referencia que viene de fuera del componente hacia el componente
/* export default forwardRef((props, ref) => {

}) */