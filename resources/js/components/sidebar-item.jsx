import { Link } from '@inertiajs/react';
import React from 'react';

const SidebarItem = ({ children, icon, href }) => {
    const styledIcon = React.cloneElement(icon, {
        className: `${icon.props.className || ''} size-6 text-gray-700`,
    });

    return (
        <Link href={href}>
            <li className="flex items-center justify-center px-2 py-3 hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:text-white md:justify-start">
                {styledIcon}
                <span className="ml-4 hidden md:inline">{children}</span>
            </li>
        </Link>
    );
};
export default SidebarItem;
