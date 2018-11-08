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
        return this.atScale.indexOf(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        var product = this.atScale[index];
        return product;
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        var total = 0;
        this.atScale.forEach(function (el) {
            total += el.getScale();
        });
        return total;
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
        var index = myStorage.indexOf(item);
        this.atScale.setItem('storage', JSON.stringify(myStorage));
        return index;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var myStorage = this.atScale.getItem('storage');
        myStorage = JSON.parse(myStorage);
        var classLikeProduct = [];
        // add methods
        myStorage.forEach(function (el, index) {
            var name = el.name;
            var weigth = el.weigth;
            classLikeProduct.push(new Product(name, weigth));
        });
        return classLikeProduct[index];
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var myStorage = this.atScale.getItem('storage');
        myStorage = JSON.parse(myStorage);
        // add methods
        var classLikeProduct = [];
        myStorage = myStorage.map(function (el, index) {
            var name = el.name;
            var weigth = el.weigth;
            classLikeProduct.push(new Product(name, weigth));
        });
        var total = 0;
        classLikeProduct.forEach(function (el) { return total += el.getScale(); });
        return total;
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
        return this.storage.getCount();
    };
    ;
    Scale3.prototype.getNameList = function () {
        var i = 0;
        var nameList = [];
        while (i != null) {
            var tmp = this.storage.getItem(i);
            if (tmp) {
                i++;
                nameList.push(tmp.getName());
            }
            else {
                i = null;
            }
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
console.log(arrStorage.getSumScale());
console.log(arrStorage.getNameList());
var storageAtLocalstorage = new Scale3(ScalesStorageEngineLocalStorage);
console.log(storageAtLocalstorage);
storageAtLocalstorage.add(new Product('Tomato', 2500));
storageAtLocalstorage.add(new Product('Patato', 2300));
storageAtLocalstorage.add(new Product('Carrot', 2000));
console.log(storageAtLocalstorage.getSumScale());
console.log(storageAtLocalstorage.getNameList());
//# sourceMappingURL=app.js.map