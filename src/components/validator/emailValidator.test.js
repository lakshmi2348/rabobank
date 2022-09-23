import { isValidEmail } from './emailValidator';

describe('test email validator', () => {
    
    it('test valid email', async () => {
        const email = 'priya.sagu@gmail.com';
        const isValid = isValidEmail(email);
        expect(isValid).toBeTruthy;
    });

    it('test invalid email', async () => {
        const email = 'priya';
        const isValid = isValidEmail(email);
        expect(isValid).toBeFalsy;
    });
});