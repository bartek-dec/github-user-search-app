import React from 'react';
import {useGlobalContext} from "../context";
import moment from "moment";
import {MdLocationOn} from 'react-icons/md';
import {BsTwitter, BsBuilding} from 'react-icons/bs';
import {FaLink} from 'react-icons/fa';

const UserCart = () => {
    const tempImg = 'https://avatars.githubusercontent.com/u/583231?v=4';
    const notAvailable = 'Not available';
    const {user} = useGlobalContext();
    const {
        avatar_url, name, login, created_at, bio, public_repos, followers, following, location,
        blog, twitter_username, company
    } = user;

    return (
        <article className='user'>
            <img src={avatar_url} alt='avatar' className='user-img'/>
            <h2 className='user-name'>{name || notAvailable}</h2>
            <h3 className='user-login'>{login ? `@${login}` : notAvailable}</h3>
            <h3 className='user-created-at'>{created_at ? `Joined ${moment(created_at).format('Do MMM YYYY')}` : notAvailable}</h3>
            <p className='user-bio'>{bio || 'This profile has no bio'}</p>

            <div className='user-repos'>
                <div className='repos'>
                    <p className='repos-header'>Repos</p>
                    <p className='repo-result'>{public_repos || 0}</p>
                </div>
                <div className='repos'>
                    <p className='repos-header'>Followers</p>
                    <p className='repo-result'>{followers || 0}</p>
                </div>
                <div className='repos'>
                    <p className='repos-header'>Following</p>
                    <p className='repo-result'>{following || 0}</p>
                </div>
            </div>

            <div className='user-socials'>
                <p className='social'><span className='icon'><MdLocationOn/></span> {location || notAvailable}</p>
                <p className='social'><span className='icon'><FaLink/></span> {blog || notAvailable}</p>
                <p className='social'><span className='icon'><BsTwitter/></span> {twitter_username || notAvailable}</p>
                <p className='social'><span className='icon'><BsBuilding/></span> {company || notAvailable}</p>
            </div>
        </article>
    );
};

export default UserCart;