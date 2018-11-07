import {IScalable} from "Interface";

class Carrot implements IScalable {

    private name: string= '';
    private weigth: number = 0;
    constructor (){ 
       
        this.name = 'Carrot' ;
        this.weigth = Math.floor(Math.random ()*1000)
    }

    getName():string{
        return this.name

    };
    getScale():number{
        return this.weigth
    };

}

class Potato implements IScalable {
    private name: string= '';
    private weigth: number = 0;
    constructor (){ 
        
        this.name = 'Potato' ;
        this.weigth = Math.floor(Math.random ()*1000)
    }

    getName():string{
        return this.name

    };
    getScale():number{
        return this.weigth
    };
}

class Scale2 {

    atScale:IScalable[]=[]

    add(product:IScalable):void{
        this.atScale.push(product)
    }
    
    getSumScale():number{
       
        let totalWeight: number = 0

        this.atScale.forEach ((el)=>{
            totalWeight += el.getScale()
        })
             
        return  totalWeight
    }

    getNameList():string[]{
        let atScalesProductsList:string[] = this.atScale.map((el)=>el.getName())
        return atScalesProductsList
    }

}

let newScale: Scale2 = new Scale2

newScale.add(new Potato)
newScale.add(new Potato)
newScale.add(new Carrot)
newScale.add(new Carrot)

console.log(newScale)
console.log('общий вес', newScale.getSumScale())
console.log('продукты на весах', newScale.getNameList())

