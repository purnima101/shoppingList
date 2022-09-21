import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() eventEmit=new EventEmitter();
  selectOne(choice:string){

    this.eventEmit.emit(choice)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
