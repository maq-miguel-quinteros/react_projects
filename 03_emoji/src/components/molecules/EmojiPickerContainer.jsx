import { useState } from 'react';

import { data as emojiList } from '../../db/data';
import { EmojiSearch } from './EmojiSearch';

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

    return (
        <>
            <div>
                <EmojiSearch                
                onSearch={handleSearch}
                />
                {emojis.map((emoji) => {
                    return (
                        <div key={emoji.name}>{emoji.symbol}</div>)
                })}
            </div>
        </>
    )
}

// key={crypto.randomUUID()}