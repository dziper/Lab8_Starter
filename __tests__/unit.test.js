// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// email
test('check regular email', () => {
    expect(functions.isEmail("abc@gmail.com")).toBe(true);
});

test('check bad email no @', () => {
    expect(functions.isEmail("abcgmail.com")).toBe(false);
});

test('check long email', () => {
    expect(functions.isEmail("abclaksjdhfaskjdhflkashdflkjhdsaflh@gmaildafasdfasdfasdf.com")).toBe(true);
});

test('check bad email ending', () => {
    expect(functions.isEmail("abc@gmail.comsad")).toBe(false);
});

// phone
test('check regular phone', () => {
    expect(functions.isPhoneNumber("123-232-2232")).toBe(true);
});

test('check bad abc phone', () => {
    expect(functions.isPhoneNumber("123-abc-2232")).toBe(false);
});

test('check bad phone no hyphen', () => {
    expect(functions.isPhoneNumber("1232222232")).toBe(false);
});

test('check phone ext', () => {
    expect(functions.isPhoneNumber("123-232-223212")).toBe(true);
});

// strongPassword
test('checks strong password 1', () => {
    expect(functions.isStrongPassword('Mypassword14_')).toBe(true);
});
test('checks strong password 2', () => {
    expect(functions.isStrongPassword('Hey124__')).toBe(true);
});
test('checks bad password 1', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});
test('checks bad password 2', () => {
    expect(functions.isStrongPassword('thispasswordistoolong')).toBe(false);
});
// isDate
test('checks valid date 1', () => {
    expect(functions.isDate('11/23/2002')).toBe(true);
});
test('checks valid date 2', () => {
    expect(functions.isDate('01/03/1999')).toBe(true);
});
test('checks invalid date 1', () => {
    expect(functions.isDate('01/03/199')).toBe(false);
});
test('checks invalid date 2', () => {
    expect(functions.isDate('1//1999')).toBe(false);
});
// isHexColor
test('checks valid hex color', () => {
    expect(functions.isHexColor('FF5733')).toBe(true);
});
test('checks valid hex color 2', () => {
    expect(functions.isHexColor('CA4D32')).toBe(true);
});
test('checks invalid hex color 1', () => {
    expect(functions.isHexColor('A')).toBe(false);
});
test('checks invalid hex color 2', () => {
    expect(functions.isHexColor('BB')).toBe(false);
});