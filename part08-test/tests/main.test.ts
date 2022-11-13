import {describe, expect, test} from '@jest/globals';
import abs from "../main";

describe("abs()", () => {
    test('return positive', () => {
       expect(abs(1)).toBe(1);
    });
});