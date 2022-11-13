// import {describe, expect, test} from '@jest/globals';
// const main = require("main");
import {abs, sqrt, fizzBuzz} from "./main";

describe("abs()", () => {
    test('return positive', () => {
        expect(abs(1)).toBe(1);
    });
});

describe('sqrt()', () => {
    test('return sqrt of number', () => {
        expect(sqrt(16)).toBe(4);
    });
});

describe('fizzBuzz()', () => {
    it('should throw an exception if input is not a number', () => {
        expect(() => { fizzBuzz('a'); }).toThrow();
        expect(() => { fizzBuzz(null); }).toThrow();
        expect(() => { fizzBuzz(undefined); }).toThrow();
        expect(() => { fizzBuzz({}); }).toThrow();
    });
    it('should return "FizzBuzz" if input divisible by 3 and 5', () => {
        const result = fizzBuzz(15);
        expect(result).toEqual('FizzBuzz');
    });
    it('should return "Fizz" if input divisible by 3', () => {
        const result = fizzBuzz(3);
        expect(result).toEqual('Fizz');
    });
    it('should return "Buzz" if input divisible by 5', () => {
        const result = fizzBuzz(5);
        expect(result).toEqual('Buzz');
    });
    it('should return number if input is number', () => {
        const result = fizzBuzz(1);
        expect(result).toBe(1);
    });
});