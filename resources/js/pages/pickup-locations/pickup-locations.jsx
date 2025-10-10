import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../../components/button';
import Layout from '../../components/layout';
import PickupLocationsIndex from '.';
import CreatePickupLocation from './create';
import EditPickupLocation from './edit';
import DeletePickupLocation from './delete';

export default function PickupLocations() {
    const { props } = usePage();
    const user = props.auth?.user;
    const locations = props.locations || [];

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [editDescription, setEditDescription] = useState('');

    const openEditModal = (location) => {
        setSelectedLocation(location);
        setEditDescription(location.description);
        setEditModalOpen(true);
    };

    const openDeleteModal = (location) => {
        setSelectedLocation(location);
        setDeleteModalOpen(true);
    };    

    return (
        <Layout user={user} currentPage="pickupLocations">
            <div className="flex-grow p-8">
                <h2 className="mb-4 text-2xl">Pickup Locations</h2>
                <ul className="space-y-4">
                    <Button onClick={() => setCreateModalOpen(true)}>
                        Create Pickup Location
                    </Button>

                    <PickupLocationsIndex
                        locations={locations}
                        openEditModal={openEditModal}
                        openDeleteModal={openDeleteModal}
                    />
                </ul>

                <CreatePickupLocation
                    createModalOpen={createModalOpen}
                    setCreateModalOpen={setCreateModalOpen}
                />

                <EditPickupLocation
                    editModalOpen={editModalOpen}
                    setEditModalOpen={setEditModalOpen}
                    editDescription={editDescription}
                    setEditDescription={setEditDescription}
                    selectedLocation={selectedLocation}
                />

                <DeletePickupLocation 
                    deleteModalOpen={deleteModalOpen}
                    setDeleteModalOpen={setDeleteModalOpen}
                    selectedLocation={selectedLocation}
                />
            </div>
        </Layout>
    );
}
