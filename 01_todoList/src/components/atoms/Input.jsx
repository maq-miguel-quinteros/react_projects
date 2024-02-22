export const Input = ({ className, type, value, onChange, onClick }) => {


    return (
        <>
            {(onChange || onClick) ? (
                <>
                    {onChange &&
                        <input
                            className={className}
                            type={type}
                            value={value}
                            onChange={onChange}
                        />}

                    {onClick &&
                        <input
                            className={className}
                            type={type}
                            value={value}
                            onClick={onClick} />}
                </>) : 
                <>
                    {<input
                        className={className}
                        type={type}
                        value={value} />}
                </>
            }
        </>
    )
}