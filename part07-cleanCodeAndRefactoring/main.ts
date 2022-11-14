class Calculator {
    private static readonly ADDITION = '+';

    private static readonly SUB = '-';

    private static readonly MULTIPLY = '*';

    private static readonly DIVIDE = '/';

    public static calculate(a: number, b: number, o: string): number | string {
        switch (o) {
            case this.ADDITION:
                return a + b;
            case this.SUB:
                return a - b;
            case this.MULTIPLY:
                return a * b;
            case this.DIVIDE:
                if (b != 0)
                    return a / b;
                return "Can not divide by 0";
            default:
                return "Unsupported operation";
        }
    }
}

let result = Calculator.calculate(10, 0, '/');
console.log(result);