class Product {
    
    protected name: string;
    protected weigth: number;
    
    constructor () {
    }

    public getScale ():number { 
        return this.weigth         
                                    
    }

    public getName ():string  {
        return this.name
    }

}

class Tomato extends Product{
    
    constructor (){ 
        super();
        this.name = 'Tomato' ;
        this.weigth = Math.floor(Math.random ()*1000)
    }
   
}

class Potato extends Product {
    constructor (){ 
        super();
        this.name = 'Potato' ;
        this.weigth = Math.floor(Math.random ()*1000)
    }

}

class Carrot extends Product {
    constructor (){ 
        super();
        this.name = 'Carrot' ;
        this.weigth = Math.floor(Math.random ()*1000)
    }

}

class Cabbage extends Product {
    constructor (){ 
        super();
        this.name = 'Cabbage';
        this.weigth = Math.floor(Math.random ()*1000)
    }

}

let toScale:Product[] = [];
toScale.push (new Tomato())
toScale.push (new Potato())
toScale.push (new Carrot())
toScale.push (new Cabbage())



class Scale {

    atScale:Product[]=[]

    add(products:Product[]):void{
        this.atScale.push(products.shift())
    }
    
    getSumScale():number{
        
        //Эта реализация работала сразу
        // let totalWeight: number = 0
        // this.atScale.forEach ((el)=>{
        //     //console.log (el.getScale())
        //     totalWeight+=el.getScale()})
             
        // return  totalWeight
        
        
        //эта реализация только после указания начального значения аккамулятора уже понятно почему
        let totalWeight:number=this.atScale.reduce((s:number,v:Product):any=>{
            return s+ v.getScale()
        },0)

        return totalWeight


    }

    getNameList():string[]{
        let atScalesProducts:string[] = this.atScale.map((el: Product)=>el.getName())
        return atScalesProducts
    }

}

let scale:Scale = new Scale()

scale.add (toScale)
scale.add (toScale)
scale.add (toScale)
scale.add (toScale)

console.log (scale)
console.log (`Товары на весах`, scale.getNameList())
console.log (`Общий вес`, scale.getSumScale())
