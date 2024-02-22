export const Button = ({className,text, onClick, type}) => {

    return (
        <>
            <button
                className={className}
                type={type}
                onClick={onClick}>
                    {text}
            </button>
        </>
    )
}