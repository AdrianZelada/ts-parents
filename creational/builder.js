var BasicDocument = /** @class */ (function () {
    function BasicDocument() {
    }
    return BasicDocument;
}());
var WordDocument = /** @class */ (function () {
    function WordDocument() {
    }
    return WordDocument;
}());
var BasicDocumentBuilder = /** @class */ (function () {
    function BasicDocumentBuilder() {
        this.document = new BasicDocument();
    }
    BasicDocumentBuilder.prototype.setTitle = function (title) {
        this.document.title = title;
        return this;
    };
    BasicDocumentBuilder.prototype.setBody = function (body) {
        this.document.body = body;
        return this;
    };
    BasicDocumentBuilder.prototype.setColorFont = function (color) {
        this.document.color = color;
        return this;
    };
    BasicDocumentBuilder.prototype.setFooter = function (footer) {
        this.document.footer = footer;
        return this;
    };
    BasicDocumentBuilder.prototype.getResult = function () {
        return this.document;
    };
    return BasicDocumentBuilder;
}());
var WordDocumentBuilder = /** @class */ (function () {
    function WordDocumentBuilder() {
        this.document = new WordDocument();
    }
    WordDocumentBuilder.prototype.setTitle = function (title) {
        this.document.title = title;
        return this;
    };
    WordDocumentBuilder.prototype.setBody = function (body) {
        this.document.body = body;
        return this;
    };
    WordDocumentBuilder.prototype.setColorFont = function (color) {
        this.document.color = color;
        return this;
    };
    WordDocumentBuilder.prototype.setFooter = function (footer) {
        this.document.footer = footer;
        return this;
    };
    WordDocumentBuilder.prototype.getResult = function () {
        return this.document;
    };
    return WordDocumentBuilder;
}());
var DirectorBuilder = /** @class */ (function () {
    function DirectorBuilder() {
    }
    DirectorBuilder.prototype.buildBasicDocument = function (builder) {
        return builder.setTitle("Word Document")
            .setBody("Builder Design Pattern")
            .getResult();
    };
    DirectorBuilder.prototype.buildWordDocument = function (builder) {
        return builder.setTitle("Word Document")
            .setBody("Builder Design Pattern")
            .setFooter("Adrian Zelada")
            .setColorFont("#000000")
            .getResult();
    };
    return DirectorBuilder;
}());
var director = new DirectorBuilder();
var basicDocumentBuilder = new BasicDocumentBuilder();
var wordDocumentBuilder = new WordDocumentBuilder();
var basicDocument = director.buildBasicDocument(basicDocumentBuilder);
var wordDocument = director.buildWordDocument(wordDocumentBuilder);
console.log("basicDocument");
console.log(basicDocument);
console.log("wordDocument");
console.log(wordDocument);
