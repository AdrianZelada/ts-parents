var SMSText = /** @class */ (function () {
    function SMSText(number, msg) {
        this.number = number;
        this.message = msg;
    }
    SMSText.prototype.execute = function () {
        console.log("send sms by twilio to ".concat(this.number, " ---> ").concat(this.message));
    };
    return SMSText;
}());
var Email = /** @class */ (function () {
    function Email(email, body) {
        this.email = email;
        this.body = body;
    }
    Email.prototype.execute = function () {
        console.log("email send by Google , ====> To: ".concat(this.email, " ====> ").concat(this.body));
    };
    return Email;
}());
var ControlerTransfers = /** @class */ (function () {
    function ControlerTransfers() {
        this.children = [];
    }
    ControlerTransfers.prototype.add = function (child) {
        this.children.push(child);
    };
    ControlerTransfers.prototype.execute = function () {
        this.children.forEach(function (child) {
            child.execute();
        });
    };
    return ControlerTransfers;
}());
var sms = new SMSText(111000, 'Hola como estas');
var email = new Email('zelada.torreza@gmail', "este es un email");
var composeController = new ControlerTransfers();
composeController.add(sms);
composeController.add(email);
composeController.execute();
