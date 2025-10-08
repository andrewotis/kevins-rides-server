import React from 'react';

const SidebarItem = ({ children, icon }) => {
  const styledIcon = React.cloneElement(icon, {
    className: `${icon.props.className || ''} size-6 text-gray-700`,
  });

  return (
    <li className="flex items-center justify-center md:justify-start py-3 px-2 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
      {styledIcon}
      <span className="hidden md:inline ml-4">{children}</span>
    </li>
  );
};
export default SidebarItem;
