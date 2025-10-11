import { useEffect, useState } from 'react';
import { Dropdown, DropdownOption } from '../../components/dropdown';

const DriversIndex = ({
    drivers,
    openEditModal,
    openResetPasswordModal,
    openDeleteModal,
}) => {
    const [data, setData] = useState(drivers);
    const [filter, setFilter] = useState('');
    const [sortKey, setSortKey] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    useEffect(() => {
        setData(drivers);
    }, [drivers]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    const handleSort = (key) => {
        const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortKey(key);
        setSortOrder(order);

        const sorted = [...data].sort((a, b) => {
            let valA = a[key];
            let valB = b[key];

            if (typeof valA === 'string') valA = valA.toLowerCase();
            if (typeof valB === 'string') valB = valB.toLowerCase();

            if (valA < valB) return order === 'asc' ? -1 : 1;
            if (valA > valB) return order === 'asc' ? 1 : -1;
            return 0;
        });

        setData(sorted);
    };

    const filteredData = data.filter((row) => {
        if (filter === '') return true;

        const f = filter.toLowerCase();
        const full_name = `${row.first_name} ${row.last_name}`;

        return (
            row.first_name.toLowerCase().includes(f) ||
            row.last_name.toLowerCase().includes(f) ||
            row.phone.includes(f) ||
            row.email.toLowerCase().includes(f) ||
            full_name.toLowerCase().includes(f)
        );
    });

    const rowClass = 'px-4 py-2 text-left';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage,
    );

    return (
        <div className="">
            <input
                type="text"
                placeholder="Filter..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-4 w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white"
            />
            <table className="w-full table-auto rounded-lg bg-white shadow-md dark:bg-gray-600 dark:text-white">
                <thead>
                    <tr className="border-b dark:border-gray-500">
                        <th
                            onClick={() => handleSort('last_name')}
                            className={`${rowClass} cursor-pointer`}
                        >
                            Name{' '}
                            {sortKey === 'last_name' &&
                                (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                        <th
                            onClick={() => handleSort('phone')}
                            className={`${rowClass} hidden cursor-pointer lg:table-cell`}
                        >
                            Phone Number{' '}
                            {sortKey === 'phone' &&
                                (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                        <th
                            onClick={() => handleSort('email')}
                            className={`${rowClass} hidden cursor-pointer lg:table-cell`}
                        >
                            Email Address{' '}
                            {sortKey === 'email' &&
                                (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                        <th
                            onClick={() => handleSort('active')}
                            className={`${rowClass} cursor-pointer`}
                        >
                            <span className="hidden lg:inline">Account</span>{' '}
                            Status{' '}
                            {sortKey === 'active' &&
                                (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className={rowClass}></th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row) => (
                        <tr
                            key={row.id}
                            className="border-b last:border-b-0 dark:border-gray-500"
                        >
                            <td className={rowClass}>
                                {row.last_name}, {row.first_name}
                            </td>
                            <td className={`${rowClass} hidden lg:table-cell`}>
                                {row.phone}
                            </td>
                            <td className={`${rowClass} hidden lg:table-cell`}>
                                {row.email}
                            </td>
                            <td className={rowClass}>
                                {row.active === 1 && (
                                    <div className="w-fit rounded-lg bg-green-500 px-2 py-1 text-white">
                                        Active
                                    </div>
                                )}
                                {row.active === 0 && (
                                    <div className="w-fit rounded-lg bg-red-500 px-2 py-1 text-white">
                                        Inactive
                                    </div>
                                )}
                            </td>
                            <td className={rowClass}>
                                <Dropdown label="Actions">
                                    <DropdownOption
                                        onClick={() => openEditModal(row)}
                                    >
                                        Edit
                                    </DropdownOption>
                                    <DropdownOption
                                        onClick={() =>
                                            openResetPasswordModal(row)
                                        }
                                    >
                                        Reset Password
                                    </DropdownOption>
                                    <DropdownOption
                                        onClick={() => openDeleteModal(row)}
                                    >
                                        Delete
                                    </DropdownOption>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-center space-x-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="rounded border px-3 py-1 disabled:opacity-50 cursor-pointer"
                >
                    Previous
                </button>

                <span className="px-3 py-1">
                    Page {currentPage} of{' '}
                    {Math.ceil(filteredData.length / itemsPerPage)}
                </span>

                <button
                    disabled={
                        currentPage ===
                        Math.ceil(filteredData.length / itemsPerPage)
                    }
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="rounded border px-3 py-1 disabled:opacity-50 cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DriversIndex;
