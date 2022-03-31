var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var typeAuthentication;
(function (typeAuthentication) {
    typeAuthentication[typeAuthentication["google"] = 0] = "google";
    typeAuthentication[typeAuthentication["facebook"] = 1] = "facebook";
    typeAuthentication[typeAuthentication["github"] = 2] = "github";
})(typeAuthentication || (typeAuthentication = {}));
var Authentication = /** @class */ (function () {
    function Authentication() {
    }
    Authentication.prototype.login = function () {
        throw new Error("Method not implemented.");
    };
    Authentication.prototype.logout = function () {
        throw new Error("Method not implemented.");
    };
    Authentication.prototype.validateToken = function () {
        throw new Error("Method not implemented.");
    };
    return Authentication;
}());
var AuthenticationGoogle = /** @class */ (function (_super) {
    __extends(AuthenticationGoogle, _super);
    function AuthenticationGoogle() {
        return _super.call(this) || this;
    }
    return AuthenticationGoogle;
}(Authentication));
var AuthenticationFacebook = /** @class */ (function (_super) {
    __extends(AuthenticationFacebook, _super);
    function AuthenticationFacebook() {
        return _super.call(this) || this;
    }
    return AuthenticationFacebook;
}(Authentication));
var AuthenticationGithub = /** @class */ (function (_super) {
    __extends(AuthenticationGithub, _super);
    function AuthenticationGithub() {
        return _super.call(this) || this;
    }
    return AuthenticationGithub;
}(Authentication));
var AuthenticationFactory = /** @class */ (function () {
    function AuthenticationFactory() {
    }
    AuthenticationFactory.getAuthentication = function (type) {
        if (type == typeAuthentication.google) {
            return new AuthenticationGoogle();
        }
        if (type == typeAuthentication.facebook) {
            return new AuthenticationFacebook();
        }
        if (type == typeAuthentication.github) {
            return new AuthenticationGithub();
        }
    };
    return AuthenticationFactory;
}());
var auth = AuthenticationFactory.getAuthentication(typeAuthentication.google);
console.log(auth);
