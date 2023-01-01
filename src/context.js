import React, {useState, useContext, useEffect} from "react";
import axios from "axios";

const url = 'https://api.github.com/users';
const rate_url = 'https://api.github.com/rate_limit';
const AppContext = React.createContext();

const ContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [userName, setUserName] = useState('octocat');
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [limit, setLimit] = useState('');

    useEffect(() => {
        findUser(url);
        // eslint-disable-next-line
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const findUser = async () => {
        try {
            let rate = await axios.get(rate_url);
            let {remaining} = rate.data.resources.core;

            if (remaining < 1) {
                setError(true);
                setMessage('You used hourly search limit. Try in an hour.')
                setLimit(remaining);
                return;
            }

            const {data} = await axios.get(`${url}/${userName}`, {
                headers: {
                    Accept: "application/vnd.github+json",
                }
            });

            rate = await axios.get(rate_url);
            remaining = rate.data.resources.core.remaining;
            setLimit(remaining);

            if (!data) {
                setError(true);
                return;
            }

            const {
                avatar_url, name, login, created_at, bio, public_repos, followers, following, location, blog,
                twitter_username, company
            } = data;

            setUser({
                avatar_url, name, login, created_at, bio, public_repos, followers, following, location,
                blog, twitter_username, company
            });
            setError(false);
            setMessage('');
        } catch (error) {
            setError(true);
            setMessage('Something went wrong.')
        }
    }

    return (
        <AppContext.Provider value={{isDarkMode, toggleTheme, user, setUserName, findUser, error, message, limit}}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {ContextProvider, useGlobalContext}