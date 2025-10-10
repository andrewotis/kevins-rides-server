import { useState } from 'react';
import { Modal, ModalBody, ModalTitle } from '../../components/modal';
import Button from '../../components/button';

const ResetPassword = ({
    resetPasswordModalOpen,
    setResetPasswordModalOpen,
    selectedUser,
    selectedUserType = 'User',
}) => {
    const [confirmed, setConfirmed] = useState(false);

    return (
        <Modal isOpen={resetPasswordModalOpen}>
            <div className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                <ModalTitle
                    title={`Reset ${selectedUserType.toLowerCase()} password`}
                />
                {!confirmed && (
                    <>
                        <ModalBody>
                            Are you sure you want to reset this{' '}
                            {selectedUserType.toLowerCase()}'s password?
                        </ModalBody>
                        <div className="flex justify-end space-x-2">
                            <Button
                                type="button"
                                onClick={() => setResetPasswordModalOpen(false)}
                                className="rounded bg-gray-300 px-4 py-2"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                onClick={() => setConfirmed(true)}
                                className="rounded bg-blue-600 px-4 py-2 text-white"
                            >
                                Reset
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default ResetPassword;
