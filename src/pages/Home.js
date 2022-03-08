import React, {useContext} from 'react';
import CardList from "../components/CardList";
import data from '../data/data.json';
import {SearchKeyContext} from "../globalContext/SearchKeyContext";

function Home(props) {
    const searchKey = useContext(SearchKeyContext)
    const linkDisabled = searchKey.input.length > 0? false : true;

    const response = data.data;

    const filterData = [];
    response.map(item => {
        if (item.title.toLowerCase().includes(searchKey.input)) {
            return filterData.push(item);
        }
    })


    return (
        <div>
            <CardList response={filterData} goTo={"section"}  btnText={"Go to"} linkDisabled={linkDisabled}/>
        </div>
    );
}

export default Home;