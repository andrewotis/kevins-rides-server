import { useState } from 'react';
import { router } from '@inertiajs/react';
import Button from '../../components/button';
import { Modal, ModalTitle } from '../../components/modal';

const CreatePickupLocation = ({ createModalOpen, setCreateModalOpen }) => {
    const [newDescription, setNewDescription] = useState('');

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
    );
};

export default CreatePickupLocation;
