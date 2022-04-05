// Prototype
// Use the Prototype Pattern when creating an instance of a given class is either expensive or complicated.

interface IDocument{
    title: string;
    body: string;
    footer: string;
    color: string;
    clone(): this;
}

class WordDocument implements IDocument{
    title: string;
    body: string;
    footer: string;
    color: string;
    clone(): this {
        return {
            ...this
        }        
    }
}
interface IWriteDocumentBuider {
    setTitle(title: string): this;
    setBody(body: string): this;
    setColorFont(color: string): this;
    setFooter(footer: string): this;
    getResult(): IDocument;
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
    buildWordDocument(builder: IWriteDocumentBuider): IDocument{
        return builder.setTitle("Word Document")
            .setBody("Builder Design Pattern")
            .setFooter("Adrian Zelada")
            .setColorFont("#000000")
            .getResult();
    }
}

let director: DirectorBuilder = new DirectorBuilder();
let wordDocumentBuilder: WordDocumentBuilder = new WordDocumentBuilder();

let wordDocument: IDocument = director.buildWordDocument(wordDocumentBuilder);

let wordCloneDocument: IDocument = wordDocument.clone();
wordCloneDocument.title = "Word Clone Document";
wordCloneDocument.body = "Prototype Design Pattern";
wordCloneDocument.footer = "Walter Zelada";

console.log("word Document");
console.log(wordDocument);

console.log("word Clone Document");
console.log(wordCloneDocument);
