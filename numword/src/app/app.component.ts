import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}


// Разработать чистый (pure) канал numword, который строит строку типа "25 яблок", правильно подбирая падеж существительного. 
// Логику можно взять отсюда. 
// Три падежа существительного должны передаваться в виде аргументов канала. 

// Отобразить поле ввода числа, рядом с полем отобразить фразу «У вас 22 яблока», используя примерно такой синтаксис:
// У вас {{apples.value|numword:'яблоко':'яблока':'яблок'}}