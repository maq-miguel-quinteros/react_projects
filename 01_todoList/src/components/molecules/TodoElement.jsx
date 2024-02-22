import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

export const TodoElement = ({item, onClickUpdate, onClickDelete}) => {

    return (
        <>
            <div className='todoTitle'>
            <Text
                type={'div'}
                text={item.title}>
            </Text>
            </div>
            <Button
                className={'button'}
                onClick={onClickUpdate}
                text={'Edit'} />
            <Button
                className={'buttonDelete'}
                onClick={() => onClickDelete(item.id)}
                text={'Delete'} />
        </>
    )
}