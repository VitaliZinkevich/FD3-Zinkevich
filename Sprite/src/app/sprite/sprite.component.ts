import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent {
  
  @Input('url')
  url:string

  @Input('offsetX')
  offsetX:number
  
  @Input('offsetY')
  offsetY:number
  @Input('width')
  width:string
  @Input('height')
  height:string

  @Output("change-picture")
  clicked:EventEmitter<void>=new EventEmitter<void>();


  getUrl () {
    return this.url
   }
   
   getOffsetX ():number{
     return this.offsetX
   }

   getOffsetY ():number{
     return this.offsetY
   }

   getWidth ():string{
    return this.width
   }
   
   getHeight ():string{
     return this.height
   }
   

 
}
