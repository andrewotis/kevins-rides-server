import { router } from '@inertiajs/react';
import Button from '../../components/button';
import { Modal, ModalTitle } from '../../components/modal';

const EditLocation = ({ editModalOpen, setEditModalOpen, editDescription, setEditDescription, selectedLocation }) => {
    const handleEdit = (e) => {
        e.preventDefault();
        router.put(
            `/locations/${selectedLocation.id}`,
            {
                description: editDescription,
            },
            {
                onSuccess: () => setEditModalOpen(false),
            },
        );
    };

    return (
        <Modal isOpen={editModalOpen}>
            <form
                onSubmit={handleEdit}
                className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ModalTitle title="Edit Location" />
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
    );
};

export default EditLocation;
