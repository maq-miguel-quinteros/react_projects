import { forwardRef } from "react"

export const Input = ({type, value, onChange}, reference) => {

    return (
        <>
            <input 
                onChange={onChange}
                ref={reference}
                type={type} 
                value={value}/>                
        </>
    )
}

export default forwardRef(Input);