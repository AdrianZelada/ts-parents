"use strict";
exports.__esModule = true;
var fs = require("fs");
var UserFile = /** @class */ (function () {
    function UserFile(name, f_name, f) {
        this.name = name;
        this.file_name = f_name;
        this.file = f;
    }
    UserFile.prototype.getText = function () {
        return this.file.join(" ");
    };
    return UserFile;
}());
var UserFileFactory = /** @class */ (function () {
    function UserFileFactory() {
    }
    UserFileFactory.getUserFile = function (name, file_name) {
        if (UserFileFactory.files[file_name] == null) {
            UserFileFactory.files[file_name] = fs.readdirSync(file_name);
        }
        return new UserFile(name, file_name, UserFileFactory.files[file_name]);
    };
    return UserFileFactory;
}());
var usersFile = [];
var users = [
    { name: 'Adrian', file_name: 'output-28-04-2022.xls' },
    { name: 'Walter', file_name: 'output-28-04-2022.xls' },
    { name: 'Adrian', file_name: 'output-29-04-2022.xls' },
    { name: 'Walter', file_name: 'output-29-04-2022.xls' }
];
usersFile = users.map(function (user) {
    return UserFileFactory.getUserFile(user.name, user.file_name);
});
usersFile.forEach(function (user) {
    user.getText();
});
