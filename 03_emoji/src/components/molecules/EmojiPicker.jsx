import { forwardRef, useState } from "react"

import { EmojiPickerContainer } from "./EmojiPickerContainer";

export const EmojiPicker = forwardRef(function EmojiPicker(props,ref) {

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
                        <EmojiPickerContainer ref={ref} />
                        :
                        ''}
                </div>
            </div>
        </>
    );
});


// También podemos declarar la función forwardRef recibiendo los props y la referencia foránea, es decir, la referencia que viene de fuera del componente hacia el componente
/* export default forwardRef((props, ref) => {

}) */