import { router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import Button from '../../components/button';
import { Modal, ModalBody, ModalTitle } from '../../components/modal';
import { generatePassword } from '../../passwords';
import { copyToClipboard } from '../../tools';

const ResetPassword = ({
    resetPasswordModalOpen,
    setResetPasswordModalOpen,
    selectedUser,
    selectedUserType = 'User',
}) => {
    const [confirmed, setConfirmed] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        setNewPassword('');
        setConfirmed(false);
    },[selectedUser]);

    const handleConfirm = (_) => {
        const p = generatePassword();
        setNewPassword(p);

        router.put(
            `/${selectedUserType.toLowerCase()}s/${selectedUser.id}/password`,
            {
                password: p,
            },
            {
                onSuccess: () => setConfirmed(true),
            },
        );
    };

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
                                onClick={() => handleConfirm()}
                                className="rounded bg-blue-600 px-4 py-2 text-white"
                            >
                                Reset
                            </Button>
                        </div>
                    </>
                )}
                {confirmed && (
                    <>
                        <ModalBody>Password was reset successfully.</ModalBody>
                        <ModalBody>
                            <div
                                className="cursor-pointer"
                                onClick={() => copyToClipboard(newPassword)}
                            >
                                <FaRegCopy className="inline mr-2"/> Copy password to clipboard
                            </div>
                        </ModalBody>
                        <div className="flex justify-end space-x-2">
                            <Button
                                type="button"
                                onClick={() => setResetPasswordModalOpen(false)}
                                className="rounded bg-gray-300 px-4 py-2"
                            >
                                Close
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default ResetPassword;
