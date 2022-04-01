interface ITextDocument {
    title: string;
    body: string;
}

class WordTextDocument implements ITextDocument{
    title: string;
    body: string;
    constructor(){}
}

class WriteTextDocument implements ITextDocument{
    title: string;
    body: string;
    constructor(){}
}

interface ISpreadsheet {
    title: string;
    body: string;
    height: number;
    width: number;
}

class ExcelSpreadsheet implements ISpreadsheet {
    title: string;
    body: string;
    height: number;
    width: number;
    constructor(){}
}

class CalcSpreadsheet implements ISpreadsheet {
    title: string;
    body: string;
    height: number;
    width: number;
    constructor(){}
}

interface IOutputDocFactory{
    exportTextDocument(): ITextDocument;
    exportSpreadsheet(): ISpreadsheet;
}

class OfficeFactory implements IOutputDocFactory{
    exportTextDocument(): ITextDocument {
        return new WordTextDocument();
    }
    exportSpreadsheet(): ISpreadsheet {
        return new ExcelSpreadsheet();
    }
}

class OpenOfficeFactory implements IOutputDocFactory{
    exportTextDocument(): ITextDocument {
        return new WriteTextDocument();
    }
    exportSpreadsheet(): ISpreadsheet {
        return new CalcSpreadsheet();
    }
}

class OutputDocument {
    private factory: IOutputDocFactory;
    constructor(factory: IOutputDocFactory) {
        this.factory = factory;
    }

    exportTextDoc(){
        return this.factory.exportTextDocument();
    }

    exportSheetDoc(){
        return this.factory.exportSpreadsheet();
    }
}

let office =  new OfficeFactory();

let openOffice =  new OpenOfficeFactory();

console.log("Office");
let outputDocOffice: OutputDocument = new OutputDocument(office);
console.log(outputDocOffice.exportTextDoc());
console.log(outputDocOffice.exportSheetDoc());

console.log("Open Office");
let outputDocOpenOffice: OutputDocument = new OutputDocument(openOffice);
console.log(outputDocOpenOffice.exportTextDoc());
console.log(outputDocOpenOffice.exportSheetDoc());