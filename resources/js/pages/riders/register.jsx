import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import Button from '../../components/button';
import Input from '../../components/input';
import { Modal, ModalTitle } from '../../components/modal';
import { generatePassword } from '../../passwords';
import { copyToClipboard, formatPhoneNumber } from '../../tools';

const RegisterRider = ({ registerModalOpen, setRegisterModalOpen }) => {
    const [password, setPassword] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: password,
    });

    useEffect(() => {
        const p = generatePassword();
        setPassword(p);
        setData('password', p);
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
            password: p,
        });
    };

    const handlePhoneChange = (e) => {
        const raw = e.target.value;
        const masked = formatPhoneNumber(raw);
        setData('phone', masked);
    };

    const handleRegister = (_) => {
        post('/riders');
    };

    return (
        <Modal isOpen={registerModalOpen}>
            <form onSubmit={() => {}}>
                <div className="w-full max-w-md rounded bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                    <ModalTitle title="Register New Rider" />
                    <Input
                        value={data.first_name}
                        onChange={(e) => setData('first_name', e.target.value)}
                        placeHolder="First Name"
                        required
                    />
                    <Input
                        value={data.last_name}
                        onChange={(e) => setData('last_name', e.target.value)}
                        placeHolder="Last Name"
                        required
                    />
                    <Input
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeHolder="Email"
                        required
                    />
                    <Input
                        value={data.phone}
                        onChange={handlePhoneChange}
                        placeHolder="Phone"
                        required
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
            </form>
        </Modal>
    );
};

export default RegisterRider;
