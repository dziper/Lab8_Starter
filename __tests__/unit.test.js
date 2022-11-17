// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
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
