var Product = /** @class */ (function () {
    function Product(name, weigth) {
        this.name = name;
        this.weigth = weigth;
    }
    Product.prototype.getScale = function () {
        return this.weigth;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.atScale = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.atScale.push(item);
        return this.atScale.length - 1;
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        var product = this.atScale[index];
        return product;
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.atScale.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.atScale = window.localStorage;
        this.atScale.setItem('storage', JSON.stringify([]));
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var myStorage = this.atScale.getItem('storage');
        myStorage = JSON.parse(myStorage);
        myStorage.push(item);
        this.atScale.setItem('storage', JSON.stringify(myStorage));
        return myStorage.length - 1;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var myStorage = this.atScale.getItem('storage');
        myStorage = JSON.parse(myStorage);
        // add methods
        return new Product(myStorage[index].name, myStorage[index].weigth);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var myStorage = this.atScale.getItem('storage');
        myStorage = JSON.parse(myStorage);
        return myStorage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Scale3 = /** @class */ (function () {
    function Scale3(classRef) {
        this.storage = new classRef();
    }
    ;
    Scale3.prototype.add = function (item) {
        this.storage.addItem(item);
    };
    Scale3.prototype.getSumScale = function () {
        var length = this.storage.getCount();
        var total = 0;
        for (var i = 0; i < length; i++) {
            total += this.storage.getItem(i).getScale();
        }
        return total;
    };
    ;
    Scale3.prototype.getNameList = function () {
        var length = this.storage.getCount();
        var nameList = [];
        for (var i = 0; i < length; i++) {
            nameList.push(this.storage.getItem(i).getName());
        }
        return nameList;
    };
    return Scale3;
}());
var arrStorage = new Scale3(ScalesStorageEngineArray);
console.log(arrStorage);
arrStorage.add(new Product('Tomato', 1500));
arrStorage.add(new Product('Patato', 1300));
arrStorage.add(new Product('Carrot', 1000));
console.log(arrStorage.getSumScale(), ' общий вес');
console.log(arrStorage.getNameList(), ' общий список');
var storageAtLocalstorage = new Scale3(ScalesStorageEngineLocalStorage);
console.log(storageAtLocalstorage);
storageAtLocalstorage.add(new Product('Patato', 2300));
storageAtLocalstorage.add(new Product('Carrot', 2000));
storageAtLocalstorage.add(new Product('Tomato', 2500));
console.log(storageAtLocalstorage.getSumScale(), ' общий вес');
console.log(storageAtLocalstorage.getNameList(), ' общий список');
//# sourceMappingURL=app.js.map