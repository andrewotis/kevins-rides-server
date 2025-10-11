import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { Modal, ModalTitle } from '../../components/modal';
import Switch from '../../components/switch';
import { formatPhoneNumber } from '../../tools';

const EditDriver = ({ editModalOpen, setEditModalOpen, selectedDriver }) => {
    const [editDriverData, setEditDriverData] = useState(null);

    useEffect(() => {
        setEditDriverData(selectedDriver);
    }, [selectedDriver]);

    const handleEdit = (e) => {
        e.preventDefault();
        router.put(`/drivers/${selectedDriver.id}`, editDriverData, {
            onSuccess: () => {
                router.visit('/drivers');
                setEditModalOpen(false);
            },
        });
    };

    const handlePhoneChange = (e) => {
        const raw = e.target.value;
        const masked = formatPhoneNumber(raw);
        setEditDriverData({
            ...editDriverData,
            phone: masked,
        });
    };

    return editDriverData === null ? null : (
        <Modal isOpen={editModalOpen}>
            <form
                onSubmit={handleEdit}
                className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ModalTitle title="Edit Driver" />
                <Input
                    value={editDriverData.first_name}
                    onChange={(e) =>
                        setEditDriverData({
                            ...editDriverData,
                            first_name: e.target.value,
                        })
                    }
                />
                <Input
                    value={editDriverData.last_name}
                    onChange={(e) =>
                        setEditDriverData({
                            ...editDriverData,
                            last_name: e.target.value,
                        })
                    }
                />
                <Input
                    value={editDriverData.email}
                    onChange={(e) =>
                        setEditDriverData({
                            ...editDriverData,
                            email: e.target.value,
                        })
                    }
                />
                <Input
                    value={editDriverData.phone}
                    onChange={handlePhoneChange}
                />
                <Input
                        value={editDriverData.vehicle_capacity}
                        type="number"
                        onChange={(e) =>
                            setData({ ...editDriverData, vehicle_capacity: e.target.value })
                        }
                        placeHolder="Vehicle Capacity"
                        required
                        min={1}
                        max={12}
                    />

                <Switch
                    label="Account Active"
                    enabled={editDriverData.active === 1}
                    onChange={(val) =>
                        setEditDriverData({
                            ...editDriverData,
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

export default EditDriver;
