import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ThemeContextProvider from '../context/ThemeContextProvider';

const Layout = ({ children }) => {
    return (
        <ThemeContextProvider>
            <div className="flex">
                <Sidebar />
                <div className="ml-16 h-full grow bg-gray-100 text-gray-900 md:ml-64 lg:h-screen dark:bg-gray-900 dark:text-white">
                    <Navbar />
                    <div>{children}</div>
                </div>
            </div>
        </ThemeContextProvider>
    );
};

export default Layout;
