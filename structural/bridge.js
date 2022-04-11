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
var BeginNotify = /** @class */ (function () {
    function BeginNotify() {
    }
    BeginNotify.prototype.render = function (data) {
        return "<div>\n        <h1>User: ".concat(data.user, "</h1>\n        <h2>Begin: ").concat(data.title, "</h2>\n        <p>").concat(data.body, "</p>\n        </div>");
    };
    return BeginNotify;
}());
var FinishNotify = /** @class */ (function () {
    function FinishNotify() {
    }
    FinishNotify.prototype.render = function (data) {
        return "<div>\n        <h1>User: ".concat(data.user, "</h1>\n        <h2>Finish: ").concat(data.title, "</h2>\n        <p>").concat(data.body, "</p>\n        </div>");
    };
    return FinishNotify;
}());
var BaseItemListAbstract = /** @class */ (function () {
    function BaseItemListAbstract() {
    }
    BaseItemListAbstract.prototype.render = function (data) {
        var html = this.item.render(data);
        return html;
    };
    return BaseItemListAbstract;
}());
var SimpleItemList = /** @class */ (function (_super) {
    __extends(SimpleItemList, _super);
    function SimpleItemList(item) {
        var _this = _super.call(this) || this;
        _this.item = item;
        return _this;
    }
    return SimpleItemList;
}(BaseItemListAbstract));
var ImportantItemList = /** @class */ (function (_super) {
    __extends(ImportantItemList, _super);
    function ImportantItemList(item) {
        var _this = _super.call(this) || this;
        _this.item = item;
        return _this;
    }
    ImportantItemList.prototype.render = function (data) {
        var html = this.item.render(data);
        return "<div class=\"color-red\">".concat(html, "</div>");
    };
    return ImportantItemList;
}(BaseItemListAbstract));
var data = [
    {
        user: 'Adrian ',
        title: "Initial",
        type: 1,
        body: "asdfasdfasdfasdf",
        priority: 1
    },
    {
        user: 'Walter',
        title: "Initial",
        type: 1,
        body: "asdfasdfasdfasdf",
        priority: 2
    },
    {
        user: 'Adrian ',
        title: "Finish",
        type: 2,
        body: "asdfasdfasdfasdf",
        priority: 2
    },
    {
        user: 'Walter',
        title: "Finishhhhhh",
        type: 2,
        body: "asdfasdfasdfasdf",
        priority: 1
    }
];
var datax = data.map(function (item) {
    var notify;
    if (item.type == 1) {
        notify = new BeginNotify();
    }
    if (item.type == 2) {
        notify = new FinishNotify();
    }
    var itemList;
    if (item.priority == 1) {
        itemList = new SimpleItemList(notify);
    }
    if (item.priority == 2) {
        itemList = new ImportantItemList(notify);
    }
    return itemList.render(item);
});
console.log(datax);
