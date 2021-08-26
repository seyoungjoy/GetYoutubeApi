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
            <div className="searchRow">
                <input
                    ref={inputRef}
                    type="search"
                    placeholder="Search"
                    onKeyPress={onKeyPress}
                />
                <button type="submit" onClick={onClick}>검색</button>
            </div>
        </div>
    );
};

export default YoutubeSearch;