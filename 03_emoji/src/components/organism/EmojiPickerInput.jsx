import { useRef } from "react"

import { EmojiPicker } from "../molecules/EmojiPicker"
import { Input } from "../atoms/Input";

export const EmojiPickerInput = () => {

    // useRef se utiliza para obtener la referencia de un nodo HTML. Sirve para, por ejemplo, dar foco a un elemento cuando se hace clic en otro distinto

    const refInput = useRef(null);



    return (
        <>   
            
            <input ref={refInput} />
            <EmojiPicker reference={refInput}/>
        </>
    )

    /*     const handleClick = () => {
        // mediante current indicamos trabajar sobre el elemento HTML donde está refInput como propiedad de ref (que en el ejemplo es un input) de ese modo puedo utilizar los atributos y métodos del elemento input como focus
        refInput.current.focus();

                    <input ref={refInput} />
            <button 
                onClick={handleClick}
            >Click</button>

    } */
}