class Circle{
    private radius: number;
    private size: number;

    constructor(radius: number, size: number) {
        this.radius = radius;
        this.size = size;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }


    getSize(): number {
        return this.size;
    }

    setSize(value: number) {
        this.size = value;
    }

    toString(): string {
        return "A Circle with radius= "
            + this.getRadius();
    }

}

interface Comparable {
    compareTo(o: Object): number;
}

let circles = [];
const circles1 = new Circle(10, 40);
const circles2 = new Circle(20, 30);
const circles3 = new Circle(30, 20);

circles.push(circles1, circles2, circles3);
console.log(circles);


circles.sort((o1, o2) => o1.getSize() - o2.getSize());
console.log(circles);

circles.sort();
console.log(circles);
