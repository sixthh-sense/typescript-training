import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(theX: number, theY: number, private _width: number, private _height: number) {
        super(theX, theY);
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, height=${this._height}`;
    }

    calculateArea(): number {
        return this._width * this._height;
    }
}