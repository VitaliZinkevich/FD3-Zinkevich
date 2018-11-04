var Carrot = /** @class */ (function () {
    function Carrot() {
        this.name = '';
        this.weigth = 0;
        this.name = 'Carrot';
        this.weigth = Math.floor(Math.random() * 1000);
    }
    Carrot.prototype.getName = function () {
        return this.name;
    };
    ;
    Carrot.prototype.getScale = function () {
        return this.weigth;
    };
    ;
    return Carrot;
}());
var Potato = /** @class */ (function () {
    function Potato() {
        this.name = '';
        this.weigth = 0;
        this.name = 'Potato';
        this.weigth = Math.floor(Math.random() * 1000);
    }
    Potato.prototype.getName = function () {
        return this.name;
    };
    ;
    Potato.prototype.getScale = function () {
        return this.weigth;
    };
    ;
    return Potato;
}());
var Scale2 = /** @class */ (function () {
    function Scale2() {
        this.atScale = [];
    }
    Scale2.prototype.add = function (product) {
        this.atScale.push(product);
    };
    Scale2.prototype.getSumScale = function () {
        var totalWeight = 0;
        this.atScale.forEach(function (el) {
            totalWeight += el.getScale();
        });
        return totalWeight;
    };
    Scale2.prototype.getNameList = function () {
        var atScalesProductsList = this.atScale.map(function (el) { return el.getName(); });
        return atScalesProductsList;
    };
    return Scale2;
}());
var newScale = new Scale2;
newScale.add(new Potato);
newScale.add(new Potato);
newScale.add(new Carrot);
newScale.add(new Carrot);
console.log(newScale);
console.log('общий вес', newScale.getSumScale());
console.log('продукты на весах', newScale.getNameList());
//# sourceMappingURL=app.js.map