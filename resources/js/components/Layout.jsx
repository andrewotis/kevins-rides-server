import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import ThemeContextProvider from '../context/theme-context-provider';

const Layout = ({ children, user }) => {
    return (
        <ThemeContextProvider>
            <div className="flex">
                <Sidebar />
                <div className="ml-16 flex flex-col min-h-screen w-full bg-gray-100 text-gray-900 md:ml-64 lg:h-screen dark:bg-gray-900 dark:text-white">
                    <Navbar user={user} />
                    <div>{children}</div>
                </div>
            </div>
        </ThemeContextProvider>
    );
};

export default Layout;
