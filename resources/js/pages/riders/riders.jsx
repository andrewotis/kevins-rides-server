import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import RidersIndex from '.';
import Button from '../../components/button';
import Layout from '../../components/layout';
import RegisterRider from './register';
import EditRider from './edit';
import ResetPassword from './reset-password';

export default function Riders() {
    const { props } = usePage();
    const user = props.auth?.user;

    const riders = props.riders || [];

    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [resetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);
    const [selectedRider, setSelectedRider] = useState(null);
    

    const openEditModal = (rider) => {
        setSelectedRider(rider);
        setEditModalOpen(true);
    };

    const openResetPasswordModal = (rider) => {
        setSelectedRider(rider);
        setResetPasswordModalOpen(true);
    }

    const openDeleteModal = (rider) => {
        // setSelectedLocation(location);
        // setDeleteModalOpen(true);
    };

    return (
        <Layout user={user} currentPage="riders">
            <div className="flex-grow p-8">
                <h2 className="mb-4 text-2xl">Riders</h2>
                <ul className="space-y-4">
                    <Button onClick={() => setRegisterModalOpen(true)}>
                        Register Rider
                    </Button>

                    <RidersIndex
                        riders={riders}
                        openEditModal={openEditModal}
                        openResetPasswordModal={openResetPasswordModal}
                        openDeleteModal={openDeleteModal}
                    />
                </ul>

                <RegisterRider
                    registerModalOpen={registerModalOpen}
                    setRegisterModalOpen={setRegisterModalOpen}
                />

                <EditRider 
                    editModalOpen={editModalOpen}
                    setEditModalOpen={setEditModalOpen}
                    selectedRider={selectedRider}
                />

                <ResetPassword
                    resetPasswordModalOpen={resetPasswordModalOpen}
                    setResetPasswordModalOpen={setResetPasswordModalOpen}
                    selectedUser={selectedRider}
                    selectedUserType='Rider'
                />
            </div>
        </Layout>
    );
}
