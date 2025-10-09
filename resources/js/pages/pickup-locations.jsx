import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import { Modal, ModalBody, ModalTitle } from '../components/modal';

export default function PickupLocations() {
    const { props } = usePage();
    const user = props.auth?.user;
    const locations = props.locations || [];

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [editDescription, setEditDescription] = useState('');
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [newDescription, setNewDescription] = useState('');

    const openEditModal = (location) => {
        setSelectedLocation(location);
        setEditDescription(location.description);
        setEditModalOpen(true);
    };

    const openDeleteModal = (location) => {
        setSelectedLocation(location);
        setDeleteModalOpen(true);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        router.put(
            `/pickup-locations/${selectedLocation.id}`,
            {
                description: editDescription,
            },
            {
                onSuccess: () => setEditModalOpen(false),
            },
        );
    };

    const handleDelete = () => {
        router.delete(`/pickup-locations/${selectedLocation.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteModalOpen(false),
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        router.post(
            '/pickup-locations',
            { description: newDescription },
            {
                onSuccess: () => {
                    setCreateModalOpen(false);
                    setNewDescription('');
                },
            },
        );
    };

    return (
        <Layout user={user}>
            <div className="flex-grow p-8">
                <h2 className="mb-4 text-2xl">Pickup Locations</h2>
                <ul className="space-y-4">
                    <Button onClick={() => setCreateModalOpen(true)}>
                        Create Pickup Location
                    </Button>

                    {locations.map((location) => (
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
                    ))}
                </ul>

                <Modal isOpen={createModalOpen}>
                    <form
                        onSubmit={handleCreate}
                        className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                        <ModalTitle title="New Pickup Location" />
                        <input
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="mb-4 w-full border p-2"
                            required
                        />
                        <div className="flex justify-end space-x-2">
                            <Button
                                type="button"
                                onClick={() => setCreateModalOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">Create</Button>
                        </div>
                    </form>
                </Modal>

                <Modal isOpen={editModalOpen}>
                    <form
                        onSubmit={handleEdit}
                        className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                        <ModalTitle title="Edit Pickup Location" />
                        <input
                            type="text"
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            className="mb-4 w-full border p-2"
                            required
                        />
                        <div className="flex justify-end space-x-2">
                            <Button
                                type="button"
                                onClick={() => setEditModalOpen(false)}
                                className="rounded bg-gray-300 px-4 py-2"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="rounded bg-blue-600 px-4 py-2 text-white"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Modal>

                <Modal isOpen={deleteModalOpen}>
                    <div className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                        <ModalTitle title="Confirm Delete" />
                        <ModalBody>
                            Are you sure you want to delete this pickup
                            location?
                        </ModalBody>
                        <div className="flex justify-end space-x-2">
                            <Button
                                type="button"
                                onClick={() => setDeleteModalOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button onClick={handleDelete}>Delete</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </Layout>
    );
}
