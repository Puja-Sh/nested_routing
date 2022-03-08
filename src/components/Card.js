import React from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";

function Card({title, btnText, root, id, linkDisabled}) {
    const disabledClass = !linkDisabled ? 'un-disabled' : 'disabled';

    return (
        <div className="card">
            <ul>
                <li>
                    <h3>{title}</h3>
                    <Link to={`/${root}/${id}`} className={disabledClass}>{btnText} </Link>
                </li>
            </ul>
        </div>
    );
}

export default Card;