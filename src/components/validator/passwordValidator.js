export const isValidPassword = (password, user) => {
    return /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           !(password).includes(user.firstName) &&
           !(password).includes(user.lastName) &&
           password.length >= 8;
}