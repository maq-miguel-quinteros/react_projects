export const Text = ({className , type, text}) => {

    return (
        <>            
            {text && 
                <>{type === 'div' &&
                    <div
                    className={className}
                    >{text}</div>}
                </>}
            
        </>
    )
}