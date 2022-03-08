import React from 'react';
import data from '../data/data.json';
import {useParams} from "react-router-dom";
import ContentCardList from "../components/ContentCardList";

function Content() {
    const response = data.data;
    const  { id } = useParams();

    let filterData = [];

    response.map(item => {
        if(item.id === id){
            const contentData = {
                content:item.content
            };
        filterData.push(contentData)
        }
    })

    return (
        <div>
            <ContentCardList response={filterData} />
        </div>
    );
}

export default Content;