const randomAlphaMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const randomUpperMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomLowerMap = 'abcdefghijklmnopqrstuvwxyz';
const randomNumberMap = '0123456789';
const randomSpecialMap = '!@#$%^&*()-_=+<>?,./;:\'"[{]}]\\|';

const getRandomChar = (map) => map[Math.floor(Math.random() * map.length)];

export const generatePassword = (length = 14) => {
    if (length < 8) throw new Error('Password length must be at least 8');

    const required = [
        getRandomChar(randomUpperMap),
        getRandomChar(randomUpperMap),
        getRandomChar(randomLowerMap),
        getRandomChar(randomLowerMap),
        getRandomChar(randomNumberMap),
        getRandomChar(randomNumberMap),
        getRandomChar(randomSpecialMap),
        getRandomChar(randomSpecialMap),
    ];

    const remainingLength = length - required.length;
    const fullMap = randomAlphaMap + randomNumberMap + randomSpecialMap;
    for (let i = 0; i < remainingLength; i++) {
        required.push(getRandomChar(fullMap));
    }

    // Shuffle the result to avoid predictable patterns
    for (let i = required.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [required[i], required[j]] = [required[j], required[i]];
    }

    return required.join('');
};
