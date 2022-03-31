var WordTextDocument = /** @class */ (function () {
    function WordTextDocument() {
    }
    return WordTextDocument;
}());
var WriteTextDocument = /** @class */ (function () {
    function WriteTextDocument() {
    }
    return WriteTextDocument;
}());
var ExcelSpreadsheet = /** @class */ (function () {
    function ExcelSpreadsheet() {
    }
    return ExcelSpreadsheet;
}());
var CalcSpreadsheet = /** @class */ (function () {
    function CalcSpreadsheet() {
    }
    return CalcSpreadsheet;
}());
var OfficeFactory = /** @class */ (function () {
    function OfficeFactory() {
    }
    OfficeFactory.prototype.exportTextDocument = function () {
        return new WordTextDocument();
    };
    OfficeFactory.prototype.exportSpreadsheet = function () {
        return new ExcelSpreadsheet();
    };
    return OfficeFactory;
}());
var OpenOfficeFactory = /** @class */ (function () {
    function OpenOfficeFactory() {
    }
    OpenOfficeFactory.prototype.exportTextDocument = function () {
        return new WriteTextDocument();
    };
    OpenOfficeFactory.prototype.exportSpreadsheet = function () {
        return new CalcSpreadsheet();
    };
    return OpenOfficeFactory;
}());
var OutputDocument = /** @class */ (function () {
    function OutputDocument(factory) {
        this.factory = factory;
    }
    OutputDocument.prototype.exportTextDoc = function () {
        return this.factory.exportTextDocument();
    };
    OutputDocument.prototype.exportSheetDoc = function () {
        return this.factory.exportSpreadsheet();
    };
    return OutputDocument;
}());
var office = new OfficeFactory();
var openOffice = new OpenOfficeFactory();
console.log("Office");
var outputDocOffice = new OutputDocument(office);
console.log(outputDocOffice.exportTextDoc());
console.log(outputDocOffice.exportSheetDoc());
console.log("Open Office");
var outputDocOpenOffice = new OutputDocument(openOffice);
console.log(outputDocOpenOffice.exportTextDoc());
console.log(outputDocOpenOffice.exportSheetDoc());
