export const formatPhoneNumber = async (phoneNumber : string) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (cleanedPhoneNumber.length !== 10) {
        throw new Error('Invalid phone number length');
    }
    const formattedPhoneNumber = `${cleanedPhoneNumber.slice(0, 3)}-${cleanedPhoneNumber.slice(3, 6)}-${cleanedPhoneNumber.slice(6)}`;
    return formattedPhoneNumber;
} 