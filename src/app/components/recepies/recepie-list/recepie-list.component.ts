import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recepies.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe("momo","good food","https://img.etimg.com/thumb/msid-70813564,width-650,imgsize-348620,,resizemode-4,quality-100/momos.jpg"),

    new Recipe("puchka"," very good food","https://www.palatesdesire.com/wp-content/uploads/2018/09/Puchka_pani_puri@palates_desire-1024x683.jpg.webp"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
