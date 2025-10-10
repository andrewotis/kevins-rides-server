import { router } from '@inertiajs/react';
import Button from '../../components/button';
import { Modal, ModalBody, ModalTitle } from '../../components/modal';

const DeleteUser = ({
    deleteModalOpen,
    setDeleteModalOpen,
    selectedUser,
    selectedUserType = 'User',
}) => {
    const handleConfirm = () => {
        router.delete(
            `/${selectedUserType.toLowerCase()}s/${selectedUser.id}`,
            {
                onSuccess: () => {
                    setDeleteModalOpen(false); // close modal
                    router.visit('/riders', {
                        preserveState: false,
                        preserveScroll: true,
                        only: ['riders'], // optional: limit what props to reload
                    });
                },
            },
        );
    };

    return (
        <Modal isOpen={deleteModalOpen}>
            <div className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                <ModalTitle title={`Delete ${selectedUserType}`} />
                <ModalBody>
                    Are you sure you want to delete this{' '}
                    {selectedUserType.toLowerCase()}?
                </ModalBody>
                <div className="flex justify-end space-x-2">
                    <Button
                        type="button"
                        onClick={() => setDeleteModalOpen(false)}
                        className="rounded bg-gray-300 px-4 py-2"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        onClick={() => handleConfirm()}
                        className="rounded bg-red-600 px-4 py-2 text-white dark:bg-red-600 dark:text-white"
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteUser;
