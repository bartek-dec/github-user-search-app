import React from 'react';
import {Nav, Form, UserCart, Error, RateLimit} from "../components";
import {useGlobalContext} from "../context";

const LandingPage = () => {
    const {error} = useGlobalContext();

    return (
        <main className='main'>
            <div className='wrapper center'>
                <RateLimit/>
                <Nav/>
                <Form/>
                {!error ? <UserCart/> : <Error/>}
            </div>
        </main>
    );
};

export default LandingPage;