export const formatPhoneNumber = async (phoneNumber: string) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (cleanedPhoneNumber.length === 9) {
        const formattedPhoneNumber = `${cleanedPhoneNumber.slice(0, 2)}-${cleanedPhoneNumber.slice(2, 5)}-${cleanedPhoneNumber.slice(5)}`;
        return formattedPhoneNumber;
    } else if (cleanedPhoneNumber.length === 10) {
        const formattedPhoneNumber = `${cleanedPhoneNumber.slice(0, 3)}-${cleanedPhoneNumber.slice(3, 6)}-${cleanedPhoneNumber.slice(6)}`;
        return formattedPhoneNumber;
    } else {
        throw new Error('Invalid phone number length');
    }
}
