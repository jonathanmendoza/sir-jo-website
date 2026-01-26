export const isValidPhilippineNumber = (value: string) => /^(09|\+639)\d{9}$/.test(value);

export const normalizePhilippineNumber = (value: string): string | null => {
    if (!value) return null;

    // Remove all non-digit characters first (spaces, hyphens, etc.)
    const digits = value.replace(/\D/g, '');

    // Handle formats like:
    // 09171234567  -> 639171234567
    // +639171234567 -> 639171234567
    // 9171234567   -> 639171234567 (optional handling)
    let normalized = '';

    if (/^09\d{9}$/.test(digits)) {
        normalized = '63' + digits.slice(1);
    } else if (/^639\d{9}$/.test(digits)) {
        normalized = digits;
    } else if (/^9\d{9}$/.test(digits)) {
        normalized = '63' + digits;
    } else {
        return null; // invalid number
    }

    return normalized;
};
