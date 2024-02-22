import { forwardRef } from "react"

export const Input = ({type, value}, reference) => {

    return (
        <>
            <input 
                ref={reference}
                type={type} 
                value={value}/>                
        </>
    )
}

export default forwardRef(Input)