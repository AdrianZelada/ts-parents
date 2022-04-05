var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var WordDocument = /** @class */ (function () {
    function WordDocument() {
    }
    WordDocument.prototype.clone = function () {
        return __assign({}, this);
    };
    return WordDocument;
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
var wordDocumentBuilder = new WordDocumentBuilder();
var wordDocument = director.buildWordDocument(wordDocumentBuilder);
var wordCloneDocument = wordDocument.clone();
wordCloneDocument.title = "Word Clone Document";
wordCloneDocument.body = "Prototype Design Pattern";
wordCloneDocument.footer = "Walter Zelada";
console.log("word Document");
console.log(wordDocument);
console.log("word Clone Document");
console.log(wordCloneDocument);
