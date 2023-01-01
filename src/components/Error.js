import React from 'react';
import {TbFaceIdError} from 'react-icons/tb';

const Error = () => {
    return (
        <section className='error'>
            <span className='error-icon'><TbFaceIdError/></span>
            <h2 className='error-heading'>Something went wrong</h2>
        </section>
    );
};

export default Error;