var PlayerCanvas = /** @class */ (function () {
    function PlayerCanvas() {
    }
    PlayerCanvas.prototype.renderMove = function () {
        console.log('Move Render Player');
    };
    return PlayerCanvas;
}());
var ImagesSVG = /** @class */ (function () {
    function ImagesSVG() {
    }
    ImagesSVG.prototype.buildImage = function () {
        console.log('Move Build Image');
    };
    return ImagesSVG;
}());
var PlayerImageAdapter = /** @class */ (function () {
    function PlayerImageAdapter() {
        this.imageSVG = new ImagesSVG();
    }
    PlayerImageAdapter.prototype.renderMove = function () {
        this.imageSVG.buildImage();
    };
    return PlayerImageAdapter;
}());
var scene = [new PlayerCanvas(), new PlayerImageAdapter()];
scene.forEach(function (item) {
    item.renderMove();
});
