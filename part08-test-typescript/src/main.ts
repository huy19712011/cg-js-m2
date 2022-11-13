export function abs(number: number): number {
    return Math.abs(number);
}

export function sqrt(number: number): number {
    return Math.sqrt(number);
}

export function fizzBuzz(input: any): number | string {

    if (typeof input !== 'number')
        throw new Error('Input should be a number');

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return "Fizz";

    if (input % 5 === 0)
        return "Buzz";

    return input;
}