import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {useGlobalContext} from "../context";

const Form = () => {
    const {setUserName, findUser} = useGlobalContext();

    return (
        <section className='section-form'>
            <form className='form'>
                <input type='text' className='form-input' placeholder='Search GitHub username...'
                       onChange={(e) => setUserName(e.target.value)}/>
                <span className='form-icon'><FiSearch/></span>
                <button type='button' className='form-btn' onClick={findUser}>Search</button>
            </form>
        </section>
    );
};

export default Form;