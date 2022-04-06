var Database = /** @class */ (function () {
    function Database() {
        if (Database.instance) {
            return Database.instance;
        }
        this.config = Date.now();
        Database.instance = this;
    }
    return Database;
}());
var database1 = new Database();
setTimeout(function () {
    var database2 = new Database();
    setTimeout(function () {
        console.log('instance 1');
        console.log(database1);
        console.log('instance 2');
        console.log(database2);
    }, 100);
}, 1000);
