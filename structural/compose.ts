interface ITransferInformation{
    execute(): void;   
}

class SMSText implements ITransferInformation{
    private number: number;
    private message: string;

    constructor(number: number, msg: string) {
        this.number = number;
        this.message = msg;
    }

    execute(): void {
        console.log(`send sms by twilio to ${this.number} ---> ${this.message}`);
    }
}

class Email implements ITransferInformation{
    private email: string;
    private body: string;

    constructor(email: string, body: string) {
        this.email = email;
        this.body = body;
    }

    execute(): void {
        console.log(`email send by Google , ====> To: ${this.email} ====> ${this.body}`);
    }
}


class ControlerTransfers implements ITransferInformation{

    children: Array<ITransferInformation> = [];

    add(child: ITransferInformation) {
        this.children.push(child);
    }

    execute(): void {
        this.children.forEach((child: ITransferInformation) => {
            child.execute();
        });
    }
}


const sms = new SMSText(111000,'Hola como estas');
const email = new Email('zelada.torreza@gmail', "este es un email");


const composeController = new ControlerTransfers();

composeController.add(sms);
composeController.add(email);


composeController.execute();