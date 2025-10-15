import { router } from '@inertiajs/react';
import { Modal, ModalBody, ModalTitle } from '../../components/modal';
import Button from '../../components/button';

const DeleteLocation = ({
    deleteModalOpen,
    setDeleteModalOpen,
    selectedLocation,
}) => {
    const handleDelete = () => {
        router.delete(`/locations/${selectedLocation.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteModalOpen(false),
        });
    };

    return (
        <Modal isOpen={deleteModalOpen}>
            <div className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                <ModalTitle title="Confirm Delete" />
                <ModalBody>
                    Are you sure you want to delete this location?
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
    );
};

export default DeleteLocation;
