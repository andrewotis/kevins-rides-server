import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../../components/button';
import Layout from '../../components/layout';
import LocationsIndex from '.';
import CreateLocation from './create';
import EditLocation from './edit';
import DeleteLocation from './delete';

export default function Locations() {
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
        <Layout user={user} currentPage="Locations">
            <div className="flex-grow p-8">
                <h2 className="mb-4 text-2xl">Locations</h2>
                <ul className="space-y-4">
                    <Button onClick={() => setCreateModalOpen(true)}>
                        Create Location
                    </Button>

                    <LocationsIndex
                        locations={locations}
                        openEditModal={openEditModal}
                        openDeleteModal={openDeleteModal}
                    />
                </ul>

                <CreateLocation
                    createModalOpen={createModalOpen}
                    setCreateModalOpen={setCreateModalOpen}
                />

                <EditLocation
                    editModalOpen={editModalOpen}
                    setEditModalOpen={setEditModalOpen}
                    editDescription={editDescription}
                    setEditDescription={setEditDescription}
                    selectedLocation={selectedLocation}
                />

                <DeleteLocation 
                    deleteModalOpen={deleteModalOpen}
                    setDeleteModalOpen={setDeleteModalOpen}
                    selectedLocation={selectedLocation}
                />
            </div>
        </Layout>
    );
}
