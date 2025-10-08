import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        console.log("useeffect for themecontextprovider triggered")
        if (theme === 'dark') {
            console.log("theme was light, adding dark")
            document.documentElement.classList.add('dark');
        } else {
            console.log("Theme was dark, removing dark")
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = (_) => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
