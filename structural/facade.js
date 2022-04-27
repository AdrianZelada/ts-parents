var ConvertToXml = /** @class */ (function () {
    function ConvertToXml() {
    }
    ConvertToXml.stringToXml = function (text) {
        // any librery
        return "String to Xml: ".concat(text);
    };
    return ConvertToXml;
}());
var ConvertToCsv = /** @class */ (function () {
    function ConvertToCsv() {
    }
    ConvertToCsv.jsonToCsv = function (data) {
        // any librery
        return "Json to Csv: ".concat(data);
    };
    return ConvertToCsv;
}());
var ConvertToJson = /** @class */ (function () {
    function ConvertToJson() {
    }
    ConvertToJson.xmlToJson = function (xml) {
        // any librery
        return "Xml to Json: ".concat(xml);
    };
    return ConvertToJson;
}());
var ConvertDataFacade = /** @class */ (function () {
    function ConvertDataFacade() {
    }
    ConvertDataFacade.stringToXml = function (text) {
        return ConvertToXml.stringToXml(text);
    };
    ConvertDataFacade.jsonToCsv = function (data) {
        return ConvertToCsv.jsonToCsv(data);
    };
    ConvertDataFacade.xmlToJson = function (xml) {
        return ConvertToJson.xmlToJson(xml);
    };
    return ConvertDataFacade;
}());
console.log(ConvertDataFacade.stringToXml('ConvertDataFacade.stringToXml'));
console.log(ConvertDataFacade.jsonToCsv({ json: { name: 'facade' }, csv: true }));
console.log(ConvertDataFacade.xmlToJson('<xml></xml>'));
