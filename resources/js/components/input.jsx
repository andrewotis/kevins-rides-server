const Input = ({ value, type="text", onChange, className, required=false, placeHolder="", disabled=false }) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeHolder}
            onChange={onChange}
            className={`mb-4 w-full rounded border p-2 ${className}`}
            required={required}
            disabled={disabled}
        />
    );
};

export default Input;