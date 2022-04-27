class ConvertToXml{
    static stringToXml(text: string){
        // any librery
        return `String to Xml: ${text}`;
    } 
}

class ConvertToCsv{
    static jsonToCsv(data: any){
       // any librery
       return `Json to Csv: ${data}`;
   } 
}

class ConvertToJson{
    static xmlToJson(xml: string){
        // any librery
        return `Xml to Json: ${xml}`;
    } 
 }


class ConvertDataFacade{
    static stringToXml(text: string) {
        return ConvertToXml.stringToXml(text);
    }

    static jsonToCsv(data: any) {
        return ConvertToCsv.jsonToCsv(data);
    }

    static xmlToJson(xml: string) {
        return ConvertToJson.xmlToJson(xml);
    }
}

console.log(ConvertDataFacade.stringToXml('ConvertDataFacade.stringToXml'));
console.log(ConvertDataFacade.jsonToCsv({json: {name: 'facade'},csv: true }));
console.log(ConvertDataFacade.xmlToJson('<xml></xml>'));



