import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import Button from '../../components/button';
import Input from '../../components/input';
import { Modal, ModalTitle } from '../../components/modal';
import { generatePassword } from '../../passwords';
import { copyToClipboard, formatPhoneNumber } from '../../tools';

const RegisterDriver = ({ registerModalOpen, setRegisterModalOpen }) => {
    const [password, setPassword] = useState(null);
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        vehicle_capacity: '',
        password: password,
    });

    useEffect(() => {
        const p = generatePassword();
        setPassword(p);
        setData({ ...data, password: p });
    }, []);

    const handleCancel = (_) => {
        const p = generatePassword();
        setRegisterModalOpen(false);
        setPassword(p);
        setData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            vehicle_capacity: '',
            password: p,
        });
    };

    const handlePhoneChange = (e) => {
        const raw = e.target.value;
        const masked = formatPhoneNumber(raw);
        setData({ ...data, phone: masked });
    };

    const handleRegister = () => {
        router.post('/drivers', data, {
            onSuccess: () => {
                setRegisterModalOpen(false);
                router.visit('/drivers', {
                    preserveScroll: true,
                    preserveState: false,
                    only: ['drivers'], // 🔁 tell Inertia to refetch just this prop
                    replace: true, // 🔁 optional but keeps navigation history clean
                });
            },
        });
    };

    return (
        <Modal isOpen={registerModalOpen}>
            <div>
                <div className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                    <ModalTitle title="Register New Driver" />
                    <Input
                        value={data.first_name}
                        onChange={(e) =>
                            setData({ ...data, first_name: e.target.value })
                        }
                        placeHolder="First Name"
                        required
                    />
                    <Input
                        value={data.last_name}
                        onChange={(e) =>
                            setData({ ...data, last_name: e.target.value })
                        }
                        placeHolder="Last Name"
                        required
                    />
                    <Input
                        value={data.email}
                        onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                        }
                        placeHolder="Email"
                        required
                    />
                    <Input
                        value={data.phone}
                        onChange={handlePhoneChange}
                        placeHolder="Phone"
                        required
                    />
                    <Input
                        value={data.vehicle_capacity}
                        type="number"
                        onChange={(e) =>
                            setData({ ...data, vehicle_capacity: e.target.value })
                        }
                        placeHolder="Vehicle Capacity"
                        required
                        min={1}
                        max={12}
                    />
                    <div
                        onClick={() => copyToClipboard(password)}
                        className="mb-4 cursor-pointer"
                    >
                        <FaRegCopy className="inline" /> Copy password{' '}
                        <span className="font-bold text-red-400">
                            (It will not be available again!)
                        </span>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Button type="button" onClick={() => handleCancel()}>
                            Cancel
                        </Button>
                        <Button type="submit" onClick={handleRegister}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default RegisterDriver;
