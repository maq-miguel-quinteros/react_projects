import { forwardRef, useState, useRef, useEffect } from "react"

import { EmojiPickerContainer } from "./EmojiPickerContainer";

export const EmojiPicker = forwardRef(function EmojiPicker(props,ref) {

    const [isOpen, setIsOpen] = useState(false);

    const refContainer = useRef(null);

    useEffect(()=> {
        window.addEventListener('click', event => {
            if(!refContainer.current.contains(event.target)){
                setIsOpen(false);
            }
        })
    }, []);

    const handleClickOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div ref={refContainer}>
                <button onClick={handleClickOpen}>🤞</button>
                <div>
                    {isOpen ?
                    (<div >
                        <EmojiPickerContainer ref={ref} />
                    </div>)
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