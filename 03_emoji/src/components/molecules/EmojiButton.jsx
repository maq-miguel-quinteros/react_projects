export const EmojiButton = ({emoji, onClickButton}) => {

    const handleClick = () => {
        onClickButton(emoji);
    }

    return (
        <>
            <button onClick={handleClick}>{emoji.symbol}</button>
        </>
    )
}