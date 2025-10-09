import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../../components/button';
import Layout from '../../components/layout';
import { Modal, ModalBody, ModalTitle } from '../../components/modal';

export default function Rides() {
    const { props } = usePage();
    const user = props.auth?.user;

    return (
        <Layout user={user}>
            <div className="flex-grow p-8">
                <h2 className="mb-4 text-2xl">Rides</h2>
                <ul className="space-y-4">
                    <Button onClick={() => setCreateModalOpen(true)}>
                        Create Ride
                    </Button>
                </ul>
            </div>
        </Layout>
    );
}