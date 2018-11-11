
// Разработать компонент Sprite, который отображает CSS-спрайт. 
// Реквизиты спрайта передаются живыми входными свойствами url, offset-x, offset-y, width, height. 
// При щелчке спрайт выдаёт событие clicked. 
// Хост-компонент при приёме события clicked должен переключать спрайт на отображение другого изображения. 
// В качестве спрайт-листа можно использовать: http://fe.it-academy.by/Examples/cards2.png


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

private url:string = '../../assets/cards2.png'; // постоянно
private offsetX:number= -2;// сдвиг по икс на 6 пикселей для cмены картинки 2 скраю
private offsetY:number= -1; //сдвиг по игрик 6 пикселей для cмены картинки 1 скраю
private width:string= '138px'; // размер отображения постоянен
private height:string='188px'; // размер отображения постоянен

private currentPosition:{x:number,y:number} = {x: 1, y: 1};

getUrl ():string {
 return this.url
}

getOffsetX ():number{
  return this.offsetX
}
setOffsetX (val:number):void{
this.offsetX = val 
}

getOffsetY ():number{
  return this.offsetY
}
setOffsetY(val:number):void{
this.offsetY = val
}

getWidth ():string{
 return this.width
}

getHeight ():string{
  return this.height
}
getCurrentPosition ():{x:number, y:number}{
  return this.currentPosition
}
setCurrentPosition (x:number, y:number):void{
  this.currentPosition.x = x;
  this.currentPosition.y = y;
}

changePicture (){
  
  this.setCurrentPosition (this.getCurrentPosition().x+= 1, this.getCurrentPosition().y)
  
  if (this.getCurrentPosition().x >= 5 && this.getCurrentPosition().y !== 14) {

    this.setCurrentPosition( 1 , this.getCurrentPosition().y+=1);
    this.setOffsetX(-2);
    this.setOffsetY (this.getOffsetY()-188-6);
    
    } else {

      if (this.getCurrentPosition().y === 14) {
        this.setOffsetX(this.getOffsetX()-(138+6)*2);
        this.setCurrentPosition (this.getCurrentPosition().x+=2, this.getCurrentPosition().y);
        
        if (this.getCurrentPosition().x >= 5) {
          this.setCurrentPosition(this.getCurrentPosition().x , 1 );
          this.setOffsetY(-1); 
          this.setOffsetX(-2);
     
        }
        
      } else {
       this.setOffsetX (this.getOffsetX()-138-6)
      }
  }
  
}

}
