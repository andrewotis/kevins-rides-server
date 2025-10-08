import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { ThemeContext } from '../context/ThemeContextProvider';

const Navbar = ({ pageTitle }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleLogout = _ => {
        // post call here
    }

    return (
        <div className="flex items-center justify-between border-b border-gray-300 bg-gray-100 p-4 text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <h1>{pageTitle || ''}</h1>
            <div className="flex items-center space-x-4">
                <button
                    title="Toggle Dark/Light Mode"
                    className="hover:cursor-pointer"
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? (
                        <FaMoon className="align-middle text-[32px]" />
                    ) : (
                        <FaSun className="align-middle text-[32px]" />
                    )}
                </button>

                <button
                    title="Logout"
                    className="hover:cursor-pointer"
                    onClick={() => {}}
                >
                    <IoLogOut size={42} className="align-middle" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
