import Button from '../../components/button';

const LocationsIndex = ({ locations, openEditModal, openDeleteModal }) => {
    return locations.map((location) => (
        <li
            key={location.id}
            className="flex items-center justify-between rounded-lg bg-white p-4 dark:bg-gray-600 dark:text-white"
        >
            <span>{location.description}</span>
            <div className="space-x-2">
                <Button
                    onClick={() => openEditModal(location)}
                    className="text-blue-600 hover:underline"
                >
                    Edit
                </Button>
                <Button
                    onClick={() => openDeleteModal(location)}
                    className="text-red-600 hover:underline"
                >
                    Delete
                </Button>
            </div>
        </li>
    ));
};

export default LocationsIndex;
