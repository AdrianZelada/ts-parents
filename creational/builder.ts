interface IDocument{
    title: string;
    body: string;
    footer: string;
    color: string;
}

class BasicDocument implements IDocument{
    title: string;
    body: string;
    footer: string;
    color: string;
}

class WordDocument implements IDocument{
    title: string;
    body: string;
    footer: string;
    color: string;
}
interface IWriteDocumentBuider {
    setTitle(title: string): this;
    setBody(body: string): this;
    setColorFont(color: string): this;
    setFooter(footer: string): this;
    getResult(): IDocument;
}

class BasicDocumentBuilder implements IWriteDocumentBuider{
    private document: IDocument;
    constructor(){
        this.document = new BasicDocument();
    }
    setTitle(title: string): this {
        this.document.title = title;
        return this;
    }
    setBody(body: string): this {
        this.document.body = body;
        return this;
    }
    setColorFont(color: string): this {
        this.document.color = color;
        return this;
    }
    setFooter(footer: string): this {
        this.document.footer = footer;
        return this;
    }
    getResult(): IDocument {
        return this.document;
    }
}


class WordDocumentBuilder implements IWriteDocumentBuider{
    private document: IDocument;
    constructor(){
        this.document = new WordDocument();
    }
    setTitle(title: string): this {
        this.document.title = title;
        return this;
    }
    setBody(body: string): this {
        this.document.body = body;
        return this;
    }
    setColorFont(color: string): this {
        this.document.color = color;
        return this;
    }
    setFooter(footer: string): this {
        this.document.footer = footer;
        return this;
    }
    getResult(): IDocument {
        return this.document;
    }
}

class DirectorBuilder {
    buildBasicDocument(builder: IWriteDocumentBuider): IDocument{
        return builder.setTitle("Basic Document")
            .setBody("Builder Design Pattern")
            .getResult();
    }

    buildWordDocument(builder: IWriteDocumentBuider): IDocument{
        return builder.setTitle("Word Document")
            .setBody("Builder Design Pattern")
            .setFooter("Adrian Zelada")
            .setColorFont("#000000")
            .getResult();
    }
}

let director: DirectorBuilder = new DirectorBuilder();

let basicDocumentBuilder: BasicDocumentBuilder = new BasicDocumentBuilder();
let wordDocumentBuilder: WordDocumentBuilder = new WordDocumentBuilder();

let basicDocument: IDocument = director.buildBasicDocument(basicDocumentBuilder);
let wordDocument: IDocument = director.buildWordDocument(wordDocumentBuilder);

console.log("basicDocument");
console.log(basicDocument);

console.log("wordDocument");
console.log(wordDocument);
