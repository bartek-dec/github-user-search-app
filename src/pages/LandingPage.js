import React from 'react';
import {Nav, Form, UserCart} from "../components";

const LandingPage = () => {
    return (
        <main className='main'>
            <div className='wrapper center'>
                <Nav/>
                <Form/>
                <UserCart/>
            </div>
        </main>
    );
};

export default LandingPage;