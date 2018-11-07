interface IScalable {

    getName():string;
    getScale():number;

}

interface IStorageEngine {
    addItem(item: Product):void;
    getItem(index: number):Product;
    getCount():number;

}

class Product implements IScalable{
    
    private name: string;
    private weigth: number;
    
    constructor (name: string, weigth:number) {
        this.name = name;
        this.weigth = weigth;
    }

    public getScale ():number { 
        return this.weigth         
                                    
    }

    public getName ():string  {
        return this.name
    }

}

class ScalesStorageEngineArray implements IStorageEngine{

    private atScale:Product[]

    constructor (){
        this.atScale=[]
    }

    addItem(item:Product):number{
        this.atScale.push(item);
        return this.atScale.indexOf(item);
    }

    getItem(index: number):Product{
        
        let product = this.atScale[index];
        return product;
    }

    getCount():number{
        let total = 0;
        this.atScale.forEach (el =>{
            total+=el.getScale()
        })

        return total;
    }

 }

class ScalesStorageEngineLocalStorage implements IStorageEngine {

        private atScale
       
        constructor (){
            this.atScale=window.localStorage
            this.atScale.setItem ('storage', JSON.stringify([]))
        }

        addItem(item:Product):number{
            let myStorage  = this.atScale.getItem ('storage')
            myStorage=JSON.parse (myStorage);
            myStorage.push(item);
            let index:number = myStorage.indexOf(item)
            this.atScale.setItem( 'storage' , JSON.stringify(myStorage));
            return index;

        }
    
        getItem(index: number):Product{
            
            let myStorage  = this.atScale.getItem ('storage')
            myStorage=JSON.parse (myStorage)

            let classLikeProduct:Product[] = []

            myStorage.forEach((el, index)=>{
                const name = el.name
                const weigth = el.weigth
                classLikeProduct.push(new Product(name , weigth)) 
            })
          return classLikeProduct[index]
        }
    
        getCount():number{
            let myStorage  = this.atScale.getItem ('storage')
            myStorage=JSON.parse (myStorage)
            console.log(myStorage)

            // add methods
            let classLikeProduct:Product[] = []
            myStorage = myStorage.map((el, index)=>{
                const name = el.name
                const weigth = el.weigth
                classLikeProduct.push(new Product(name , weigth)) 
            })
            let total:number = 0
            classLikeProduct.forEach (el=>total+=el.getScale())

            return total
        }
        
      
}


class Scale3<StorageEngine extends IStorageEngine> {

    storage:StorageEngine;
    
    
        constructor(classRef: { new (): StorageEngine; }){
            this.storage = new classRef();
            
        };
    

    add(item: Product){
        this.storage.addItem(item);
    }

    getSumScale():number {
        return this.storage.getCount();
    };

    getNameList ():string[]{
        
        let i:number = 0
        let nameList:string[] = [];
       
        while (i!= null) {
            let tmp = this.storage.getItem(i)
            if (tmp){
                i++
                nameList.push (tmp.getName())
            } else {
                i=null
            }
        }

        return nameList
        
    }





}

let arrStorage = new Scale3(ScalesStorageEngineArray)
console.log(arrStorage)
arrStorage.add (new Product ('Tomato', 1500))
arrStorage.add (new Product ('Patato', 1300))
arrStorage.add (new Product ('Carrot', 1000))

console.log(arrStorage.getSumScale())
console.log(arrStorage.getNameList())

let storageAtLocalstorage = new Scale3(ScalesStorageEngineLocalStorage)
console.log(arrStorage)
storageAtLocalstorage.add (new Product ('Tomato', 2500))
storageAtLocalstorage.add (new Product ('Patato', 2300))
storageAtLocalstorage.add (new Product ('Carrot', 2000))
console.log(storageAtLocalstorage.getSumScale())
console.log(storageAtLocalstorage.getNameList())


