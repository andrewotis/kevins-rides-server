import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { Modal, ModalTitle } from '../../components/modal';
import Switch from '../../components/switch';
import { formatPhoneNumber } from '../../tools';

const EditRider = ({ editModalOpen, setEditModalOpen, selectedRider }) => {
    const [editRiderData, setEditRiderData] = useState(null);

    useEffect(() => {
        setEditRiderData(selectedRider);
    }, [selectedRider]);

    const handleEdit = (e) => {
        e.preventDefault();
        router.put(`/riders/${selectedRider.id}`, editRiderData, {
            onSuccess: () => {
                router.visit('/riders');
                setEditModalOpen(false);
            },
        });
    };

    const handlePhoneChange = (e) => {
        const raw = e.target.value;
        const masked = formatPhoneNumber(raw);
        setEditRiderData({
            ...editRiderData,
            phone: masked,
        });
    };

    return editRiderData === null ? null : (
        <Modal isOpen={editModalOpen}>
            <form
                onSubmit={handleEdit}
                className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ModalTitle title="Edit Rider" />
                <Input
                    value={editRiderData.first_name}
                    onChange={(e) =>
                        setEditRiderData({
                            ...editRiderData,
                            first_name: e.target.value,
                        })
                    }
                />
                <Input
                    value={editRiderData.last_name}
                    onChange={(e) =>
                        setEditRiderData({
                            ...editRiderData,
                            last_name: e.target.value,
                        })
                    }
                />
                <Input
                    value={editRiderData.email}
                    onChange={(e) =>
                        setEditRiderData({
                            ...editRiderData,
                            email: e.target.value,
                        })
                    }
                />
                <Input
                    value={editRiderData.phone}
                    onChange={handlePhoneChange}
                />

                <Switch
                    label="Account Active"
                    enabled={editRiderData.active === 1}
                    onChange={(val) =>
                        setEditRiderData({
                            ...editRiderData,
                            active: val ? 1 : 0,
                        })
                    }
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

export default EditRider;
