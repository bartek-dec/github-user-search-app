import React from 'react';
import {useGlobalContext} from "../context";

const RateLimit = () => {
    const {limit} = useGlobalContext();

    return (
        <article className='rate'>
            <h3 className='rate-heading'>{`Remained search attempts: ${limit}`}</h3>
        </article>
    );
};

export default RateLimit;