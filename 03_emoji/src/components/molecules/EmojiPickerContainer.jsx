/** key={crypto.randomUUID()} */

import { forwardRef, useState } from 'react';

import { data as emojiList } from '../../db/data';
import { EmojiSearch } from './EmojiSearch';
import { EmojiButton } from './EmojiButton';

export const EmojiPickerContainer = forwardRef(function EmojiPickerContainer(props, refInput) {

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
        const cursorPos = refInput.current.selectionStart;
        const text = refInput.current.value;
        const prev = text.slice(0,cursorPos);
        const next = text.slice(cursorPos);

        refInput.current.value = prev + emoji.symbol + next;
        refInput.current.selectionStart = cursorPos + emoji.symbol.length;
        refInput.current.selectionEnd = cursorPos + emoji.symbol.length;
        refInput.current.focus();
    }

    return (
        <>
            <div>
                <EmojiSearch                
                onSearch={handleSearch}
                />
                {emojis.map((emoji) => {
                    return (
                        <EmojiButton                         
                        key={emoji.symbol} 
                        emoji={emoji} 
                        onClickButton={handleOnClickEmoji} />)
                })}
            </div>
        </>
    )
});