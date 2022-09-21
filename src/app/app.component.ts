import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingList';
  value=""
  feature=""
outPut(data:string){
  this.feature=data

}

  get(value:string)
  {
      this.value=value
  }
}
