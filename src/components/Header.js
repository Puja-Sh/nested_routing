import React, {useContext, useState} from 'react';
import {SearchKeyContext} from "../globalContext/SearchKeyContext";
import SubmitButton from "./SubmitButton";

const Header = (props) => {
    const url = window.location.pathname ;

    const {input, setInput} = useContext(SearchKeyContext);

    const [inputValue, setInputValue] = useState(`${input}`);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setInput(e.target[0].value);
    }

    const resetHandler = (e) => {
        setInputValue("");
        setInput("");
    }

    if(url !== "/") return null;

     return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={inputValue} placeholder={"search for page"} onChange={handleChange} required/>
                <SubmitButton text="search"/>
                <SubmitButton text="reset" onClick={resetHandler}/>
            </form>
        </div>
    );
};

export default Header;