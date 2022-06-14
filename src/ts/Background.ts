import{settings} from "./settings";

export class Background {
    private sprite: HTMLImageElement;
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    // pour afficher le backgorund on aura besoin d'un canvas pour savoir ou l'afficher
    constructor(canvasElement:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        //on charge initialise le spirte (on va aussi typer la propriété au dessus)
        this.sprite = new Image();
        this.createImage();
        this.draw();
    }

    draw(){
        //permet de donner les coordonnées pour qu'on créer l'image
        this.ctx.drawImage(
            this.sprite,
            settings.sprite.day.sx,
            settings.sprite.day.sy,
            settings.sprite.day.sw,
            settings.sprite.day.sh,
            settings.sprite.day.dx,
            settings.sprite.day.dy,
            settings.sprite.day.dw,
            settings.sprite.day.dh);
    }

    createImage() {
        // on donne la source de l'image au sprites
        this.sprite.src = settings.sprite.src;
        //on dit qu'il faut que l'image soit entierement chargé avant de la dessiner
        this.sprite.addEventListener("load", ()=>{
            this.draw();
        })
    }
}