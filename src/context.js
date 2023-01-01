import React, {useState, useContext, useEffect} from "react";
import axios from "axios";

const url = 'https://api.github.com/users';
const AppContext = React.createContext();

const ContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [userName, setUserName] = useState('octocat');
    const [user, setUser] = useState({});

    useEffect(() => {
        findUser(url);
        // eslint-disable-next-line
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const findUser = async () => {
        try {
            console.log(`${url}/${userName}`);
            const {data} = await axios.get(`${url}/${userName}`, {
                headers: {
                    Accept: "application/vnd.github+json",
                }
            });
            const {
                avatar_url, name, login, created_at, bio, public_repos, followers, following, location, blog,
                twitter_username, company
            } = data;

            setUser({
                avatar_url, name, login, created_at, bio, public_repos, followers, following, location,
                blog, twitter_username, company
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AppContext.Provider value={{isDarkMode, toggleTheme, user, setUserName, findUser}}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {ContextProvider, useGlobalContext}