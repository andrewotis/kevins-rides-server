import { AiFillDashboard } from 'react-icons/ai';
import { FaCarAlt, FaUsers } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { HiBellAlert } from 'react-icons/hi2';
import { IoSettings } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import SidebarItem from './sidebar-item';

const Sidebar = ({ currentPage }) => {
    return (
        <div className="fixed h-screen w-16 border-r border-gray-300 bg-gray-100 px-4 text-gray-900 md:w-64 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <h1 className="mt-4 hidden text-center text-2xl font-bold italic md:block">
                Kevin's Rides
            </h1>
            <ul className="mt-5 flex flex-col text-xl">
                <SidebarItem
                    selected={currentPage == 'dashboard'}
                    href="/"
                    icon={<MdDashboard />}
                >
                    Dashboard
                </SidebarItem>
                <SidebarItem
                    selected={currentPage == 'rides'}
                    href="/rides"
                    icon={<FaCarAlt />}
                >
                    Rides
                </SidebarItem>
                <SidebarItem
                    selected={currentPage == 'riders'}
                    href="/riders"
                    icon={<FaUsers />}
                >
                    Riders
                </SidebarItem>
                <SidebarItem
                    selected={currentPage == 'drivers'}
                    icon={<AiFillDashboard />}
                >
                    Drivers
                </SidebarItem>
                <SidebarItem
                    selected={currentPage == 'pickupLocations'}
                    href="/pickup-locations"
                    icon={<FaLocationDot />}
                >
                    Pickup Locations
                </SidebarItem>
                <SidebarItem
                    selected={currentPage == 'notifications'}
                    icon={<HiBellAlert />}
                >
                    Notifications
                </SidebarItem>
                <SidebarItem
                    selected={currentPage == 'settings'}
                    icon={<IoSettings />}
                >
                    Settings
                </SidebarItem>
            </ul>
        </div>
    );
};

export default Sidebar;
