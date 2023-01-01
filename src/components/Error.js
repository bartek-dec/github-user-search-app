import React from 'react';
import {TbFaceIdError} from 'react-icons/tb';
import {useGlobalContext} from "../context";

const Error = () => {
    const {message} = useGlobalContext();

    return (
        <section className='error'>
            <span className='error-icon'><TbFaceIdError/></span>
            <h2 className='error-heading'>{message}</h2>
        </section>
    );
};

export default Error;