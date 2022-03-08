import React from 'react';

import Card from "./Card";
import {Link} from "react-router-dom";

const ContentCardList = ({response}) => {
    const filterData = response.map(item => {
        return item.content;
    });
    const data = [];

    for(let i=0; i<filterData[0].length; i++) {
        data.push(filterData[0][i]);
    }

    return (
        <div>
            {
                data.map((item,i) => (
                    <ul key={i}>
                        <li key={i} >
                            {item}
                            {/*<Link to={`/`}>Home page</Link>*/}
                        </li>
                    </ul>
                ))
            }
        </div>
    );
};

export default ContentCardList;