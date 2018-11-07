declare module "Interface" {
    export interface IScalable {

        getName():string;
        getScale():number;
    
    }

    export interface IStorageEngine {
        addItem(item):void;
        getItem(index: number):void;
        getCount():number;

    }

}