
interface IStorageEngine {
    addItem(item: Product):void;
    getItem(index: number):Product;
    getCount():number;

}

class Product{
    
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
        return this.atScale.length -1 ;
    }

    getItem(index: number):Product{
        
        let product: Product = this.atScale[index];
        return product;
    }

    getCount():number{
        return this.atScale.length;
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
            
            this.atScale.setItem( 'storage' , JSON.stringify(myStorage));
            return myStorage.length-1;

        }
    
        getItem(index: number):Product{
            
            let myStorage  = this.atScale.getItem ('storage')
            myStorage=JSON.parse (myStorage)

            
            // add methods
            
          return new Product (myStorage[index].name, myStorage[index].weigth) 
        }
    
        getCount():number{
            let myStorage  = this.atScale.getItem ('storage')
            myStorage=JSON.parse (myStorage)
           
            return myStorage.length
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

        let length:number = this.storage.getCount()
        let total:number = 0
        
        for (let i:number = 0 ; i<length; i++) {
              total += this.storage.getItem(i).getScale()
       }

        return total
    };

    getNameList ():string[]{
        
        let length:number = this.storage.getCount()
        let nameList:string[] = [];

        for (let i:number = 0 ; i<length; i++) {
            nameList.push (this.storage.getItem(i).getName())
     }

        return nameList
    }

}

let arrStorage = new Scale3(ScalesStorageEngineArray)
console.log(arrStorage)
arrStorage.add (new Product ('Tomato', 1500))
arrStorage.add (new Product ('Patato', 1300))
arrStorage.add (new Product ('Carrot', 1000))
console.log(arrStorage.getSumScale() , ' общий вес')
console.log(arrStorage.getNameList() , ' общий список')

let storageAtLocalstorage = new Scale3(ScalesStorageEngineLocalStorage)
console.log(storageAtLocalstorage)
storageAtLocalstorage.add (new Product ('Patato', 2300))
storageAtLocalstorage.add (new Product ('Carrot', 2000))
storageAtLocalstorage.add (new Product ('Tomato', 2500))
console.log(storageAtLocalstorage.getSumScale() , ' общий вес')
console.log(storageAtLocalstorage.getNameList() , ' общий список')


