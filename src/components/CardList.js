import React from 'react';

import Card from "./Card";

const CardList = ({response, goTo,btnText, linkDisabled}) => {

    return (
        <div>
            {
                response.map(item => (
                    <Card key={item.id} id={item.id} root={goTo} title={item.title} linkDisabled={linkDisabled} btnText={btnText}/>
                ))
            }
        </div>
    );
};

export default CardList;