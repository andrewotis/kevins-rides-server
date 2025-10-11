const Input = ({
  value,
  type = 'text',
  onChange,
  className,
  required = false,
  placeHolder = '',
  disabled = false,
  min,
  max,
}) => {
  const conditionalProps = {
    ...(min !== undefined && { min }),
    ...(max !== undefined && { max }),
  };

  return (
    <input
      type={type}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      className={`mb-4 w-full rounded border p-2 ${className}`}
      required={required}
      disabled={disabled}
      {...conditionalProps}
    />
  );
};

export default Input;