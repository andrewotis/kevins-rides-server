export const ModalTitle = ({ title }) => {
    return <h2 className="mb-4 text-xl font-semibold">{title}</h2>;
};

export const Modal = ({ isOpen, onClose = () => {}, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm"
            onClick={onClose}
        >
            {children}
        </div>
    );
};

export const ModalBody = ({ children }) => {
    return <p className="mb-4">{children} </p>;
};
