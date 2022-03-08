import React, {useState} from 'react';

const SearchKeyContext = React.createContext(null);

const SearchKeyProvider = ({children}) => {
    const initialValue = "";
    const [input, setInput] = useState(initialValue)
    return (
        <SearchKeyContext.Provider value={{input, setInput}}>
            {children}
        </SearchKeyContext.Provider>
    );
}


export {SearchKeyContext, SearchKeyProvider};