import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import DriversIndex from '.';
import Button from '../../components/button';
import Layout from '../../components/layout';
import DeleteUser from '../riders/delete';
import EditDriver from './edit';
import RegisterDriver from './register';
import ResetPassword from '../riders/reset-password';

export default function Drivers() {
    const { props } = usePage();
    const user = props.auth?.user;

    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [resetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState(null);

    const openEditModal = (driver) => {
        setSelectedDriver(driver);
        setEditModalOpen(true);
    };

    const openResetPasswordModal = (driver) => {
        setSelectedDriver(driver);
        setResetPasswordModalOpen(true);
    };

    const openDeleteModal = (driver) => {
        setSelectedDriver(driver);
        setDeleteModalOpen(true);
    };

    return (
        <Layout user={user} currentPage="drivers">
            <div className="flex-grow p-8">
                <h2 className="mb-4 text-2xl">Drivers</h2>
                <ul className="space-y-4">
                    <Button onClick={() => setRegisterModalOpen(true)}>
                        Register Driver
                    </Button>

                    <DriversIndex
                        drivers={props.drivers || []}
                        openEditModal={openEditModal}
                        openResetPasswordModal={openResetPasswordModal}
                        openDeleteModal={openDeleteModal}
                    />
                </ul>

                <RegisterDriver
                    registerModalOpen={registerModalOpen}
                    setRegisterModalOpen={setRegisterModalOpen}
                />

                <EditDriver
                    editModalOpen={editModalOpen}
                    setEditModalOpen={setEditModalOpen}
                    selectedDriver={selectedDriver}
                />

                <ResetPassword
                    resetPasswordModalOpen={resetPasswordModalOpen}
                    setResetPasswordModalOpen={setResetPasswordModalOpen}
                    selectedUser={selectedDriver}
                    selectedUserType="Driver"
                />

                <DeleteUser
                    deleteModalOpen={deleteModalOpen}
                    setDeleteModalOpen={setDeleteModalOpen}
                    selectedUser={selectedDriver}
                    selectedUserType="Driver"
                />
            </div>
        </Layout>
    );
}
