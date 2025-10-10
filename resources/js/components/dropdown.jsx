import { useEffect, useRef, useState } from 'react';

export const Dropdown = ({ children, label="Select" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="cursor-pointer inline-flex w-full items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-400 dark:text-white dark:hover:bg-gray-500"
            >
                {label}
                <svg
                    className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="ring-opacity-5 absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        {children}
                    </ul>
                </div>
            )}
        </div>
    );
};

export const DropdownOption = ({ onClick, children }) => {
    return (
        <li>
            <button onClick={onClick} className="cursor-pointer block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600">
                { children }
            </button>
        </li>
    );
};
