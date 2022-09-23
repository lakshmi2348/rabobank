import { isValidPassword } from './passwordValidator';

describe('test password validator', () => {
    const user = {
        firstName: "Lakshmi",
        lastName: "Bhaskar",
        email: "priya.sagu@gmail.com",
        password: ""
    }

    it('test valid password', async () => {
        const password = 'Qwertyui';
        const isValid = isValidPassword(password, user);
        expect(isValid).toBeTruthy;
    });

    it('test invalid password with less than 8 characters', async () => {
        const password = 'tyui';
        const isValid = isValidPassword(password, user);
        expect(isValid).toBeFalsy;
    });

    it('test invalid password with less all lowercase letters', async () => {
        const password = 'tyuisdfasfd';
        const isValid = isValidPassword(password, user);
        expect(isValid).toBeFalsy;
    });

    it('test invalid password with username in it', async () => {
        const password = 'Lakshmii';
        const isValid = isValidPassword(password, user);
        expect(isValid).toBeFalsy;
    });
});