
export class Animation {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(canvasElement : HTMLCanvasElement, ctx : CanvasRenderingContext2D
    ) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.animate()
    }

    private animate() {
        //efface entièrement le canvas
        this.ctx.clearRect(0,0, this.canvasElement.width, this.canvasElement.height)

        //on dessine ce qu'on veut

        //on demande au navigateur de relance la fonction animate 60 fois par seconde pour en faire une animation
        requestAnimationFrame(()=> this.animate())

    }
}