import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numword',
  pure:true
})
export class NumwordPipe implements PipeTransform {

  transform(value: number, args?: string, args1?: string, args2?: string): string {

    //'яблоко':'яблока':'яблок'
    let dd:number=value%100;
    
    if ( (dd>=11) && (dd<=19) ) {
          return value +' '+ args2;
        }
            
    let d:number=value%10;

        if ( d==1 ) {
          return value+' '+ args;
        }
            
        if ( (d>=2) && (d<=4) ) {
          return value +' '+ args1;
        }
            
    return value +' '+ args2;

    
  }

}


// function getNumWord(num,word1,word2,word5) {
//   var dd=num%100;
//   if ( (dd>=11) && (dd<=19) )
//       return word5;
//   var d=num%10;
//   if ( d==1 )
//       return word1;
//   if ( (d>=2) && (d<=4) )
//       return word2;
//   return word5;
// }

// function test() {
//   var applesS=prompt('Сколько у вас яблок?');
//   var apples=parseInt(applesS);
//   alert( 'У вас ' + apples + ' ' + getNumWord(apples,'яблоко','яблока','яблок') + '!' );
// }                                                    'яблоко':'яблока':'яблок'