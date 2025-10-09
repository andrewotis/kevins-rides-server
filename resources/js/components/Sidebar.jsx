import { AiFillDashboard } from 'react-icons/ai';
import { FaCarAlt, FaUsers } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { HiBellAlert } from "react-icons/hi2";
import { MdDashboard } from 'react-icons/md';
import { IoSettings } from "react-icons/io5";
import SidebarItem from './sidebar-item';

const Sidebar = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white dark:border-gray-600 fixed h-screen w-16 border-r border-gray-300 bg-gray-100 px-4 text-gray-900 md:w-64">
            <h1 className="hidden text-2xl mt-4 text-center italic font-bold md:block">
                Kevin's Rides
            </h1>
            <ul className="mt-5 flex flex-col text-xl">
                <SidebarItem href="/" icon={<MdDashboard />}>Dashboard</SidebarItem>
                <SidebarItem href="/rides" icon={<FaCarAlt />}>Rides</SidebarItem>
                <SidebarItem icon={<FaUsers />}>Riders</SidebarItem>
                <SidebarItem icon={<AiFillDashboard />}>Drivers</SidebarItem>
                <SidebarItem href="/pickup-locations" icon={<FaLocationDot />}>
                    Pickup Locations
                </SidebarItem>
                <SidebarItem icon={<HiBellAlert />}>Notifications</SidebarItem>
                <SidebarItem icon={<IoSettings />}>Settings</SidebarItem>
            </ul>
        </div>
    );
};

export default Sidebar;
