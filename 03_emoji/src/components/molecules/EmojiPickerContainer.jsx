import { useState } from 'react';

import { data as emojiList } from '../../db/data';
import { EmojiSearch } from './EmojiSearch';
import { EmojiButton } from './EmojiButton';

export const EmojiPickerContainer = () => {

    const [emojis, setEmojis] = useState(emojiList);

    const handleSearch = (event) => {
        const temp = event.target.value.toLowerCase();               
        
        if (temp!==''){            
            const search = emojiList.filter(emoji => {
                return (                    
                    emoji.name.toLowerCase().includes(temp) || 
                    emoji.keywords.toLowerCase().includes(temp))
            })
            setEmojis(search);
        } else {
            setEmojis(emojiList);
        }
    }

    const handleOnClickEmoji = (emoji) => {
        const cursorPos = inputRef.current.selectionStart;
    }

    return (
        <>
            <div>
                <EmojiSearch                
                onSearch={handleSearch}
                />
                {emojis.map((emoji) => {
                    return (
                        <EmojiButton key={emoji.name} emoji={emoji} onClick={handleOnClickEmoji} />)
                })}
            </div>
        </>
    )
}

// key={crypto.randomUUID()}