import React, {useRef} from 'react';

const YoutubeSearch = ({onSearch}) => {
    const inputRef = useRef();

    const resultSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        console.log("onClick")
        resultSearch();
        
    }
    const onKeyPress = () => {
        console.log("onKeyPress");
    }
    return (
        <div className="title">
            <h2>Video Search</h2>
            <input
                ref={inputRef}
                type="search"
                placeholder="검색하시오"
                onKeyPress={onKeyPress}
            />
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    );
};

export default YoutubeSearch;