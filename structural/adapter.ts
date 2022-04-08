// en un juego tentemos una libreria implementada especificamente para la renderizacion del juego, pero ahora por el crecimiento de la aplicacion se necesita implementar otra 
// libreria para la renderizacion de imagenes, el reto es que ambas sean capaces de trabajar juntas, por un mismo canal de comunicacion
interface IPlayerCanvas{
    renderMove();
}

class PlayerCanvas implements IPlayerCanvas{
    constructor(){}
    renderMove() {
        console.log('Move Render Player');
    }
}

interface IImagesSVG{
    buildImage();
}

class ImagesSVG implements IImagesSVG{
    buildImage() {
        console.log('Move Build Image');
    }
}

class PlayerImageAdapter implements IPlayerCanvas{
    private imageSVG: ImagesSVG;
    constructor(){
        this.imageSVG = new ImagesSVG();
    }

    renderMove() {
        this.imageSVG.buildImage();
    }
}


const scene = [new PlayerCanvas(), new PlayerImageAdapter()];

scene.forEach((item: IPlayerCanvas) => {
    item.renderMove();
});