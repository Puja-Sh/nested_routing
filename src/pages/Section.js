import React, {useContext} from 'react';
import {useLocation, useParams} from "react-router-dom";
import data from '../data/data.json';
import {SearchKeyContext} from "../globalContext/SearchKeyContext";
import CardList from "../components/CardList";

function Section(props) {
    const {id} = useParams();
    const response = data.data;

    const filterData = [];
    response.map(item => {
        if(item.id === id){
            const contentData = {
                title: item.sectionTitle,
                content : item.content,
                id:item.id
            }
            filterData.push(contentData)
        }
    })


    return (
        <>
            <CardList response={filterData} goTo={`section/${id}/content`} btnText={"Details"} />
        </>
    );
}

export default Section;