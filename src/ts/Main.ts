import {GameController} from "./GameController";

// on va créer une classe main
class Main {
    //on type les propriétés de la classe
    //gameController est propriété de la une classe de type GameController)
    private gameController: GameController;

    //le constructeur d'une classe est utilisé pour initialiser et créer un objet
    constructor() {
        //on initialise gameController en disant que c'est un nouvel objet class
        this.gameController = new GameController();
    }


}

new Main();