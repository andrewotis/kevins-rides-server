import { useState } from 'react';
import { Modal, ModalTitle, ModalBody } from '../../components/modal';

const ResetPassword = ({
    resetPasswordModalOpen,
    setResetPasswordModalOpen,
    selectedUser,
    selectedUserType="User"
}) => {
    const [confirmed, setConfirmed] = useState(false);

    return (
        <Modal isOpen={resetPasswordModalOpen}>
            <div className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                <ModalTitle title={`Delete ${selectedUserType}`} />
                {!confirmed && <ModalBody>Are you sure you want to delete this {selectedUserType.toLowerCase()}?</ModalBody>}
            </div>
        </Modal>
    );
};

export default ResetPassword;
