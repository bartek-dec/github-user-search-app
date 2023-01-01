import React from 'react';
import {FiSearch} from 'react-icons/fi';

const Form = () => {
    return (
        <section className='section-form'>
            <form className='form'>
                <input type='text' className='form-input' placeholder='Search GitHub username...'/>
                <span className='form-icon'><FiSearch/></span>
                <button type='button' className='form-btn'>Search</button>
            </form>
        </section>
    );
};

export default Form;