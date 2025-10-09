const Button = ({ children, onClick, type = 'button', color="blue", className }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`inline-flex cursor-pointer items-center justify-center rounded-md bg-${color}-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 dark:active:bg-white ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
