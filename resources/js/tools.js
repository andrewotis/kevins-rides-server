export const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
};

export const formatPhoneNumber = (value) => {
  // Strip non-digit characters
  const digits = value.replace(/\D/g, '').slice(0, 10); // max 10 digits

  // Build formatted string
  let formatted = '';
  if (digits.length > 0) formatted += '(' + digits.slice(0, 3);
  if (digits.length >= 4) formatted += ') ' + digits.slice(3, 6);
  if (digits.length >= 7) formatted += '-' + digits.slice(6, 10);

  return formatted;
}
