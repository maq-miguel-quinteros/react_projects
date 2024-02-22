export const Input = ({ className, value, type, onChange}) => {

    return (
        <>
            {onChange &&
                <input 
                className={className}
                value={value}
                type={type}
                onChange={onChange} />}
        </>
    )
}