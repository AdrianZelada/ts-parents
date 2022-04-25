var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wage = /** @class */ (function () {
    function Wage(r, h) {
        this.rating = r;
        this.hour = h;
    }
    Wage.prototype.calcule = function () {
        return this.rating * this.hour;
    };
    return Wage;
}());
var WageDecorator = /** @class */ (function () {
    function WageDecorator(wage) {
        this.wage = wage;
    }
    WageDecorator.prototype.calcule = function () {
        return this.wage.calcule();
    };
    return WageDecorator;
}());
var TaxDecorator = /** @class */ (function (_super) {
    __extends(TaxDecorator, _super);
    function TaxDecorator(t, w) {
        var _this = _super.call(this, w) || this;
        _this.tax = t;
        return _this;
    }
    TaxDecorator.prototype.calcule = function () {
        var total = _super.prototype.calcule.call(this);
        var x = (total * this.tax) / 100;
        return total - x;
    };
    return TaxDecorator;
}(WageDecorator));
var SalaryIncreaseDecorator = /** @class */ (function (_super) {
    __extends(SalaryIncreaseDecorator, _super);
    function SalaryIncreaseDecorator(i, w) {
        var _this = _super.call(this, w) || this;
        _this.increase = i;
        return _this;
    }
    SalaryIncreaseDecorator.prototype.calcule = function () {
        var total = _super.prototype.calcule.call(this);
        return total + this.increase;
    };
    return SalaryIncreaseDecorator;
}(WageDecorator));
// person A;
var personAWage = new Wage(10, 8);
console.log('Total Salary');
console.log(personAWage.calcule());
var personATaxDecorator = new TaxDecorator(14, personAWage);
console.log('Tax');
console.log(personATaxDecorator.calcule());
var personASalaryIncr = new SalaryIncreaseDecorator(20, personATaxDecorator);
console.log('Salary Increase');
console.log(personASalaryIncr.calcule());
