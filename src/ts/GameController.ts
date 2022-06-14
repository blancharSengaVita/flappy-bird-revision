import {Animation} from "./Animation";


export class GameController {
    canvasElement : HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    Animation : Animation;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
        this.Animation = new Animation(this.canvasElement, this.ctx);
    }
}