class Calculator {
    private static readonly ADDITION = '+';

    public static calculate(a: number, b: number, o: string): number | string {
        switch (o) {
            case this.ADDITION:
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
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