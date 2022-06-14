import {Background} from "./Background";

export class Canvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    background : Background;

    constructor(canvasElement : HTMLCanvasElement, ctx : CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.background = new Background(this.canvasElement, this.ctx);
    }
}