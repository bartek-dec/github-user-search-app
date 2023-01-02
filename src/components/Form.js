import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {useGlobalContext} from "../context";

const Form = () => {
    const {setUserName, userName, handleSubmit} = useGlobalContext();

    return (
        <section className='section-form'>
            <form className='form'>
                <input type='text' className='form-input' placeholder='Search GitHub username...' value={userName}
                       onChange={(e) => setUserName(e.target.value)}/>
                <span className='form-icon'><FiSearch/></span>
                <button type='submit' className='form-btn' onClick={handleSubmit}>Search</button>
            </form>
        </section>
    );
};

export default Form;