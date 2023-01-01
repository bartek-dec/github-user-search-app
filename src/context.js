import React, {useState, useContext, useEffect} from "react";
import axios from "axios";

const url = 'https://api.github.com/users';
const AppContext = React.createContext();

const ContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [userName, setUserName] = useState('octocat');
    const [user, setUser] = useState({});
    const [error, setError] = useState(true);

    useEffect(() => {
        //findUser(url);
        // eslint-disable-next-line
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const findUser = async () => {
        try {
            const {data} = await axios.get(`${url}/${userName}`, {
                headers: {
                    Accept: "application/vnd.github+json",
                }
            });

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
        } catch (error) {
            setError(true);
        }
    }

    return (
        <AppContext.Provider value={{isDarkMode, toggleTheme, user, setUserName, findUser, error}}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {ContextProvider, useGlobalContext}