import React, {useState, useContext} from "react";

const url = 'https://api.github.com/users/USERNAME';
const AppContext = React.createContext();

const ContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <AppContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {ContextProvider, useGlobalContext}