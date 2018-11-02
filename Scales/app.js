var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getScale = function () {
        return this.weigth;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        var _this = _super.call(this) || this;
        _this.name = 'Tomato';
        _this.weigth = Math.floor(Math.random() * 1000);
        return _this;
    }
    return Tomato;
}(Product));
var Potato = /** @class */ (function (_super) {
    __extends(Potato, _super);
    function Potato() {
        var _this = _super.call(this) || this;
        _this.name = 'Potato';
        _this.weigth = Math.floor(Math.random() * 1000);
        return _this;
    }
    return Potato;
}(Product));
var Carrot = /** @class */ (function (_super) {
    __extends(Carrot, _super);
    function Carrot() {
        var _this = _super.call(this) || this;
        _this.name = 'Carrot';
        _this.weigth = Math.floor(Math.random() * 1000);
        return _this;
    }
    return Carrot;
}(Product));
var Cabbage = /** @class */ (function (_super) {
    __extends(Cabbage, _super);
    function Cabbage() {
        var _this = _super.call(this) || this;
        _this.name = 'Cabbage';
        _this.weigth = Math.floor(Math.random() * 1000);
        return _this;
    }
    return Cabbage;
}(Product));
var toScale = [];
toScale.push(new Tomato());
toScale.push(new Potato());
toScale.push(new Carrot());
toScale.push(new Cabbage());
var Scale = /** @class */ (function () {
    function Scale() {
        this.atScale = [];
    }
    Scale.prototype.add = function (products) {
        this.atScale.push(products.shift());
    };
    Scale.prototype.getSumScale = function () {
        //Эта реализация работала сразу
        // let totalWeight: number = 0
        // this.atScale.forEach ((el)=>{
        //     //console.log (el.getScale())
        //     totalWeight+=el.getScale()})
        // return  totalWeight
        //эта реализация только после указания начального значения аккамулятора уже понятно почему
        var totalWeight = this.atScale.reduce(function (s, v) {
            return s + v.getScale();
        }, 0);
        return totalWeight;
    };
    Scale.prototype.getNameList = function () {
        var atScalesProducts = this.atScale.map(function (el) { return el.getName(); });
        return atScalesProducts;
    };
    return Scale;
}());
var scale = new Scale();
scale.add(toScale);
scale.add(toScale);
scale.add(toScale);
scale.add(toScale);
console.log(scale);
console.log("\u0422\u043E\u0432\u0430\u0440\u044B \u043D\u0430 \u0432\u0435\u0441\u0430\u0445", scale.getNameList());
console.log("\u041E\u0431\u0449\u0438\u0439 \u0432\u0435\u0441", scale.getSumScale());
//# sourceMappingURL=app.js.map